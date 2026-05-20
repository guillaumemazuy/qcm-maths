const ECS_COURSES = [
  {
    year: '1A',
    module: 'Fondations',
    theme: 'Raisonnement et ensembles',
    level: 1,
    title: 'Logique, ensembles, applications',
    intro: 'Point de départ du cours ECS : savoir rédiger, manipuler les quantificateurs, raisonner par implication, équivalence, contraposition, absurde et récurrence.',
    defs: [
      '<strong>Implication</strong> : P ⇒ Q signifie que dès que P est vraie, Q est vraie. Sa contraposée est non Q ⇒ non P.',
      '<strong>Équivalence</strong> : P ⇔ Q signifie P ⇒ Q et Q ⇒ P. À utiliser seulement si les deux sens sont justifiés.',
      '<strong>Application injective</strong> : f(x)=f(y) ⇒ x=y. <strong>Surjective</strong> : tout élément de l’arrivée possède un antécédent. <strong>Bijective</strong> : injective et surjective.',
      '<strong>Récurrence</strong> : initialisation + hérédité. Elle prouve une propriété pour tout entier à partir d’un rang donné.'
    ],
    results: [
      'Une bijection admet une application réciproque.',
      'Deux ensembles finis équipotents ont même cardinal.',
      'Une inclusion double A⊂B et B⊂A permet de démontrer une égalité d’ensembles.'
    ],
    demos: [
      '<strong>Unicité de la réciproque.</strong> Si g et h sont deux réciproques de f, alors pour tout y de l’ensemble d’arrivée, y=f(x) pour un x. Donc g(y)=g(f(x))=x et h(y)=h(f(x))=x. Ainsi g=h.',
      '<strong>Schéma d’une récurrence.</strong> On prouve P(n0). Puis on suppose P(n) vraie pour un n arbitraire et on démontre P(n+1). La conclusion vient de la chaîne P(n0)⇒P(n0+1)⇒...'
    ],
    methods: [
      'Pour prouver une égalité d’ensembles : partir de x∈A, montrer x∈B, puis faire l’inclusion inverse.',
      'Pour une bijection : choisir selon le contexte entre injection+surjection, construction explicite de la réciproque, ou argument de cardinal fini.'
    ]
  },
  {
    year: '1A',
    module: 'Algèbre',
    theme: 'Calcul algébrique et polynômes',
    level: 2,
    title: 'Sommes, produits, polynômes',
    intro: 'Les polynômes structurent le calcul algébrique, les racines, les factorisations et les développements utilisés en analyse.',
    defs: [
      '<strong>Degré</strong> : plus grand exposant ayant un coefficient non nul.',
      '<strong>Racine</strong> : a est racine de P si P(a)=0.',
      '<strong>Multiplicité</strong> : a est racine de multiplicité m si P(X)=(X-a)^mQ(X) avec Q(a)≠0.'
    ],
    results: [
      'Théorème du reste : le reste de la division de P par X-a vaut P(a).',
      'a est racine de P si et seulement si X-a divise P.',
      'Un polynôme non nul de degré n possède au plus n racines distinctes.',
      'Si a est racine multiple de P, alors P(a)=0 et P’(a)=0.'
    ],
    demos: [
      '<strong>Théorème du reste.</strong> La division euclidienne donne P(X)=(X-a)Q(X)+r. En évaluant en X=a, on obtient P(a)=r.',
      '<strong>Nombre maximal de racines.</strong> Si P a k racines distinctes a1,...,ak, alors (X-a1)...(X-ak) divise P. Donc k≤deg(P), sauf si P est nul.'
    ],
    methods: [
      'Pour factoriser : chercher d’abord les racines évidentes, puis utiliser la division euclidienne.',
      'Pour prouver qu’un polynôme est nul : montrer qu’il a strictement plus de racines que son degré.'
    ]
  },
  {
    year: '1A',
    module: 'Analyse',
    theme: 'Suites numériques',
    level: 3,
    title: 'Suites, limites, monotonie, récurrence',
    intro: 'Les suites sont la première brique de l’analyse : limites, comparaison, encadrement, suites monotones, suites extraites et suites définies par récurrence.',
    defs: [
      '<strong>Convergence</strong> : u_n converge vers l si tout voisinage de l contient tous les termes à partir d’un certain rang.',
      '<strong>Suite extraite</strong> : suite de la forme u_{φ(n)} où φ est strictement croissante de N dans N.',
      '<strong>Équivalent</strong> : u_n ~ v_n si u_n/v_n → 1.'
    ],
    results: [
      'Toute suite convergente est bornée.',
      'Toute suite croissante majorée converge ; toute suite décroissante minorée converge.',
      'Si deux suites extraites ont des limites différentes, la suite initiale diverge.',
      'Théorème des gendarmes : si a_n≤u_n≤b_n et a_n,b_n→l, alors u_n→l.'
    ],
    demos: [
      '<strong>Convergence monotone.</strong> Si (u_n) est croissante et majorée, l’ensemble {u_n} admet une borne supérieure l. Pour ε>0, l-ε n’est pas majorant, donc il existe N tel que u_N>l-ε. Par croissance, pour n≥N, l-ε<u_n≤l.',
      '<strong>Suites extraites.</strong> Si u_n→l, alors pour tout ε>0, à partir d’un rang N, |u_n-l|≤ε. Comme φ(n)→∞, u_{φ(n)} vérifie aussi cette propriété.'
    ],
    methods: [
      'Pour une suite récurrente u_{n+1}=f(u_n) : chercher les points fixes, étudier l’intervalle stable, puis monotonie ou contraction.',
      'Pour une forme indéterminée : diviser par le terme dominant ou utiliser un équivalent.'
    ]
  },
  {
    year: '1A',
    module: 'Analyse',
    theme: 'Fonctions réelles',
    level: 4,
    title: 'Limites, continuité, dérivabilité',
    intro: 'Ce bloc pose les outils de base pour étudier une fonction : domaine, limites, continuité, dérivabilité, variations et convexité.',
    defs: [
      '<strong>Continuité en a</strong> : f(x)→f(a) lorsque x→a.',
      '<strong>Dérivabilité en a</strong> : le taux (f(a+h)-f(a))/h admet une limite finie lorsque h→0.',
      '<strong>Convexité</strong> : f est convexe si sa courbe est sous ses cordes ; si f est deux fois dérivable, f’’≥0 suffit.'
    ],
    results: [
      'Théorème des valeurs intermédiaires : une fonction continue sur [a,b] prend toutes les valeurs entre f(a) et f(b).',
      'Théorème de Rolle : si f(a)=f(b), il existe c∈]a,b[ tel que f’(c)=0.',
      'Théorème des accroissements finis : il existe c tel que f(b)-f(a)=f’(c)(b-a).',
      'Si f’≥0 sur un intervalle, alors f est croissante.'
    ],
    demos: [
      '<strong>Rolle via extremum.</strong> Une fonction continue sur [a,b] atteint ses bornes. Si elle n’est pas constante, un extremum est atteint à l’intérieur ; en ce point, la dérivée est nulle.',
      '<strong>TAF à partir de Rolle.</strong> On applique Rolle à g(x)=f(x)-[(f(b)-f(a))/(b-a)](x-a). Cette fonction a même valeur en a et b.'
    ],
    methods: [
      'Pour prouver une inégalité : appliquer le TAF ou étudier le signe d’une fonction auxiliaire.',
      'Pour une limite de quotient : chercher l’équivalent dominant ou utiliser un développement limité.'
    ]
  },
  {
    year: '1A',
    module: 'Analyse',
    theme: 'Développements limités',
    level: 5,
    title: 'DL usuels et équivalents',
    intro: 'Outil central pour limites, asymptotiques, séries et intégrales. Il faut connaître les DL usuels et savoir les composer proprement.',
    defs: [
      '<strong>Développement limité à l’ordre n</strong> : f(x)=P_n(x)+o(x^n) au voisinage de 0.',
      '<strong>Équivalent local</strong> : f(x)~g(x) si f(x)/g(x)→1.',
      '<strong>Terme dominant</strong> : premier terme non nul dans un DL.'
    ],
    results: [
      'e^x=1+x+x²/2+x³/6+o(x³).',
      'ln(1+x)=x-x²/2+x³/3+o(x³).',
      'sin x=x-x³/6+o(x³), cos x=1-x²/2+x⁴/24+o(x⁴).',
      'tan x=x+x³/3+o(x³), (1+x)^α=1+αx+α(α-1)x²/2+o(x²).'
    ],
    demos: [
      '<strong>DL de e^x.</strong> On utilise la formule de Taylor en 0 : e^x=Σ_{k=0}^n x^k/k! + o(x^n), car toutes les dérivées de e^x en 0 valent 1.',
      '<strong>DL de ln(1+x).</strong> On intègre le DL de 1/(1+x)=1-x+x²-x³+o(x³) entre 0 et x.'
    ],
    methods: [
      'Ne jamais remplacer une différence par des équivalents séparés si les termes dominants s’annulent : utiliser un DL assez loin.',
      'Pour composer : poser u(x)→0 puis appliquer le DL usuel à u.'
    ]
  },
  {
    year: '1A',
    module: 'Algèbre linéaire',
    theme: 'Espaces vectoriels',
    level: 6,
    title: 'Familles libres, génératrices, bases, dimension',
    intro: 'Le langage des espaces vectoriels permet de formaliser systèmes linéaires, matrices, applications linéaires et diagonalisation.',
    defs: [
      '<strong>Famille libre</strong> : une combinaison linéaire nulle impose tous les coefficients nuls.',
      '<strong>Famille génératrice</strong> : tout vecteur de l’espace est combinaison linéaire de la famille.',
      '<strong>Base</strong> : famille libre et génératrice.',
      '<strong>Dimension</strong> : nombre de vecteurs dans une base.'
    ],
    results: [
      'Dans un espace de dimension n, toute famille libre de n vecteurs est une base.',
      'Toute famille de n+1 vecteurs dans un espace de dimension n est liée.',
      'Une famille contenant le vecteur nul est liée.'
    ],
    demos: [
      '<strong>Famille libre de n vecteurs.</strong> Si elle ne générait pas l’espace, on pourrait l’agrandir en une famille libre de plus de n vecteurs, impossible en dimension n.',
      '<strong>Vecteur nul.</strong> Si une famille contient 0, alors 1·0 + 0·v2 + ... =0 donne une relation linéaire non triviale.'
    ],
    methods: [
      'Pour montrer qu’une famille est libre : écrire une combinaison linéaire nulle et résoudre.',
      'Pour montrer qu’une famille est une base en dimension n : prouver libre ou génératrice avec exactement n vecteurs.'
    ]
  },
  {
    year: '1A',
    module: 'Algèbre linéaire',
    theme: 'Matrices et systèmes',
    level: 7,
    title: 'Matrices, rang, inverse, déterminant 2×2',
    intro: 'Les matrices encodent les applications linéaires et les systèmes. Les opérations matricielles doivent devenir automatiques.',
    defs: [
      '<strong>Rang d’une matrice</strong> : dimension de l’espace engendré par ses colonnes, ou rang de l’application linéaire associée.',
      '<strong>Matrice inversible</strong> : matrice carrée A telle qu’il existe B avec AB=BA=I.',
      '<strong>Trace</strong> : somme des coefficients diagonaux.'
    ],
    results: [
      'A est inversible si et seulement si son rang est n.',
      'Pour une matrice triangulaire, le déterminant est le produit des coefficients diagonaux.',
      'det(AB)=det(A)det(B), det(A^{-1})=1/det(A).'
    ],
    demos: [
      '<strong>Inversibilité et rang.</strong> A inversible équivaut à une application linéaire bijective. En dimension finie, bijective équivaut à rang maximal.',
      '<strong>Déterminant d’un produit.</strong> Résultat structural : l’effet de deux applications successives sur les volumes est le produit des effets de chacune.'
    ],
    methods: [
      'Pour inverser une matrice : utiliser Gauss ou résoudre AX=I.',
      'Pour calculer un rang : pivoter, repérer les colonnes pivots, supprimer les lignes dépendantes.'
    ]
  },
  {
    year: '1A',
    module: 'Probabilités',
    theme: 'Dénombrement',
    level: 8,
    title: 'Permutations, arrangements, combinaisons',
    intro: 'Le dénombrement est la base des probabilités discrètes : il faut identifier si l’ordre compte et si les répétitions sont autorisées.',
    defs: [
      '<strong>Permutation</strong> : ordre de n objets distincts, nombre n!.',
      '<strong>Arrangement</strong> : choix ordonné de k objets parmi n.',
      '<strong>Combinaison</strong> : choix non ordonné de k objets parmi n, noté C(n,k).'
    ],
    results: [
      'C(n,k)=n!/[k!(n-k)!].',
      'Formule du binôme : (a+b)^n=Σ C(n,k)a^{n-k}b^k.',
      'Somme des coefficients de (1+x)^n : 2^n.'
    ],
    demos: [
      '<strong>Combinaisons.</strong> Le nombre d’arrangements de k objets est n!/(n-k)!. Chaque choix non ordonné donne k! ordres, donc C(n,k)=n!/[k!(n-k)!].',
      '<strong>Binôme.</strong> Pour obtenir a^{n-k}b^k, il faut choisir les k facteurs où l’on prend b parmi n facteurs.'
    ],
    methods: [
      'Question clé : l’ordre compte-t-il ? Si oui, arrangement/permutation ; sinon, combinaison.',
      'Pour une probabilité uniforme : probabilité = cas favorables / cas possibles.'
    ]
  },
  {
    year: '1A',
    module: 'Probabilités',
    theme: 'Probabilités finies',
    level: 9,
    title: 'Événements, conditionnement, indépendance',
    intro: 'Le conditionnement est central en ECS, notamment pour les arbres, les probabilités totales et la formule de Bayes.',
    defs: [
      '<strong>Probabilité conditionnelle</strong> : P_A(B)=P(A∩B)/P(A) si P(A)>0.',
      '<strong>Indépendance</strong> : A et B sont indépendants si P(A∩B)=P(A)P(B).',
      '<strong>Système complet d’événements</strong> : événements disjoints dont l’union est l’univers.'
    ],
    results: [
      'Formule des probabilités totales : P(B)=Σ P(A_i)P(B|A_i).',
      'Formule de Bayes : P(A_i|B)=P(A_i)P(B|A_i)/P(B).',
      'Si A et B sont indépendants, alors A et complémentaire de B le sont aussi.'
    ],
    demos: [
      '<strong>Probabilités totales.</strong> Si les A_i forment une partition, alors B est réunion disjointe des B∩A_i. Par additivité, P(B)=ΣP(B∩A_i)=ΣP(A_i)P(B|A_i).',
      '<strong>Bayes.</strong> On écrit P(A_i∩B) de deux façons : P(A_i)P(B|A_i)=P(B)P(A_i|B).'
    ],
    methods: [
      'Faire un arbre pondéré pour visualiser les conditionnements successifs.',
      'Ne pas confondre incompatibilité et indépendance : incompatibles donne P(A∩B)=0 ; indépendants donne P(A∩B)=P(A)P(B).'
    ]
  },
  {
    year: '2A',
    module: 'Analyse',
    theme: 'Séries numériques',
    level: 10,
    title: 'Séries à termes positifs, alternées, absolues',
    intro: 'Les séries prolongent les suites : il s’agit d’étudier la convergence des sommes partielles.',
    defs: [
      '<strong>Série</strong> : suite des sommes partielles S_n=Σ_{k=0}^n u_k.',
      '<strong>Convergence absolue</strong> : Σ|u_n| converge.',
      '<strong>Série alternée</strong> : série dont les termes changent de signe, souvent (-1)^n a_n.'
    ],
    results: [
      'Si Σu_n converge, alors u_n→0. Réciproque fausse.',
      'Riemann : Σ1/n^α converge si et seulement si α>1.',
      'Bertrand : Σ1/[n(ln n)^α] converge si et seulement si α>1.',
      'Le critère de Leibniz donne la convergence de Σ(-1)^n a_n si a_n décroît vers 0.'
    ],
    demos: [
      '<strong>Condition nécessaire.</strong> Si S_n converge vers S, alors u_n=S_n-S_{n-1}→S-S=0.',
      '<strong>Leibniz.</strong> Les sommes partielles paires et impaires sont adjacentes lorsque a_n décroît vers 0 ; elles convergent donc vers la même limite.'
    ],
    methods: [
      'Pour termes positifs : chercher équivalent, comparaison, Riemann, Bertrand, d’Alembert.',
      'Pour signes variables : commencer par la convergence absolue, puis alternée si nécessaire.'
    ]
  },
  {
    year: '2A',
    module: 'Analyse',
    theme: 'Intégrales impropres',
    level: 11,
    title: 'Convergence des intégrales généralisées',
    intro: 'Les intégrales impropres sont étudiées à l’infini ou au voisinage d’une singularité.',
    defs: [
      '<strong>Intégrale impropre en +∞</strong> : ∫_a^{+∞} f est la limite de ∫_a^A f quand A→+∞.',
      '<strong>Singularité en a</strong> : ∫_a^b f se définit comme limite quand x→a+ de ∫_x^b f.',
      '<strong>Convergence absolue</strong> : ∫|f| converge.'
    ],
    results: [
      '∫_1^{+∞} 1/x^α dx converge si et seulement si α>1.',
      '∫_0^1 1/x^α dx converge si et seulement si α<1.',
      '∫_2^{+∞} 1/[x(ln x)^α] dx converge si et seulement si α>1.'
    ],
    demos: [
      '<strong>Riemann à l’infini.</strong> Pour α≠1, une primitive de x^{-α} est x^{1-α}/(1-α). La limite en +∞ est finie exactement si 1-α<0.',
      '<strong>Bertrand.</strong> Poser u=ln x transforme dx/x en du ; l’intégrale devient ∫du/u^α.'
    ],
    methods: [
      'Toujours identifier le problème : infini ou borne finie singulière.',
      'Utiliser équivalents positifs : si f~g≥0, les intégrales ont même nature.'
    ]
  },
  {
    year: '2A',
    module: 'Algèbre linéaire',
    theme: 'Applications linéaires',
    level: 12,
    title: 'Noyau, image, rang, projecteurs, symétries',
    intro: 'Ce bloc est au cœur des sujets d’algèbre : comprendre un endomorphisme via son noyau, son image et ses sous-espaces stables.',
    defs: [
      '<strong>Noyau</strong> : Ker(f)={x | f(x)=0}.',
      '<strong>Image</strong> : Im(f)={f(x), x∈E}.',
      '<strong>Projecteur</strong> : endomorphisme p tel que p²=p.',
      '<strong>Symétrie</strong> : endomorphisme s tel que s²=Id.'
    ],
    results: [
      'Théorème du rang : dim(E)=dim Ker(f)+rg(f).',
      'f est injective si et seulement si Ker(f)={0}.',
      'Pour un projecteur p, E=Ker(p)⊕Im(p).',
      'Pour une symétrie s, les valeurs propres possibles sont 1 et -1.'
    ],
    demos: [
      '<strong>Projecteur.</strong> Pour tout x, x=(x-p(x))+p(x). Or p(x-p(x))=p(x)-p²(x)=0, donc x-p(x)∈Ker(p), et p(x)∈Im(p). Intersection nulle : si y∈Ker(p)∩Im(p), y=p(z) et p(y)=0, mais p(y)=p²(z)=p(z)=y, donc y=0.',
      '<strong>Injectivité.</strong> Si Ker(f)={0} et f(x)=f(y), alors f(x-y)=0, donc x-y=0.'
    ],
    methods: [
      'Pour étudier un projecteur : calculer p², Ker(p), Im(p).',
      'Pour une application linéaire : trouver matrice, rang, noyau, image, puis interpréter géométriquement.'
    ]
  },
  {
    year: '2A',
    module: 'Algèbre linéaire',
    theme: 'Réduction des endomorphismes',
    level: 13,
    title: 'Valeurs propres, vecteurs propres, diagonalisation',
    intro: 'La réduction vise à trouver une base dans laquelle la matrice est simple, idéalement diagonale.',
    defs: [
      '<strong>Valeur propre</strong> : λ tel qu’il existe v≠0 avec f(v)=λv.',
      '<strong>Sous-espace propre</strong> : E_λ=Ker(f-λId).',
      '<strong>Diagonalisation</strong> : existence d’une base de vecteurs propres.'
    ],
    results: [
      'Une matrice n×n ayant n valeurs propres distinctes est diagonalisable.',
      'La trace est la somme des valeurs propres comptées avec multiplicité.',
      'Le déterminant est le produit des valeurs propres comptées avec multiplicité.',
      'Une matrice réelle symétrique est orthogonalement diagonalisable.'
    ],
    demos: [
      '<strong>Vecteurs propres associés à des valeurs propres distinctes.</strong> Une relation linéaire minimale entre ces vecteurs conduit, en appliquant f puis en combinant, à supprimer un terme, contradiction par minimalité.',
      '<strong>Nilpotente.</strong> Si A^p=0 et Av=λv, alors A^p v=λ^p v=0. Comme v≠0, λ=0.'
    ],
    methods: [
      'Calculer le polynôme caractéristique, factoriser, puis déterminer les dimensions des sous-espaces propres.',
      'Si la somme des dimensions des sous-espaces propres vaut n, la matrice est diagonalisable.'
    ]
  },
  {
    year: '2A',
    module: 'Probabilités',
    theme: 'Variables aléatoires discrètes',
    level: 14,
    title: 'Lois usuelles, espérance, variance',
    intro: 'Les variables aléatoires discrètes modélisent les expériences aléatoires à valeurs finies ou dénombrables.',
    defs: [
      '<strong>Espérance</strong> : E(X)=Σ xP(X=x) lorsque la somme converge absolument.',
      '<strong>Variance</strong> : Var(X)=E[(X-E(X))²]=E(X²)-E(X)².',
      '<strong>Indépendance</strong> : les événements portant sur X et Y se factorisent ; en particulier P(X=x,Y=y)=P(X=x)P(Y=y).'
    ],
    results: [
      'Bernoulli(p) : E=p, Var=p(1-p).',
      'Binomiale B(n,p) : E=np, Var=np(1-p).',
      'Poisson(λ) : E=λ, Var=λ.',
      'Si X et Y sont indépendantes, E(XY)=E(X)E(Y) et Var(X+Y)=Var(X)+Var(Y).'
    ],
    demos: [
      '<strong>Binomiale.</strong> Si X est somme de n Bernoulli indépendantes de paramètre p, alors E(X)=Σp=np et Var(X)=Σp(1-p)=np(1-p).',
      '<strong>Variance d’une somme.</strong> Var(X+Y)=Var(X)+Var(Y)+2Cov(X,Y). L’indépendance donne Cov(X,Y)=0.'
    ],
    methods: [
      'Reconnaître la loi avant de calculer : répétitions indépendantes → binomiale ; nombre d’événements rares → Poisson.',
      'Pour une espérance difficile : utiliser la linéarité de l’espérance, même sans indépendance.'
    ]
  },
  {
    year: '2A',
    module: 'Probabilités',
    theme: 'Variables à densité',
    level: 15,
    title: 'Densités, loi uniforme, exponentielle, normale',
    intro: 'Les lois à densité modélisent des variables continues. Les calculs passent par des intégrales.',
    defs: [
      '<strong>Densité</strong> : f≥0 et ∫f=1 ; P(a≤X≤b)=∫_a^b f(t)dt.',
      '<strong>Fonction de répartition</strong> : F_X(x)=P(X≤x).',
      '<strong>Loi exponentielle</strong> : densité λe^{-λx} sur R_+.'
    ],
    results: [
      'Uniforme sur [a,b] : E=(a+b)/2, Var=(b-a)²/12.',
      'Exponentielle(λ) : E=1/λ, Var=1/λ², propriété sans mémoire.',
      'Normale centrée réduite : densité φ(x)=1/√(2π)e^{-x²/2}.',
      'Si X a densité f, alors E(g(X))=∫g(x)f(x)dx lorsque cela converge.'
    ],
    demos: [
      '<strong>Espérance exponentielle.</strong> ∫_0^∞ xλe^{-λx}dx. Par intégration par parties, on obtient 1/λ.',
      '<strong>Sans mémoire.</strong> P(X>s+t|X>s)=P(X>s+t)/P(X>s)=e^{-λ(s+t)}/e^{-λs}=e^{-λt}.'
    ],
    methods: [
      'Vérifier d’abord qu’une densité est positive et d’intégrale 1.',
      'Pour une probabilité continue : traduire l’événement en intervalle puis intégrer la densité.'
    ]
  },
  {
    year: '2A',
    module: 'Analyse',
    theme: 'Fonctions de plusieurs variables',
    level: 16,
    title: 'Dérivées partielles, gradient, extrema',
    intro: 'Outil fréquent en économie et optimisation : fonctions de deux variables, points critiques et étude locale.',
    defs: [
      '<strong>Dérivée partielle</strong> : dérivée par rapport à une variable, les autres étant fixées.',
      '<strong>Gradient</strong> : vecteur des dérivées partielles.',
      '<strong>Point critique</strong> : point où le gradient est nul.'
    ],
    results: [
      'Un extremum local intérieur d’une fonction différentiable est un point critique.',
      'Pour une fonction C² de deux variables, la matrice Hessienne aide à classifier les points critiques.',
      'Si Hessienne définie positive : minimum local ; définie négative : maximum local ; déterminant négatif : point selle.'
    ],
    demos: [
      '<strong>Condition nécessaire.</strong> Si f admet un extremum local en (a,b), alors les fonctions partielles x↦f(x,b) et y↦f(a,y) ont un extremum en a et b, donc leurs dérivées sont nulles.',
      '<strong>Classification.</strong> Le DL d’ordre 2 autour d’un point critique est piloté par la forme quadratique associée à la Hessienne.'
    ],
    methods: [
      'Résoudre ∂f/∂x=0 et ∂f/∂y=0.',
      'Calculer la Hessienne puis son déterminant et le signe d’un coefficient diagonal.'
    ]
  }
];
