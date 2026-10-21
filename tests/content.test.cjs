const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const katex = require('../assets/vendor/katex/katex.min.js');

const context = vm.createContext({ localStorage: { getItem: () => null } });
const files = [
  'data', 'qcm-extra', 'courses-data', 'courses-extra', 'courses-extra-2',
  'courses-guides', 'course-practice', 'course-practice-2', 'qcm-by-course',
  'exam-exercises', 'exam-exercises-analysis', 'exam-exercises-algebra',
  'exam-exercises-probability'
];
for (const file of files) {
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../assets', `${file}.js`), 'utf8'), context, { filename: file });
}
const data = vm.runInContext('({ courses:ECS_COURSES, guides:COURSE_GUIDES, practice:COURSE_PRACTICE, questions:DEFAULT_QUESTIONS, exams:EXAM_EXERCISES })', context);

function strings(value, visit) {
  if (typeof value === 'string') visit(value);
  else if (value && typeof value === 'object') Object.values(value).forEach(item => strings(item, visit));
}

test('every chapter has a complete guide, practice and exam content', () => {
  assert.equal(data.courses.length, 36);
  assert.equal(new Set(data.courses.map(course => course.level)).size, 36);
  for (const course of data.courses) {
    const guide = data.guides[course.level];
    assert(guide, `Guide missing for chapter ${course.level}`);
    assert.equal(guide.understanding.length, 2);
    assert.equal(guide.example.steps.length, 3);
    assert(guide.example.statement && guide.example.conclusion && guide.pitfall);
    assert(data.practice[course.level]?.examples.length);
    assert(data.exams.some(exam => exam.level === course.level && exam.exercises.length));
  }
});

test('all authored and generated formulas parse, with accessible MathML', () => {
  let count = 0;
  strings(data, text => {
    for (const match of text.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g)) {
      const formula = match[1] ?? match[2];
      assert(!/[<>]/.test(formula), 'Use \\lt and \\gt to preserve formulas inserted as HTML');
      const output = katex.renderToString(formula, { throwOnError: true, strict: 'error', trust: false, output: 'htmlAndMathml' });
      assert(output.includes('<math'), `Missing MathML for ${formula}`);
      count++;
    }
  });
  assert(count > 2000, 'Formula delimiters are missing from content');
});

test('generated questions retain valid answers and the chapter explanations', () => {
  assert.equal(new Set(data.questions.map(question => question.id)).size, data.questions.length);
  for (const question of data.questions) {
    assert.equal(question.options.length, 4, question.id);
    assert.match(question.answer, /^[A-D]$/, question.id);
    assert(question.options.every(option => typeof option === 'string' && option.length));
    assert(question.explanation, question.id);
  }
  for (const course of data.courses) {
    const question = data.questions.find(item => item.id === `course-${course.level}-q1`);
    assert(question.explanation.includes(data.guides[course.level].understanding[0]));
    assert(question.explanation.includes(data.guides[course.level].pitfall));
  }
});
