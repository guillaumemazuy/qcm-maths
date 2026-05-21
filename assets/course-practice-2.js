Object.assign(COURSE_PRACTICE, {
  1: {
    examples: [
      {title:'Contraposée', statement:'Montrer par contraposée : si n² est pair, alors n est pair.', correction:'La contraposée est : si n est impair, alors n² est impair. Écrivons n=2k+1. Alors n²=4k²+4k+1=2(2k²+2k)+1, donc n² est impair. La contraposée étant vraie, l’implication initiale est vraie.'},
      {title:'Récurrence simple', statement:'Montrer que 1+2+...+n=n(n+1)/2.', correction:'Initialisation : pour n=1, 1=1×2/2. Hérédité : si la formule est vraie au rang n, alors 1+...+n+(n+1)=n(n+1)/2+n+1=(n+1)(n+2)/2. Donc la propriété est vraie pour tout n≥1.'}
    ],
    exercises: ['Prouver par récurrence que 2^n≥n+1 pour n≥0.', 'Montrer l’égalité de deux ensembles par double inclusion.', 'Déterminer si une application donnée est injective, surjective ou bijective.']
  },
  2: {
    examples: [
      {title:'Théorème du reste', statement:'Trouver le reste de la division de P(X)=X³-2X+1 par X-1.', correction:'Le reste vaut P(1). On calcule P(1)=1-2+1=0. Le reste est donc nul et X-1 divise P.'},
      {title:'Racine multiple', statement:'Montrer que 1 est racine double de P(X)=X³-3X+2.', correction:'P(1)=1-3+2=0 et P’(X)=3X²-3, donc P’(1)=0. Comme P n’est pas nul et que P’’(1)=6≠0, 1 est racine exactement double.'}
    ],
    exercises: ['Factoriser X³-1 sur R.', 'Montrer qu’un polynôme de degré 3 ayant 4 racines est nul.', 'Trouver les racines de X²-5X+6.']
  },
  3: {
    examples: [
      {title:'Suite monotone', statement:'Montrer que u_n=1-1/n converge.', correction:'Pour n≥1, u_n tend vers 1 car 1/n tend vers 0. De plus la suite est croissante puisque 1/n décroît. Elle est majorée par 1. Elle converge donc vers 1.'},
      {title:'Deux sous-suites', statement:'Étudier u_n=(-1)^n+1/n.', correction:'La sous-suite paire u_{2n}=1+1/(2n) tend vers 1, tandis que la sous-suite impaire u_{2n+1}=-1+1/(2n+1) tend vers -1. Les limites étant différentes, u_n diverge.'}
    ],
    exercises: ['Calculer la limite de n/(n+1).', 'Étudier la convergence de (1+1/n)^n.', 'Montrer qu’une suite croissante majorée converge.']
  },
  4: {
    examples: [
      {title:'Application du TAF', statement:'Montrer que |sin b - sin a|≤|b-a|.', correction:'Par le théorème des accroissements finis, il existe c entre a et b tel que sin b - sin a = cos(c)(b-a). Comme |cos(c)|≤1, on obtient |sin b-sin a|≤|b-a|.'},
      {title:'Extremum local', statement:'Étudier f(x)=x³-3x en x=1.', correction:'f’(x)=3x²-3=3(x-1)(x+1). La dérivée passe de négative à positive en x=1. La fonction admet donc un minimum local en x=1.'}
    ],
    exercises: ['Étudier les variations de x²-4x+1.', 'Montrer que e^x est strictement croissante.', 'Utiliser Rolle sur une fonction vérifiant f(a)=f(b).']
  },
  5: {
    examples: [
      {title:'DL avec annulation', statement:'Calculer lim (sin x-x)/x³ en 0.', correction:'Le DL donne sin x=x-x³/6+o(x³). Donc sin x-x=-x³/6+o(x³), et la limite vaut -1/6.'},
      {title:'DL logarithmique', statement:'Calculer lim (ln(1+x)-x)/x² en 0.', correction:'ln(1+x)=x-x²/2+o(x²). Donc ln(1+x)-x=-x²/2+o(x²), et la limite vaut -1/2.'}
    ],
    exercises: ['Calculer lim (e^x-1-x)/x².', 'Trouver un équivalent de tan x-x en 0.', 'Développer cos x à l’ordre 4.']
  },
  6: {
    examples: [
      {title:'Famille libre', statement:'Montrer que (1,0) et (0,1) sont libres dans R².', correction:'Si a(1,0)+b(0,1)=(0,0), alors (a,b)=(0,0). Donc a=0 et b=0. La famille est libre.'},
      {title:'Base par cardinal', statement:'Dans R², montrer que deux vecteurs non colinéaires forment une base.', correction:'Deux vecteurs non colinéaires sont libres. Dans un espace de dimension 2, toute famille libre de deux vecteurs est une base.'}
    ],
    exercises: ['Tester la liberté de (1,1),(1,-1).', 'Montrer qu’une famille contenant 0 est liée.', 'Déterminer si trois vecteurs de R² peuvent être libres.']
  },
  7: {
    examples: [
      {title:'Déterminant 2×2', statement:'Dire si A=[[1,2],[3,4]] est inversible.', correction:'det(A)=1×4-2×3=4-6=-2≠0. La matrice est inversible.'},
      {title:'Rang', statement:'Trouver le rang de [[1,2],[2,4]].', correction:'La deuxième ligne est deux fois la première. Il n’y a qu’une ligne indépendante. Le rang vaut 1.'}
    ],
    exercises: ['Inverser une matrice 2×2 de déterminant non nul.', 'Calculer le rang d’une matrice triangulaire.', 'Résoudre un système 2×2 par Gauss.']
  },
  8: {
    examples: [
      {title:'Combinaison', statement:'Combien de mains de 5 cartes dans un jeu de 32 cartes ?', correction:'L’ordre ne compte pas. Il faut choisir 5 cartes parmi 32, donc C(32,5).'},
      {title:'Binôme', statement:'Coefficient de x² dans (1+x)^5.', correction:'Par le binôme de Newton, le coefficient vaut C(5,2)=10.'}
    ],
    exercises: ['Calculer le nombre de permutations de 6 objets.', 'Calculer C(7,3).', 'Trouver la somme des coefficients de (1+x)^n.']
  },
  9: {
    examples: [
      {title:'Probabilités totales', statement:'Si A et B forment une partition, exprimer P(C).', correction:'Par la formule des probabilités totales, P(C)=P(A)P(C|A)+P(B)P(C|B).'},
      {title:'Bayes', statement:'Exprimer P(A|B) en fonction de P(B|A).', correction:'Si P(B)>0, P(A|B)=P(A∩B)/P(B)=P(B|A)P(A)/P(B).'}
    ],
    exercises: ['Distinguer indépendance et incompatibilité.', 'Construire un arbre pondéré.', 'Appliquer Bayes à un test médical simple.']
  },
  10: {
    examples: [
      {title:'Riemann', statement:'Nature de Σ1/n².', correction:'C’est une série de Riemann de paramètre α=2>1. Elle converge.'},
      {title:'Critère grossier', statement:'Nature de Σ n/(n+1).', correction:'Le terme général tend vers 1, pas vers 0. La série diverge par critère grossier.'}
    ],
    exercises: ['Étudier Σ1/√n.', 'Étudier Σ(-1)^n/n.', 'Étudier Σsin(1/n).']
  },
  11: {
    examples: [
      {title:'Riemann à l’infini', statement:'Nature de ∫_1^∞ 1/x² dx.', correction:'Une primitive est -1/x. La limite en +∞ est 0, donc l’intégrale vaut 1 et converge.'},
      {title:'Bertrand', statement:'Nature de ∫_2^∞ dx/[x(ln x)²].', correction:'Avec u=ln x, du=dx/x. On obtient ∫du/u², qui converge à l’infini.'}
    ],
    exercises: ['Étudier ∫_1^∞ dx/x.', 'Étudier ∫_0^1 dx/√x.', 'Étudier ∫_2^∞ dx/[x ln x].']
  },
  12: {
    examples: [
      {title:'Théorème du rang', statement:'dim E=6 et rg(f)=4. Trouver dim Ker(f).', correction:'dim E=dim Ker(f)+rg(f), donc dim Ker(f)=6-4=2.'},
      {title:'Projecteur', statement:'Si p²=p, montrer que Im(p) et Ker(p) sont en somme directe.', correction:'Si y appartient aux deux, y=p(x) et p(y)=0. Mais p(y)=p²(x)=p(x)=y. Donc y=0.'}
    ],
    exercises: ['Calculer noyau et image d’une application donnée.', 'Montrer qu’une application est injective via son noyau.', 'Étudier une symétrie s²=Id.']
  },
  13: {
    examples: [
      {title:'Valeurs propres', statement:'Si A²=I, valeurs propres possibles ?', correction:'Si Av=λv, alors A²v=λ²v=v, donc λ²=1. Les valeurs propres possibles sont -1 et 1.'},
      {title:'Trace et déterminant', statement:'Valeurs propres 1,2,5 : trace et déterminant ?', correction:'La trace vaut la somme 1+2+5=8. Le déterminant vaut le produit 1×2×5=10.'}
    ],
    exercises: ['Diagonaliser une matrice diagonale.', 'Trouver les valeurs propres d’une matrice triangulaire.', 'Tester la diagonalisabilité avec les dimensions des sous-espaces propres.']
  },
  14: {
    examples: [
      {title:'Binomiale', statement:'X~B(n,p). Donner E(X) et Var(X).', correction:'X est somme de n Bernoulli indépendantes de paramètre p. Donc E(X)=np et Var(X)=np(1-p).'},
      {title:'Poisson', statement:'X~P(λ). Donner E(X) et Var(X).', correction:'Pour une loi de Poisson de paramètre λ, E(X)=λ et Var(X)=λ.'}
    ],
    exercises: ['Calculer E(aX+b).', 'Utiliser Koenig-Huygens.', 'Reconnaître une loi binomiale.']
  },
  15: {
    examples: [
      {title:'Densité exponentielle', statement:'Vérifier que λe^{-λx} sur R+ est une densité.', correction:'La fonction est positive et ∫_0^∞ λe^{-λx}dx=[-e^{-λx}]_0^∞=1.'},
      {title:'Uniforme', statement:'Espérance d’une uniforme sur [a,b].', correction:'La densité vaut 1/(b-a). E(X)=∫_a^b x/(b-a)dx=(a+b)/2.'}
    ],
    exercises: ['Calculer P(X>t) pour une exponentielle.', 'Trouver la fonction de répartition d’une uniforme.', 'Vérifier qu’une fonction donnée est une densité.']
  },
  16: {
    examples: [
      {title:'Gradient', statement:'Point critique de f(x,y)=x²+y²-2x.', correction:'∂f/∂x=2x-2 et ∂f/∂y=2y. Le point critique est (1,0). La Hessienne vaut 2I, donc minimum.'},
      {title:'Point selle', statement:'Classifier f(x,y)=xy en (0,0).', correction:'Le gradient est nul en (0,0). La Hessienne [[0,1],[1,0]] a déterminant -1<0, donc point selle.'}
    ],
    exercises: ['Calculer un gradient.', 'Résoudre un système de points critiques.', 'Classifier avec la Hessienne en dimension 2.']
  },
  17: {
    examples: [
      {title:'Puissance variable', statement:'Limite de x^x en 0+.', correction:'x^x=exp(x ln x). Or x ln x→0 quand x→0+. La limite vaut exp(0)=1.'},
      {title:'Croissance comparée', statement:'Limite de ln x / √x en +∞.', correction:'Le logarithme est négligeable devant toute puissance positive. Donc ln x/√x→0.'}
    ],
    exercises: ['Calculer lim x/e^x.', 'Étudier ln(n)/n.', 'Dériver x↦ln(1+x²).']
  },
  18: {
    examples: [
      {title:'Variation', statement:'Étudier f(x)=x³-3x.', correction:'f’(x)=3(x-1)(x+1). La fonction croît sur ]-∞,-1], décroît sur [-1,1], puis croît sur [1,+∞[.'},
      {title:'Convexité', statement:'Étudier la convexité de x↦x².', correction:'f’’(x)=2>0, donc f est strictement convexe sur R.'}
    ],
    exercises: ['Étudier les extrema de x²-4x.', 'Montrer une inégalité par étude de fonction.', 'Identifier les points critiques d’un polynôme.']
  },
  19: {
    examples: [
      {title:'IPP', statement:'Calculer ∫_0^1 x e^x dx.', correction:'IPP avec u=x, v’=e^x. On obtient [xe^x]_0^1-∫_0^1 e^x dx=e-(e-1)=1.'},
      {title:'Changement de variable', statement:'Calculer ∫_0^1 2x e^{x²} dx.', correction:'Poser u=x², du=2x dx. Les bornes restent 0 et 1. L’intégrale vaut ∫_0^1 e^u du=e-1.'}
    ],
    exercises: ['Calculer ∫ x cos x dx.', 'Calculer ∫ 1/(1+x) dx.', 'Utiliser un changement de variable simple.']
  },
  20: {
    examples: [
      {title:'Triangulaire', statement:'Déterminant d’une matrice triangulaire de diagonale 2,3,4.', correction:'Le déterminant est le produit diagonal : 2×3×4=24.'},
      {title:'Produit', statement:'Si det(A)=2 et det(B)=5, que vaut det(AB) ?', correction:'det(AB)=det(A)det(B)=10.'}
    ],
    exercises: ['Calculer det(λA) pour A de taille n.', 'Déterminer si une matrice est inversible via le déterminant.', 'Utiliser des opérations sur lignes pour simplifier un déterminant.']
  },
  21: {
    examples: [
      {title:'Bernoulli', statement:'Variance d’une Bernoulli(p).', correction:'E(X)=p et E(X²)=p car X²=X. Donc Var(X)=p-p²=p(1-p).'},
      {title:'Linéarité', statement:'Si X compte le nombre de succès, pourquoi E(X)=np ?', correction:'Écrire X comme somme de n indicatrices de succès. Chaque indicatrice a espérance p. Par linéarité, E(X)=np.'}
    ],
    exercises: ['Calculer une variance par Koenig-Huygens.', 'Reconnaître une somme d’indicatrices.', 'Calculer l’espérance d’un gain fini.']
  },
  22: {
    examples: [
      {title:'Rayon 1', statement:'Rayon de Σn²x^n.', correction:'Le facteur polynomial ne change pas le rayon par rapport à Σx^n. Le rayon est 1.'},
      {title:'Rayon infini', statement:'Rayon de Σx^n/n!.', correction:'Par d’Alembert, le quotient vaut |x|/(n+1), qui tend vers 0 pour tout x. Rayon infini.'}
    ],
    exercises: ['Étudier les bornes d’un intervalle de convergence.', 'Sommer Σx^n.', 'Dériver une série entière dans son rayon.']
  },
  23: {
    examples: [
      {title:'Cauchy-Schwarz', statement:'Utiliser Cauchy-Schwarz pour majorer |<x,y>|.', correction:'L’inégalité donne directement |<x,y>|≤||x||||y||. L’égalité a lieu lorsque x et y sont liés.'},
      {title:'Projection sur une droite', statement:'Projeter x sur la droite dirigée par u.', correction:'La projection est proj(x)=<x,u>/<u,u> · u, si u≠0.'}
    ],
    exercises: ['Orthogonaliser deux vecteurs.', 'Calculer une projection.', 'Vérifier qu’une famille est orthonormée.']
  },
  24: {
    examples: [
      {title:'Markov', statement:'Si X≥0, montrer P(X≥a)≤E(X)/a.', correction:'Comme X≥a·1_{X≥a}, on prend l’espérance : E(X)≥aP(X≥a).'},
      {title:'Tchebychev', statement:'Déduire Tchebychev de Markov.', correction:'Appliquer Markov à la variable positive (X-E(X))² avec le seuil a².'}
    ],
    exercises: ['Majorer une probabilité d’écart à la moyenne.', 'Appliquer la loi faible des grands nombres.', 'Calculer la variance d’une moyenne empirique.']
  }
});
