function examTemplates(course){
  const t=course.theme.toLowerCase();
  const m=course.module.toLowerCase();
  if(t.includes('série') && !t.includes('entière')) return [
    ['Riemann-Bertrand','Étudier selon α la nature de Σ 1/[n(ln n)^α].','Utiliser le critère de Bertrand : convergence si α>1, divergence sinon.'],
    ['Série alternée','Étudier Σ(-1)^n/ln(n), n≥2.','Le terme 1/ln(n) décroît vers 0 à partir d’un certain rang : convergence par Leibniz, non absolue.'],
    ['Équivalent positif','Étudier Σ(1-cos(1/n)).','1-cos(u)~u²/2, donc terme équivalent à 1/(2n²) : convergence.'],
    ['D’Alembert','Étudier Σ n!/n^n.','Le quotient u_{n+1}/u_n=(n/(n+1))^n tend vers e^{-1}<1.']
  ];
  if(t.includes('intégrale')) return [
    ['Riemann en 0','Étudier ∫_0^1 dx/x^α selon α.','Primitive de x^{-α}; convergence si α<1.'],
    ['Riemann à l’infini','Étudier ∫_1^∞ dx/x^α selon α.','Convergence si α>1.'],
    ['Bertrand intégral','Étudier ∫_2^∞ dx/[x(ln x)^α].','Poser u=ln x ; convergence si α>1.'],
    ['IPP impropre','Calculer ∫_1^∞ ln(x)/x² dx.','Intégrer par parties ; le bord tend vers 0 et il reste ∫1/x².']
  ];
  if(t.includes('série entière')) return [
    ['Rayon de convergence','Déterminer le rayon de convergence de Σn²x^n, Σn!x^n et Σx^n/n!.','Appliquer d’Alembert à |a_nx^n|. Les rayons sont 1, 0 et +∞.'],
    ['Somme par dérivation','À partir de Σx^n, obtenir Σnx^{n-1}.','Dériver 1/(1-x) sur ]-1,1[, résultat 1/(1-x)^2.'],
    ['Étude des bornes','Étudier l’intervalle de convergence de Σx^n/n.','R=1 ; x=1 diverge, x=-1 converge par alternance.'],
    ['Fonction somme','Montrer que f(x)=Σx^n/n! vérifie f’=f.','Dériver terme à terme dans le rayon infini et reconnaître la même série.']
  ];
  if(m.includes('algèbre') || t.includes('matrice') || t.includes('système') || t.includes('déterminant') || t.includes('diagonal')) return [
    ['Rang avec paramètre','Pour une matrice A(a), déterminer le rang et Ker(A) selon a.','Effectuer Gauss, identifier les pivots et traiter les valeurs de a qui les annulent.'],
    ['Diagonalisation','Étudier la diagonalisabilité d’une matrice triangulaire 3×3.','Lire les valeurs propres, calculer les sous-espaces propres et comparer la somme des dimensions à 3.'],
    ['Projecteur ou symétrie','Étudier un endomorphisme vérifiant p²=p ou s²=Id.','Utiliser le polynôme annulateur, les valeurs propres possibles et la décomposition en noyau/image.'],
    ['Déterminant structuré','Calculer un déterminant par opérations élémentaires.','Créer des zéros par lignes/colonnes puis développer ou triangulariser.']
  ];
  if(m.includes('probabilités') || t.includes('variable') || t.includes('markov') || t.includes('dénombrement') || t.includes('couple')) return [
    ['Loi discrète avec paramètre','Une loi dépend d’un paramètre a. Déterminer a, E(X) et Var(X).','Sommer les probabilités pour trouver a, puis appliquer espérance et Koenig-Huygens.'],
    ['Conditionnement et Bayes','Un test a sensibilité et spécificité données. Calculer P(malade | test positif).','Construire l’arbre, appliquer les probabilités totales puis Bayes.'],
    ['Indépendance d’un couple','À partir d’un tableau conjoint, calculer les marginales et tester l’indépendance.','Comparer chaque probabilité conjointe au produit des marginales.'],
    ['Inégalités probabilistes','Majorer une probabilité d’écart à la moyenne.','Calculer variance puis appliquer Markov ou Tchebychev.']
  ];
  if(t.includes('complexe')) return [
    ['Forme trigonométrique','Écrire 1+i√3 sous forme trigonométrique puis calculer sa puissance 6.','Module 2, argument π/3 ; utiliser la formule de Moivre.'],
    ['Racines de l’unité','Résoudre z^n=1 et représenter les solutions.','Solutions e^{2ikπ/n}, k=0,…,n-1.'],
    ['Équation complexe','Résoudre z²=-4 puis z²=1+i.','Utiliser la forme trigonométrique ou poser z=a+ib.'],
    ['Conjugué et module','Simplifier 1/z lorsque |z|=1.','Utiliser z\u0305z=|z|², donc 1/z=\u0305z si |z|=1.']
  ];
  return [
    ['Limite et équivalents','Calculer une limite avec annulation des termes dominants.','Écrire les développements limités au bon ordre et isoler le premier terme non nul.'],
    ['Étude de fonction','Étudier domaine, variations, convexité et extrema d’une fonction.','Calculer f’, f’’, construire les tableaux de signes et conclure.'],
    ['Existence-unicité','Montrer qu’une équation admet une unique solution sur un intervalle.','Utiliser le TVI pour l’existence et la stricte monotonie pour l’unicité.'],
    ['Exercice de synthèse','Démontrer une inégalité ou résoudre une optimisation liée au chapitre.','Introduire une fonction auxiliaire, utiliser convexité, TAF ou étude de variations.']
  ];
}

const EXAM_EXERCISES = ECS_COURSES.map(course => ({
  level: course.level,
  year: course.year,
  theme: course.theme,
  module: course.module,
  difficulty: course.level <= 12 ? 'progressif' : (course.level <= 24 ? 'intermédiaire' : 'concours'),
  exercises: examTemplates(course).map((e, index) => ({
    id: `exam-${course.level}-${index+1}`,
    title: e[0],
    statement: e[1],
    solution: e[2]
  }))
}));
