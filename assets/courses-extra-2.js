ECS_COURSES.push(
  {
    year:'1A',module:'Analyse',theme:'Limites et équivalents',level:25,title:'Limites, équivalents et croissances comparées',
    intro:'Chapitre indispensable pour toutes les études de fonctions, les suites et les séries. L’objectif est de reconnaître rapidement le terme dominant.',
    defs:[
      '<strong>Limite finie</strong> : f(x) tend vers l lorsque x tend vers a si f(x) devient arbitrairement proche de l près de a.',
      '<strong>Équivalent</strong> : f~g en a si f/g tend vers 1.',
      '<strong>Négligeabilité</strong> : f=o(g) si f/g tend vers 0.',
      '<strong>Domination</strong> : f=O(g) si f/g est bornée au voisinage considéré.'
    ],
    results:[
      'En 0 : sin x~x, tan x~x, e^x-1~x, ln(1+x)~x, 1-cos x~x²/2.',
      'À l’infini : ln x=o(x^α) pour α>0, et x^α=o(e^x).',
      'Si f~g et g ne s’annule pas près du point, alors f et g ont le même signe à partir d’un certain rang/voisinage.',
      'Les équivalents se multiplient et se divisent, mais ne s’additionnent pas sans précaution.'
    ],
    demos:[
      '<strong>sin x~x.</strong> Géométriquement sur le cercle trigonométrique, pour x>0 petit : sin x≤x≤tan x. En divisant par sin x puis en utilisant cos x→1, on obtient sin x/x→1.',
      '<strong>ln x=o(x^α).</strong> Poser x=e^t. Alors ln x/x^α=t/e^{αt}, qui tend vers 0 par domination exponentielle.'
    ],
    methods:[
      'Face à une limite : identifier le terme dominant avant de calculer.',
      'Si une différence annule les termes principaux, utiliser un développement limité plutôt qu’un équivalent brut.',
      'Pour racines : rationaliser ou utiliser (1+u)^α=1+αu+o(u).'
    ]
  },
  {
    year:'1A',module:'Analyse',theme:'Continuité',level:26,title:'Continuité, TVI et prolongement',
    intro:'La continuité permet de garantir l’existence de solutions et de prolonger proprement des fonctions définies par morceaux.',
    defs:[
      '<strong>Continuité en a</strong> : f(x)→f(a) quand x→a.',
      '<strong>Prolongement par continuité</strong> : définition de f(a) par la limite lorsque la fonction n’était pas définie en a.',
      '<strong>Fonction continue sur un intervalle</strong> : continue en tout point de cet intervalle.'
    ],
    results:[
      'Somme, produit, quotient à dénominateur non nul et composée de fonctions continues sont continus.',
      'Théorème des valeurs intermédiaires : si f est continue sur [a,b], elle prend toute valeur entre f(a) et f(b).',
      'Une fonction continue sur un segment est bornée et atteint ses bornes.',
      'Si f est continue strictement monotone sur un intervalle, elle réalise une bijection sur son image et sa réciproque est continue.'
    ],
    demos:[
      '<strong>TVI, idée.</strong> L’image d’un intervalle par une fonction continue est un intervalle. Donc toutes les valeurs intermédiaires entre f(a) et f(b) sont atteintes.',
      '<strong>Bornes atteintes.</strong> Sur un segment, la compacité empêche une fonction continue de s’échapper sans atteindre ses valeurs extrêmes.'
    ],
    methods:[
      'Pour prouver une existence de solution f(x)=0 : chercher deux valeurs de signes opposés et appliquer le TVI.',
      'Pour un prolongement : calculer la limite au point problématique, puis définir la valeur par cette limite.'
    ]
  },
  {
    year:'1A',module:'Analyse',theme:'Fonctions convexes',level:27,title:'Convexité, tangentes et inégalités',
    intro:'La convexité est un outil puissant pour démontrer des inégalités et comprendre la forme globale d’une fonction.',
    defs:[
      '<strong>Convexité</strong> : f(tx+(1-t)y)≤tf(x)+(1-t)f(y) pour t∈[0,1].',
      '<strong>Concavité</strong> : opposée de la convexité ; f est concave si -f est convexe.',
      '<strong>Point d’inflexion</strong> : point où la convexité change de sens.'
    ],
    results:[
      'Si f est deux fois dérivable, f convexe équivaut à f’’≥0 sur l’intervalle.',
      'Une fonction convexe dérivable est au-dessus de ses tangentes.',
      'Inégalité de Jensen pour une fonction convexe.',
      'ln est concave sur R_+^*, exp est convexe sur R.'
    ],
    demos:[
      '<strong>Tangente sous la courbe.</strong> Pour f convexe dérivable, les pentes des cordes sont croissantes. En faisant tendre une extrémité vers a, on obtient f(x)≥f(a)+f’(a)(x-a).',
      '<strong>Critère f’’≥0.</strong> Si f’’≥0, alors f’ est croissante, donc les pentes augmentent, ce qui caractérise la convexité.'
    ],
    methods:[
      'Pour prouver e^x≥1+x : utiliser la convexité de exp et la tangente en 0.',
      'Pour prouver ln x≤x-1 : utiliser la concavité de ln ou étudier x-1-ln x.'
    ]
  },
  {
    year:'1A',module:'Analyse',theme:'Sommes et produits',level:28,title:'Sommes classiques, télescopage, produits',
    intro:'Les sommes interviennent partout : suites, probabilités, algèbre et analyse asymptotique.',
    defs:[
      '<strong>Somme télescopique</strong> : somme où les termes s’annulent en chaîne.',
      '<strong>Somme géométrique</strong> : somme de termes q^k.',
      '<strong>Produit</strong> : notation Π utilisée pour factorisations et probabilités indépendantes.'
    ],
    results:[
      'Σ_{k=0}^n q^k=(1-q^{n+1})/(1-q) si q≠1.',
      'Σ_{k=1}^n k=n(n+1)/2.',
      'Σ_{k=1}^n k²=n(n+1)(2n+1)/6.',
      'Σ_{k=1}^n 1/[k(k+1)]=1-1/(n+1).'
    ],
    demos:[
      '<strong>Somme géométrique.</strong> Multiplier S=1+q+...+q^n par 1-q : les termes intermédiaires s’annulent et (1-q)S=1-q^{n+1}.',
      '<strong>Télescopage.</strong> 1/[k(k+1)]=1/k-1/(k+1). La somme se réduit au premier moins le dernier terme.'
    ],
    methods:[
      'Chercher une écriture u_k=v_k-v_{k+1} pour télescoper.',
      'Pour des sommes polynomiales, connaître les formules jusqu’au degré 2 et savoir estimer l’ordre dominant.'
    ]
  },
  {
    year:'1A',module:'Algèbre',theme:'Complexes',level:29,title:'Nombres complexes, module, argument, racines',
    intro:'Les complexes servent en algèbre, trigonométrie, équations polynomiales et diagonalisation.',
    defs:[
      '<strong>Forme algébrique</strong> : z=a+ib avec a,b réels.',
      '<strong>Module</strong> : |z|=√(a²+b²).',
      '<strong>Argument</strong> : angle θ tel que z=|z|e^{iθ} si z≠0.',
      '<strong>Conjugué</strong> : si z=a+ib, alors \u0305z=a-ib.'
    ],
    results:[
      'z\u0305z=|z|².',
      'e^{iθ}=cosθ+i sinθ.',
      '(re^{iθ})^n=r^n e^{inθ}.',
      'Les racines n-ièmes de l’unité sont e^{2ikπ/n}, k=0,...,n-1.'
    ],
    demos:[
      '<strong>Module du produit.</strong> |zw|²=zw\u0305{zw}=z\u0305z·w\u0305w=|z|²|w|², donc |zw|=|z||w|.',
      '<strong>Racines de l’unité.</strong> z^n=1 impose |z|^n=1 donc |z|=1, puis nθ=2kπ.'
    ],
    methods:[
      'Pour résoudre z^n=a : écrire a sous forme trigonométrique.',
      'Pour calculer 1/z : utiliser 1/z=\u0305z/|z|².'
    ]
  },
  {
    year:'1A',module:'Algèbre linéaire',theme:'Systèmes linéaires',level:30,title:'Méthode de Gauss et structure des solutions',
    intro:'La méthode de Gauss est l’outil de base pour résoudre les systèmes, calculer les rangs et inverser les matrices.',
    defs:[
      '<strong>Système compatible</strong> : système admettant au moins une solution.',
      '<strong>Système homogène</strong> : système AX=0.',
      '<strong>Pivot</strong> : coefficient non nul utilisé pour éliminer les inconnues suivantes.'
    ],
    results:[
      'Un système AX=B est compatible si et seulement si rg(A)=rg(A|B).',
      'Un système carré AX=B a une solution unique si A est inversible.',
      'Les solutions de AX=B sont une solution particulière plus les solutions de AX=0.',
      'La dimension de l’espace des solutions de AX=0 vaut n-rg(A).'
    ],
    demos:[
      '<strong>Structure affine.</strong> Si X0 est une solution de AX=B, alors A(X-X0)=0. Donc toute solution s’écrit X0+H avec H∈Ker(A).',
      '<strong>Dimension du noyau.</strong> C’est le théorème du rang appliqué à l’application linéaire associée à A.'
    ],
    methods:[
      'Appliquer Gauss en gardant les opérations sur les lignes propres.',
      'Identifier les variables pivots et les variables libres.'
    ]
  },
  {
    year:'2A',module:'Analyse',theme:'Séries de fonctions',level:31,title:'Convergence simple, uniforme, normale',
    intro:'Les séries de fonctions permettent de manipuler des sommes dépendant d’une variable. La convergence uniforme justifie les passages à la limite.',
    defs:[
      '<strong>Convergence simple</strong> : pour chaque x fixé, f_n(x) converge.',
      '<strong>Convergence uniforme</strong> : sup_x |f_n(x)-f(x)| tend vers 0.',
      '<strong>Convergence normale</strong> d’une série : Σ sup_x |u_n(x)| converge.'
    ],
    results:[
      'La convergence uniforme préserve la continuité.',
      'La convergence normale implique la convergence uniforme et absolue.',
      'On peut intégrer terme à terme sous convergence uniforme sur un segment.',
      'La dérivation terme à terme demande des hypothèses plus fortes sur les dérivées.'
    ],
    demos:[
      '<strong>Continuité de la limite uniforme.</strong> Écrire |f(x)-f(a)|≤|f-f_n|(x)+|f_n(x)-f_n(a)|+|f_n(a)-f(a)| et choisir n puis x.',
      '<strong>Normale ⇒ uniforme.</strong> Le critère de Weierstrass majore la queue de série par une queue numérique convergente.'
    ],
    methods:[
      'Chercher un majorant indépendant de x pour utiliser Weierstrass.',
      'Pour montrer que la convergence n’est pas uniforme : regarder le sup ou choisir une suite x_n dépendant de n.'
    ]
  },
  {
    year:'2A',module:'Analyse',theme:'Optimisation à plusieurs variables',level:32,title:'Extrema libres et sous contrainte',
    intro:'L’optimisation multivariée intervient dans les modèles économiques et les sujets de concours avec contraintes.',
    defs:[
      '<strong>Gradient</strong> : vecteur des dérivées partielles premières.',
      '<strong>Hessienne</strong> : matrice des dérivées secondes.',
      '<strong>Contrainte</strong> : condition du type g(x,y)=0 imposée aux variables.'
    ],
    results:[
      'À un extremum intérieur libre, le gradient est nul.',
      'En dimension 2, Hessienne définie positive : minimum local ; définie négative : maximum local ; déterminant négatif : selle.',
      'Sous contrainte régulière g=0, on cherche souvent ∇f=λ∇g.',
      'Une fonction concave sur un convexe a tout maximum local global.'
    ],
    demos:[
      '<strong>Condition du gradient nul.</strong> Restreindre f aux droites passant par le point : chaque fonction d’une variable a un extremum, donc chaque dérivée directionnelle est nulle.',
      '<strong>Lagrange.</strong> À l’optimum sous contrainte, le gradient de f est orthogonal à la tangente de la contrainte, donc parallèle au gradient de g.'
    ],
    methods:[
      'Extremum libre : résoudre ∇f=0 puis classifier avec la Hessienne.',
      'Sous contrainte : écrire le système de Lagrange et vérifier les points obtenus.'
    ]
  },
  {
    year:'2A',module:'Algèbre linéaire',theme:'Diagonalisation avancée',level:33,title:'Polynômes annulateurs et diagonalisation',
    intro:'Les polynômes annulateurs donnent des critères rapides pour comprendre les valeurs propres et la diagonalisabilité.',
    defs:[
      '<strong>Polynôme annulateur</strong> : P tel que P(A)=0.',
      '<strong>Polynôme scindé à racines simples</strong> : produit de facteurs linéaires distincts.',
      '<strong>Sous-espace stable</strong> : F tel que A(F)⊂F.'
    ],
    results:[
      'Toute valeur propre de A est racine de tout polynôme annulateur de A.',
      'Si A admet un polynôme annulateur scindé à racines simples, alors A est diagonalisable.',
      'Si A²=A, alors A est diagonalisable et ses valeurs propres sont 0 ou 1.',
      'Si A²=I, alors A est diagonalisable et ses valeurs propres sont -1 ou 1.'
    ],
    demos:[
      '<strong>Valeur propre et annulateur.</strong> Si Av=λv, alors P(A)v=P(λ)v. Si P(A)=0, alors P(λ)v=0, donc P(λ)=0.',
      '<strong>Projecteur.</strong> P(X)=X(X-1) annule A si A²=A. Ses racines sont simples, donc A est diagonalisable.'
    ],
    methods:[
      'Avant de calculer tout le polynôme caractéristique, chercher une relation simple : A²=A, A²=I, A^p=0.',
      'Utiliser les polynômes annulateurs pour limiter les valeurs propres possibles.'
    ]
  },
  {
    year:'2A',module:'Probabilités',theme:'Couples de variables aléatoires',level:34,title:'Lois conjointes, marginales, indépendance',
    intro:'Les couples de variables modélisent deux grandeurs simultanées et permettent de traiter covariance, corrélation et indépendance.',
    defs:[
      '<strong>Loi conjointe</strong> : probabilités P(X=x,Y=y).',
      '<strong>Loi marginale</strong> : loi de X ou de Y obtenue en sommant/intégrant l’autre variable.',
      '<strong>Covariance</strong> : Cov(X,Y)=E(XY)-E(X)E(Y).'
    ],
    results:[
      'X et Y indépendantes si P(X=x,Y=y)=P(X=x)P(Y=y) pour tous x,y.',
      'Indépendance implique covariance nulle, mais la réciproque est fausse en général.',
      'Var(X+Y)=Var(X)+Var(Y)+2Cov(X,Y).',
      'Si X et Y sont indépendantes, E(g(X)h(Y))=E(g(X))E(h(Y)).'
    ],
    demos:[
      '<strong>Variance d’une somme.</strong> Développer E[(X+Y-E(X)-E(Y))²]. Le terme croisé donne 2Cov(X,Y).',
      '<strong>Indépendance ⇒ covariance nulle.</strong> Si X,Y indépendantes, E(XY)=E(X)E(Y), donc Cov(X,Y)=0.'
    ],
    methods:[
      'À partir d’un tableau conjoint : sommer les lignes/colonnes pour les marginales.',
      'Pour tester l’indépendance : comparer chaque case au produit des marginales.'
    ]
  },
  {
    year:'2A',module:'Probabilités',theme:'Chaînes de Markov finies',level:35,title:'Matrices de transition et régimes stationnaires',
    intro:'Les chaînes de Markov décrivent des évolutions aléatoires où le futur dépend seulement de l’état présent.',
    defs:[
      '<strong>Chaîne de Markov</strong> : suite d’états aléatoires avec propriété de mémoire courte.',
      '<strong>Matrice de transition</strong> : matrice P dont le coefficient p_ij est la probabilité de passer de i à j.',
      '<strong>Distribution stationnaire</strong> : vecteur π tel que πP=π.'
    ],
    results:[
      'Les lignes d’une matrice de transition somment à 1.',
      'La loi après n transitions s’obtient par multiplication par P^n.',
      'Une distribution stationnaire est un vecteur propre à gauche associé à la valeur propre 1.',
      'Sous hypothèses d’irréductibilité et d’apériodicité, les lois convergent vers l’unique distribution stationnaire.'
    ],
    demos:[
      '<strong>Stationnarité.</strong> Si la loi initiale est π et πP=π, alors après une transition la loi reste π ; par récurrence, elle reste π à tout rang.',
      '<strong>Somme des lignes.</strong> Depuis un état i, la chaîne doit aller vers l’un des états possibles, donc la somme des probabilités de transition vaut 1.'
    ],
    methods:[
      'Pour trouver π : résoudre πP=π avec la contrainte somme des composantes =1.',
      'Pour n étapes : diagonaliser P si possible, ou exploiter une relation de récurrence.'
    ]
  },
  {
    year:'2A',module:'Analyse',theme:'Équations différentielles',level:36,title:'Équations différentielles linéaires',
    intro:'Les équations différentielles linéaires apparaissent en dynamique, probabilités continues et modèles économiques.',
    defs:[
      '<strong>Équation linéaire du premier ordre</strong> : y’+a(x)y=b(x).',
      '<strong>Équation homogène</strong> : second membre nul.',
      '<strong>Solution particulière</strong> : une solution de l’équation complète.'
    ],
    results:[
      'Les solutions de y’=ay sont y=Ce^{ax}.',
      'Les solutions de y’+a(x)y=0 sont y=C exp(-∫a).',
      'Solution générale = solution homogène + solution particulière.',
      'Pour y’’+ω²y=0, les solutions sont A cos(ωx)+B sin(ωx).'
    ],
    demos:[
      '<strong>Premier ordre homogène.</strong> Si y ne s’annule pas, y’/y=-a(x). En intégrant, ln|y|=-∫a + constante.',
      '<strong>Second ordre harmonique.</strong> L’équation caractéristique r²+ω²=0 donne r=±iω, d’où les solutions réelles cos et sin.'
    ],
    methods:[
      'Pour y’+ay=b : facteur intégrant e^{∫a}.',
      'Pour coefficients constants : résoudre l’équation caractéristique.'
    ]
  }
);
