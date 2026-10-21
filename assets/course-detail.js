'use strict';

function section(id, title, items, className) {
  return `<section id="${id}" class="course-section"><h2>${title}</h2>${items.map(item => `<div class="${className}">${item}</div>`).join('')}</section>`;
}

function guidedExample(guide) {
  const example = guide.example;
  return `<div class="method guided-example"><h3>${example.title}</h3><p><strong>Énoncé.</strong> ${example.statement}</p><ol>${example.steps.map(step => `<li>${step}</li>`).join('')}</ol><p><strong>Conclusion.</strong> ${example.conclusion}</p></div>`;
}

function practice(level) {
  const data = COURSE_PRACTICE[level];
  if (!data) return '';
  return `<section id="examples" class="course-section"><h2>Exemples corrigés</h2>${data.examples.map(example => `<div class="method"><h3>${example.title}</h3><p><strong>Énoncé.</strong> ${example.statement}</p><details><summary>Lire le raisonnement</summary><p>${example.correction}</p></details></div>`).join('')}<h3>À toi de jouer</h3><ol class="exercise-list">${data.exercises.map(exercise => `<li>${exercise}</li>`).join('')}</ol></section>`;
}

function renderCourse() {
  const level = Number(new URLSearchParams(location.search).get('level'));
  const course = ECS_COURSES.find(item => item.level === level) || ECS_COURSES[0];
  const guide = COURSE_GUIDES[course.level];
  document.title = `${course.title} — Mathématiques Prépa`;
  const sections = [['understand','Comprendre'], ['definitions','Définitions'], ['results','Résultats'], ['proofs','Démonstrations'], ['methods','Méthodes'], ['guided','Exemple guidé'], ['examples','Pratique']];
  document.getElementById('page').innerHTML = `
    <header class="course-head"><div><span class="pill gray">${course.year}</span><span class="pill">${course.module}</span><span class="pill green">Niveau ${course.level}</span><h1>${course.title}</h1><p class="muted">${course.theme}</p></div></header>
    <p class="course-intro">${course.intro}</p>
    <div class="row"><a class="btn" href="qcm.html?course=${course.level}">S’entraîner sur ce chapitre</a><a class="btn secondary" href="exam-questions.html?course=${course.level}">Exercices type épreuves</a></div>
    <nav class="lesson-toc" aria-label="Sommaire du chapitre">${sections.map(([id,title]) => `<a href="#${id}">${title}</a>`).join('')}</nav>
    <section id="understand" class="course-section"><h2>Comprendre le chapitre</h2>${guide.understanding.map(text => `<p>${text}</p>`).join('')}</section>
    ${section('definitions','Définitions importantes',course.defs,'def')}
    ${section('results','Résultats et conditions d’application',course.results,'result')}
    ${section('proofs','Démonstrations clés',course.demos,'demo')}
    ${section('methods','Méthodes types',course.methods,'method')}
    <section id="guided" class="course-section"><h2>Un exemple pas à pas</h2>${guidedExample(guide)}<div class="demo"><strong>Erreur fréquente à éviter.</strong><p>${guide.pitfall}</p></div></section>
    ${practice(course.level)}
    <section class="course-section"><h2>Plan de travail conseillé</h2><ol><li>Reformule les définitions et explique le rôle de chaque symbole.</li><li>Pour chaque théorème, identifie les hypothèses avant d’utiliser sa conclusion.</li><li>Refais l’exemple guidé, puis les exemples corrigés en masquant le raisonnement.</li><li>Résous les exercices du chapitre et vérifie chaque étape de calcul.</li><li>Teste tes acquis avec le QCM puis les exercices type épreuves.</li></ol></section>`;
}

renderCourse();
