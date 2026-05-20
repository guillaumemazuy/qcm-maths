ECS_COURSES.push(
  {
    year:'1A',module:'Analyse',theme:'Fonctions usuelles',level:17,title:'Exponentielle, logarithme, puissances',
    intro:'Les fonctions usuelles sont omniprésentes dans les limites, dérivées, équivalents, probabilités continues et modèles économiques.',
    defs:[
      '<strong>Exponentielle</strong> : fonction dérivable vérifiant exp’=exp et exp(0)=1.',
      '<strong>Logarithme népérien</strong> : réciproque de l’exponentielle sur R_+^*, noté ln.',
      '<strong>Puissance réelle</strong> : pour x>0, x^α=exp(α ln x).'
    ],
    results:[
      'exp(a+b)=exp(a)exp(b), ln(ab)=ln a+ln b.',
      'Croissances comparées : ln x << x^α << e^x lorsque x→+∞, pour α>0.',
      'Dérivées : (e^u)’=u’e^u, (ln u)’=u’/u, (u^α)’=αu’u^{α-1}.',
      'Limites classiques : ln(1+x)~x, e^x-1~x en 0.'
    ],
    demos:[
      '<strong>Dérivée du logarithme.</strong> Comme ln est la réciproque de exp, si y=ln x alors x=e^y. En dérivant implicitement, 1=e^y y’, donc y’=1/e^y=1/x.',
      '<strong>Croissance comparée ln x / x^α.</strong> Poser x=e^t. Alors ln x/x^α=t/e^{αt}, qui tend vers 0 par domination exponentielle.'
    ],
    methods:[
      'Transformer les puissances variables avec exp et ln : x^x=exp(xlnx).',
      'Pour comparer logarithme, puissance et exponentielle, poser x=e^t ou utiliser les croissances comparées.'
    ]
  },
  {
    year:'1A',module:'Analyse',theme:'Dérivation et études de fonctions',level:18,title:'Variations, extrema et convexité',
    intro:'Chapitre central pour les études de fonctions et les inégalités. Il relie signe de la dérivée, variations et géométrie de la courbe.',
    defs:[
      '<strong>Point critique</strong> : point intérieur où f’(a)=0.',
      '<strong>Maximum local</strong> : f(x)≤f(a) au voisinage de a ; minimum local : f(x)≥f(a).',
      '<strong>Convexité</strong> : f est convexe si ses pentes sont croissantes ; si f est C², f’’≥0.'
    ],
    results:[
      'Si f’>0 sur un intervalle, f est strictement croissante.',
      'Si f’ change de signe de + à -, il y a maximum local ; de - à +, minimum local.',
      'Si f est convexe, sa courbe est au-dessus de ses tangentes.',
      'Inégalité de convexité : f(tx+(1-t)y)≤tf(x)+(1-t)f(y).'
    ],
    demos:[
      '<strong>Signe de f’ et variations.</strong> Par le théorème des accroissements finis, f(b)-f(a)=f’(c)(b-a). Si f’≥0 et b>a, alors f(b)≥f(a).',
      '<strong>Tangente sous la courbe.</strong> Pour f convexe dérivable, les pentes des cordes sont croissantes ; en faisant tendre un point vers a, on obtient f(x)≥f(a)+f’(a)(x-a).'
    ],
    methods:[
      'Pour une étude complète : domaine, limites, dérivée, signe, variations, convexité, asymptotes.',
      'Pour une inégalité : poser une fonction auxiliaire et étudier ses variations ou sa convexité.'
    ]
  },
  {
    year:'1A',module:'Analyse',theme:'Intégration sur un segment',level:19,title:'Primitives, intégration par parties, changement de variable',
    intro:'L’intégration sur un segment prépare les intégrales impropres, les densités de probabilité et les calculs d’espérance.',
    defs:[
      '<strong>Primitive</strong> : F est une primitive de f si F’=f.',
      '<strong>Intégrale sur [a,b]</strong> : aire algébrique, calculée par F(b)-F(a) si F est une primitive.',
      '<strong>Fonction continue par morceaux</strong> : fonction intégrable avec un nombre fini de discontinuités simples.'
    ],
    results:[
      'Linéarité : ∫(af+bg)=a∫f+b∫g.',
      'Positivité : si f≥0 sur [a,b], alors ∫_a^b f≥0.',
      'IPP : ∫u’v = [uv]-∫uv’.',
      'Changement de variable : ∫ f(φ(t))φ’(t)dt = ∫ f(u)du.'
    ],
    demos:[
      '<strong>IPP.</strong> Partir de (uv)’=u’v+uv’. En intégrant entre a et b, on isole ∫u’v.',
      '<strong>Positivité.</strong> L’intégrale d’une fonction positive est limite de sommes de Riemann positives.'
    ],
    methods:[
      'Produit avec polynôme × exponentielle/trigonométrique : penser IPP.',
      'Présence de u’/u ou φ’f(φ) : penser changement de variable.'
    ]
  },
  {
    year:'1A',module:'Algèbre linéaire',theme:'Déterminants',level:20,title:'Déterminants et critères d’inversibilité',
    intro:'Le déterminant donne un critère rapide d’inversibilité et intervient dans la réduction, les systèmes et les changements de base.',
    defs:[
      '<strong>Déterminant</strong> : forme multilinéaire alternée des colonnes, normalisée par det(I)=1.',
      '<strong>Matrice singulière</strong> : matrice carrée non inversible, donc de déterminant nul.',
      '<strong>Cofacteur</strong> : terme signé utilisé dans le développement selon une ligne ou colonne.'
    ],
    results:[
      'A est inversible si et seulement si det(A)≠0.',
      'det(AB)=det(A)det(B).',
      'det(A^T)=det(A).',
      'Pour une matrice triangulaire, det(A)=produit des termes diagonaux.'
    ],
    demos:[
      '<strong>Triangulaire.</strong> Dans le développement du déterminant, tous les produits contenant un terme sous la diagonale nul disparaissent ; il reste le produit diagonal.',
      '<strong>Inversibilité.</strong> Si A est inversible, det(A)det(A^{-1})=det(I)=1. Donc det(A)≠0. Réciproquement, det(A)≠0 implique rang maximal.'
    ],
    methods:[
      'Créer des zéros avec des opérations élémentaires sur les lignes avant de développer.',
      'Pour une matrice triangulaire ou diagonale : lire directement le produit diagonal.'
    ]
  },
  {
    year:'1A',module:'Probabilités',theme:'Variables aléatoires finies',level:21,title:'Espérance, variance, loi de Bernoulli et binomiale',
    intro:'Les variables aléatoires finies introduisent les calculs d’espérance et de variance, nécessaires pour toute la suite du programme.',
    defs:[
      '<strong>Variable aléatoire finie</strong> : application de l’univers vers un ensemble fini de valeurs réelles.',
      '<strong>Espérance</strong> : moyenne pondérée E(X)=ΣxP(X=x).',
      '<strong>Variance</strong> : Var(X)=E((X-E(X))²).'
    ],
    results:[
      'Linéarité : E(aX+bY)=aE(X)+bE(Y), sans hypothèse d’indépendance.',
      'Formule de Koenig-Huygens : Var(X)=E(X²)-E(X)².',
      'Bernoulli(p) : E=p, Var=p(1-p).',
      'Binomiale B(n,p) : E=np, Var=np(1-p).'
    ],
    demos:[
      '<strong>Koenig-Huygens.</strong> Développer E((X-E(X))²)=E(X²-2XE(X)+E(X)²)=E(X²)-E(X)².',
      '<strong>Binomiale.</strong> Écrire X comme somme de n variables de Bernoulli indépendantes et utiliser linéarité de l’espérance et additivité des variances indépendantes.'
    ],
    methods:[
      'Pour calculer une espérance : préférer la linéarité si X est une somme d’indicatrices.',
      'Pour reconnaître une binomiale : nombre fixé d’essais indépendants, deux issues, probabilité de succès constante.'
    ]
  },
  {
    year:'2A',module:'Analyse',theme:'Séries entières',level:22,title:'Rayon de convergence et somme',
    intro:'Les séries entières généralisent les polynômes et permettent de manipuler fonctions usuelles, dérivation et intégration terme à terme.',
    defs:[
      '<strong>Série entière</strong> : série de la forme Σa_n x^n.',
      '<strong>Rayon de convergence</strong> : nombre R tel que la série converge pour |x|<R et diverge pour |x|>R.',
      '<strong>Intervalle de convergence</strong> : intervalle réel incluant éventuellement les bornes ±R après étude séparée.'
    ],
    results:[
      'Le rayon se calcule souvent par d’Alembert : limite de |a_{n+1}/a_n|.',
      'À l’intérieur du rayon, on peut dériver et intégrer terme à terme.',
      'Σx^n=1/(1-x) pour |x|<1.',
      'Σx^n/n! = e^x pour tout x.'
    ],
    demos:[
      '<strong>Dérivation terme à terme.</strong> Sur tout segment inclus dans ]-R,R[, la convergence est suffisamment uniforme pour dériver la somme terme à terme.',
      '<strong>Rayon par d’Alembert.</strong> Appliquer le critère à |a_nx^n| : le facteur |x| apparaît dans le quotient.'
    ],
    methods:[
      'Toujours étudier les bornes séparément : le rayon ne décide pas de x=±R.',
      'Pour sommer : ramener à une série géométrique puis dériver/intégrer si nécessaire.'
    ]
  },
  {
    year:'2A',module:'Algèbre linéaire',theme:'Espaces euclidiens',level:23,title:'Produit scalaire, orthogonalité, projections',
    intro:'Les espaces euclidiens ajoutent la géométrie à l’algèbre linéaire : normes, angles, orthogonalité et projections.',
    defs:[
      '<strong>Produit scalaire</strong> : forme bilinéaire symétrique définie positive.',
      '<strong>Norme associée</strong> : ||x||=√<x,x>.',
      '<strong>Orthogonal</strong> : x⊥y si <x,y>=0.',
      '<strong>Projection orthogonale</strong> : projection sur un sous-espace selon son orthogonal.'
    ],
    results:[
      'Inégalité de Cauchy-Schwarz : |<x,y>|≤||x||||y||.',
      'Théorème de Pythagore : si x⊥y, alors ||x+y||²=||x||²+||y||².',
      'Tout sous-espace de dimension finie admet une base orthonormée.',
      'E=F⊕F^⊥ pour un sous-espace F d’un espace euclidien de dimension finie.'
    ],
    demos:[
      '<strong>Cauchy-Schwarz.</strong> Étudier le trinôme ||x+ty||²≥0 pour tout réel t. Son discriminant est négatif ou nul, ce qui donne l’inégalité.',
      '<strong>Pythagore.</strong> Développer ||x+y||²=<x+y,x+y>=||x||²+2<x,y>+||y||².'
    ],
    methods:[
      'Pour projeter sur une droite dirigée par u : proj_F(x)=<x,u>/<u,u> · u.',
      'Pour une base orthonormée : appliquer Gram-Schmidt.'
    ]
  },
  {
    year:'2A',module:'Probabilités',theme:'Convergences et approximations',level:24,title:'Markov, Tchebychev, loi faible des grands nombres',
    intro:'Ces outils permettent de contrôler les fluctuations aléatoires et de justifier les approximations statistiques.',
    defs:[
      '<strong>Convergence en probabilité</strong> : X_n→X si P(|X_n-X|>ε)→0 pour tout ε>0.',
      '<strong>Moyenne empirique</strong> : moyenne de variables aléatoires indépendantes de même loi.',
      '<strong>Estimateur</strong> : variable aléatoire servant à approcher un paramètre inconnu.'
    ],
    results:[
      'Markov : si X≥0, P(X≥a)≤E(X)/a.',
      'Tchebychev : P(|X-E(X)|≥a)≤Var(X)/a².',
      'Loi faible des grands nombres : la moyenne empirique converge en probabilité vers l’espérance si la variance est finie.'
    ],
    demos:[
      '<strong>Markov.</strong> Comme X≥a·1_{X≥a}, en prenant l’espérance : E(X)≥aP(X≥a).',
      '<strong>Tchebychev.</strong> Appliquer Markov à la variable positive (X-E(X))² avec le seuil a².'
    ],
    methods:[
      'Pour majorer une probabilité d’écart à la moyenne : penser Tchebychev.',
      'Pour une moyenne de n variables iid : calculer espérance et variance, puis appliquer Tchebychev.'
    ]
  }
);
