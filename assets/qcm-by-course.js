function makeCourseQuestions(course){
  const baseId = `course-${course.level}`;
  const theme = course.theme;
  const level = course.level <= 12 ? 'moyen' : 'difficile';
  const firstDef = (course.defs && course.defs[0] ? course.defs[0].replace(/<[^>]*>/g,'') : 'Définition du chapitre');
  const firstResult = (course.results && course.results[0] ? course.results[0].replace(/<[^>]*>/g,'') : 'Résultat du chapitre');
  const firstMethod = (course.methods && course.methods[0] ? course.methods[0].replace(/<[^>]*>/g,'') : 'Méthode du chapitre');
  const guide = COURSE_GUIDES[course.level];
  const context = `<p>${guide.understanding[0]}</p><p><strong>À vérifier.</strong> ${guide.pitfall}</p>`;
  return [
    {
      id:`${baseId}-q1`,theme,level,source:'cours',
      question:`Dans le chapitre « ${course.title} », quelle affirmation correspond le mieux à une définition importante ?`,
      options:[firstDef,'Une propriété vraie uniquement pour les matrices diagonales','Une formule valable seulement en probabilité continue','Un critère sans hypothèse'],
      answer:'A',explanation:`<p>La définition à connaître est : ${firstDef}</p>${context}`
    },
    {
      id:`${baseId}-q2`,theme,level,source:'cours',
      question:`Quel résultat est central pour « ${course.title} » ?`,
      options:['Un résultat du chapitre est nécessairement faux si la fonction n’est pas polynomiale',firstResult,'Tout objet étudié est toujours inversible','La convergence est automatique sans hypothèse'],
      answer:'B',explanation:`<p>Le résultat central est : ${firstResult}</p>${context}`
    },
    {
      id:`${baseId}-q3`,theme,level,source:'cours',
      question:`Quelle méthode est la plus adaptée dans le thème « ${theme} » ?`,
      options:['Choisir une réponse sans vérifier les hypothèses','Remplacer systématiquement une somme par un produit',firstMethod,'Éviter les définitions et ne faire que du calcul'],
      answer:'C',explanation:`<p>Méthode type : ${firstMethod}</p><p>${guide.understanding[1]}</p><p><strong>Attention.</strong> ${guide.pitfall}</p>`
    },
    {
      id:`${baseId}-q4`,theme,level,source:'cours',
      question:`Pourquoi les hypothèses sont-elles importantes dans « ${course.title} » ?`,
      options:['Elles ne servent jamais','Elles garantissent que le théorème ou la méthode s’applique correctement','Elles peuvent toujours être ignorées en QCM','Elles changent uniquement la présentation'],
      answer:'B',explanation:`<p>En mathématiques, un résultat n’est valide que sous ses hypothèses. Les vérifier permet de justifier chaque étape du raisonnement.</p><p>${guide.pitfall}</p>`
    }
  ];
}

if (typeof ECS_COURSES !== 'undefined') {
  DEFAULT_QUESTIONS.push(...ECS_COURSES.flatMap(makeCourseQuestions));
}
