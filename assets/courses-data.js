const ECS_COURSES = [
  {
    "year": "1A",
    "module": "Fondations",
    "theme": "Raisonnement et ensembles",
    "level": 1,
    "title": "Logique, ensembles, applications",
    "intro": "Point de départ du cours ECS : savoir rédiger, manipuler les quantificateurs, raisonner par implication, équivalence, contraposition, absurde et récurrence.",
    "defs": [
      "<strong>Implication.</strong> \\(P\\Rightarrow Q\\) signifie que chaque fois que \\(P\\) est vraie, \\(Q\\) l’est aussi. Sa contraposée équivalente est \\(\\neg Q\\Rightarrow\\neg P\\).",
      "<strong>Équivalence.</strong> \\(P\\Leftrightarrow Q\\) réunit les deux implications \\(P\\Rightarrow Q\\) et \\(Q\\Rightarrow P\\). Chacun des deux sens doit être justifié.",
      "<strong>Application.</strong> Une application \\(f:E\\to F\\) est injective si \\(f(x)=f(y)\\Rightarrow x=y\\). Elle est surjective si chaque élément de \\(F\\) a un antécédent dans \\(E\\). Elle est bijective si ces deux propriétés sont satisfaites.",
      "<strong>Récurrence.</strong> Pour établir une propriété \\(P(n)\\) à partir du rang \\(n_0\\), prouver l’initialisation \\(P(n_0)\\), puis l’hérédité \\(P(n)\\Rightarrow P(n+1)\\) pour tout \\(n\\geq n_0\\)."
    ],
    "results": [
      "<strong>Réciproque.</strong> Une bijection \\(f:E\\to F\\) admet une unique réciproque \\(f^{-1}:F\\to E\\) vérifiant \\(f^{-1}\\circ f=\\operatorname{Id}_E\\) et \\(f\\circ f^{-1}=\\operatorname{Id}_F\\).",
      "<strong>Cardinal fini.</strong> S’il existe une bijection entre deux ensembles finis, leurs cardinaux sont égaux. Pour deux ensembles finis de même cardinal, une injection ou une surjection suffit à établir une bijection.",
      "<strong>Double inclusion.</strong> Pour prouver \\(A=B\\), montrer \\(A\\subseteq B\\) puis \\(B\\subseteq A\\), en prenant un élément arbitraire à chaque étape."
    ],
    "demos": [
      "<strong>Unicité de la réciproque.</strong> Si g et h sont deux réciproques de f, alors pour tout y de l’ensemble d’arrivée, \\(y=f(x)\\) pour un x. Donc \\(g(y)=g(f(x))=x\\) et \\(h(y)=h(f(x))=x\\). Ainsi \\(g=h\\).",
      "<strong>Schéma d’une récurrence.</strong> On prouve \\(P(n0)\\). Puis on suppose P(n) vraie pour un n arbitraire et on démontre \\(P(n+1)\\). La conclusion vient de la chaîne \\(P(n0)\\implies P(n0+1)\\implies\\)..."
    ],
    "methods": [
      "Pour prouver une égalité d’ensembles : partir de \\(x\\in A\\), montrer \\(x\\in B\\), puis faire l’inclusion inverse.",
      "Pour une bijection : choisir selon le contexte entre injection+surjection, construction explicite de la réciproque, ou argument de cardinal fini."
    ]
  },
  {
    "year": "1A",
    "module": "Algèbre",
    "theme": "Calcul algébrique et polynômes",
    "level": 2,
    "title": "Sommes, produits, polynômes",
    "intro": "Les polynômes structurent le calcul algébrique, les racines, les factorisations et les développements utilisés en analyse.",
    "defs": [
      "<strong>Degré</strong> : plus grand exposant ayant un coefficient non nul.",
      "<strong>Racine</strong> : a est racine de P si \\(P(a)=0\\).",
      "<strong>Multiplicité</strong> : a est racine de multiplicité m si \\(P(X)=(X-a)^mQ(X)\\) avec \\(Q(a)\\ne 0\\)."
    ],
    "results": [
      "<strong>Division et racine.</strong> Le reste de la division de \\(P\\) par \\(X-a\\) vaut \\(P(a)\\). Ainsi \\(P(a)=0\\) si et seulement si \\(X-a\\) divise \\(P\\).",
      "<strong>Nombre de racines.</strong> Un polynôme non nul de degré \\(n\\) possède au plus \\(n\\) racines distinctes. Cette hypothèse de non-nullité est indispensable.",
      "<strong>Racine multiple.</strong> Sur \\(\\mathbb R\\) ou \\(\\mathbb C\\), \\(a\\) est une racine de multiplicité au moins 2 si et seulement si \\(P(a)=P'(a)=0\\). Pour une multiplicité exactement 2, vérifier aussi \\(P''(a)\\neq0\\)."
    ],
    "demos": [
      "<strong>Théorème du reste.</strong> La division euclidienne donne \\(P(X)=(X-a)Q(X)+r\\). En évaluant en \\(X=a\\), on obtient \\(P(a)=r\\).",
      "<strong>Nombre maximal de racines.</strong> Si P a k racines distinctes \\(a_{1},\\ldots ,ak\\), alors \\((X-a_{1})\\ldots (X-ak)\\) divise P. Donc \\(k\\leq \\deg (P)\\), sauf si P est nul."
    ],
    "methods": [
      "Pour factoriser : chercher d’abord les racines évidentes, puis utiliser la division euclidienne.",
      "Pour prouver qu’un polynôme est nul : montrer qu’il a strictement plus de racines que son degré."
    ]
  },
  {
    "year": "1A",
    "module": "Analyse",
    "theme": "Suites numériques",
    "level": 3,
    "title": "Suites, limites, monotonie, récurrence",
    "intro": "Les suites sont la première brique de l’analyse : limites, comparaison, encadrement, suites monotones, suites extraites et suites définies par récurrence.",
    "defs": [
      "<strong>Convergence.</strong> La suite \\((u_n)\\) converge vers \\(\\ell\\) si \\(\\forall\\varepsilon\\gt 0,\\ \\exists N\\in\\mathbb N,\\ \\forall n\\geq N,\\ |u_n-\\ell|\\lt \\varepsilon\\). Le rang \\(N\\) dépend de la précision demandée.",
      "<strong>Suite extraite.</strong> Une suite de la forme \\((u_{\\varphi(n)})\\), où \\(\\varphi:\\mathbb N\\to\\mathbb N\\) est strictement croissante. On garde une infinité de termes dans leur ordre initial.",
      "<strong>Équivalent.</strong> Si \\(v_n\\neq0\\) à partir d’un rang, \\(u_n\\sim v_n\\) signifie \\(u_n/v_n\\to1\\)."
    ],
    "results": [
      "<strong>Convergence et bornes.</strong> Toute suite réelle convergente est bornée. La réciproque est fausse : une suite bornée peut osciller.",
      "<strong>Convergence monotone.</strong> Une suite réelle croissante et majorée converge vers la borne supérieure de ses termes ; une suite décroissante et minorée converge vers leur borne inférieure.",
      "<strong>Gendarmes.</strong> Si, à partir d’un certain rang, \\(a_n\\leq u_n\\leq b_n\\) et \\(a_n,b_n\\to\\ell\\), alors \\(u_n\\to\\ell\\).",
      "<strong>Sous-suites.</strong> Toutes les suites extraites d’une suite convergente ont la même limite. Deux limites extraites différentes suffisent donc à prouver la divergence."
    ],
    "demos": [
      "<strong>Convergence monotone.</strong> L’ensemble non vide \\(\\{u_n:n\\in\\mathbb N\\}\\), majoré, possède une borne supérieure \\(\\ell\\). Pour \\(\\varepsilon\\gt 0\\), le nombre \\(\\ell-\\varepsilon\\) n’est pas un majorant : il existe donc un rang \\(N\\) tel que \\(u_N\\gt \\ell-\\varepsilon\\). Par croissance, pour tout \\(n\\geq N\\), \\(\\ell-\\varepsilon\\lt u_n\\leq\\ell\\). Cet encadrement prouve la convergence vers \\(\\ell\\).",
      "<strong>Convergence d’une extraite.</strong> Si \\(u_n\\to\\ell\\), fixe une précision \\(\\varepsilon\\gt 0\\), puis un rang \\(N\\) tel que \\(|u_n-\\ell|\\lt \\varepsilon\\) pour \\(n\\geq N\\). Comme \\(\\varphi\\) est strictement croissante sur les entiers, \\(\\varphi(n)\\to+\\infty\\). Pour \\(n\\) assez grand, \\(\\varphi(n)\\geq N\\), donc \\(|u_{\\varphi(n)}-\\ell|\\lt \\varepsilon\\)."
    ],
    "methods": [
      "Pour une suite récurrente \\(u_{n+1}=f(u_n)\\) : chercher les points fixes, étudier l’intervalle stable, puis monotonie ou contraction.",
      "Pour une forme indéterminée : diviser par le terme dominant ou utiliser un équivalent."
    ]
  },
  {
    "year": "1A",
    "module": "Analyse",
    "theme": "Fonctions réelles",
    "level": 4,
    "title": "Limites, continuité, dérivabilité",
    "intro": "Ce bloc pose les outils de base pour étudier une fonction : domaine, limites, continuité, dérivabilité, variations et convexité.",
    "defs": [
      "<strong>Continuité en a</strong> : \\(f(x)\\to f(a)\\) lorsque \\(x\\to a\\).",
      "<strong>Dérivabilité en a</strong> : le taux \\((f(a+h)-f(a))/h\\) admet une limite finie lorsque \\(h\\to 0\\).",
      "<strong>Convexité</strong> : f est convexe si sa courbe est sous ses cordes ; si f est deux fois dérivable, \\(f''\\geq 0\\) suffit."
    ],
    "results": [
      "<strong>TVI.</strong> Si \\(f\\) est continue sur \\([a,b]\\), elle prend toute valeur comprise entre \\(f(a)\\) et \\(f(b)\\). Ce résultat établit une existence.",
      "<strong>Rolle.</strong> Si \\(a\\lt b\\), si \\(f\\) est continue sur \\([a,b]\\), dérivable sur \\(]a,b[\\) et si \\(f(a)=f(b)\\), alors il existe \\(c\\in]a,b[\\) tel que \\(f'(c)=0\\).",
      "<strong>Accroissements finis.</strong> Sous les mêmes hypothèses de continuité et de dérivabilité, sans imposer l’égalité aux bornes, il existe \\(c\\in]a,b[\\) tel que \\[f(b)-f(a)=f'(c)(b-a).\\]",
      "<strong>Variations.</strong> Sur un intervalle où \\(f\\) est dérivable, \\(f'\\geq0\\) entraîne la croissance de \\(f\\), et \\(f'\\gt 0\\) entraîne sa stricte croissance."
    ],
    "demos": [
      "<strong>Rolle.</strong> La continuité sur le segment assure que \\(f\\) atteint un maximum et un minimum. Si \\(f\\) est constante, sa dérivée est nulle partout à l’intérieur. Sinon, comme \\(f(a)=f(b)\\), au moins l’un des extrema est atteint en un point intérieur \\(c\\). La dérivabilité en ce point donne \\(f'(c)=0\\).",
      "<strong>Accroissements finis.</strong> Pose \\(m=\\frac{f(b)-f(a)}{b-a}\\), puis \\(g(x)=f(x)-m(x-a)\\). Les hypothèses de continuité et dérivabilité sont conservées, et \\(g(a)=g(b)\\). Rolle fournit \\(g'(c)=0\\), donc \\(f'(c)=m\\), d’où la formule."
    ],
    "methods": [
      "Pour prouver une inégalité : appliquer le TAF ou étudier le signe d’une fonction auxiliaire.",
      "Pour une limite de quotient : chercher l’équivalent dominant ou utiliser un développement limité."
    ]
  },
  {
    "year": "1A",
    "module": "Analyse",
    "theme": "Développements limités",
    "level": 5,
    "title": "DL usuels et équivalents",
    "intro": "Outil central pour limites, asymptotiques, séries et intégrales. Il faut connaître les DL usuels et savoir les composer proprement.",
    "defs": [
      "<strong>Développement limité à l’ordre n</strong> : \\(f(x)=P_n(x)+o(x^n)\\) au voisinage de 0.",
      "<strong>Équivalent local</strong> : \\(f(x)\\sim g(x)\\) si \\(f(x)/g(x)\\to 1\\).",
      "<strong>Terme dominant</strong> : premier terme non nul dans un DL."
    ],
    "results": [
      "<strong>Exponentielle, en 0.</strong> \\[e^x=1+x+\\frac{x^2}{2}+\\frac{x^3}{6}+o(x^3).\\]",
      "<strong>Logarithme, en 0.</strong> \\[\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}+o(x^3).\\]",
      "<strong>Trigonométrie, en 0.</strong> \\[\\sin x=x-\\frac{x^3}{6}+o(x^3),\\qquad\\cos x=1-\\frac{x^2}{2}+\\frac{x^4}{24}+o(x^4).\\]",
      "<strong>Tangente et puissances, en 0.</strong> Pour un réel \\(\\alpha\\) fixé : \\[\\tan x=x+\\frac{x^3}{3}+o(x^3),\\qquad(1+x)^\\alpha=1+\\alpha x+\\frac{\\alpha(\\alpha-1)}2x^2+o(x^2).\\]"
    ],
    "demos": [
      "<strong>DL de \\(e^x\\).</strong> On utilise la formule de Taylor en 0 : \\(e^x=\\sum _{k=0}^n x^k/k! + o(x^n)\\), car toutes les dérivées de \\(e^x\\) en 0 valent 1.",
      "<strong>DL de \\(\\ln (1+x)\\).</strong> On intègre le DL de \\(1/(1+x)=1-x+x^{2}-x^{3}+o(x^{3})\\) entre 0 et x."
    ],
    "methods": [
      "Ne jamais remplacer une différence par des équivalents séparés si les termes dominants s’annulent : utiliser un DL assez loin.",
      "Pour composer : poser \\(u(x)\\to 0\\) puis appliquer le DL usuel à u."
    ]
  },
  {
    "year": "1A",
    "module": "Algèbre linéaire",
    "theme": "Espaces vectoriels",
    "level": 6,
    "title": "Familles libres, génératrices, bases, dimension",
    "intro": "Le langage des espaces vectoriels permet de formaliser systèmes linéaires, matrices, applications linéaires et diagonalisation.",
    "defs": [
      "<strong>Famille libre</strong> : une combinaison linéaire nulle impose tous les coefficients nuls.",
      "<strong>Famille génératrice</strong> : tout vecteur de l’espace est combinaison linéaire de la famille.",
      "<strong>Base</strong> : famille libre et génératrice.",
      "<strong>Dimension</strong> : nombre de vecteurs dans une base."
    ],
    "results": [
      "<strong>Critère de base.</strong> Dans un espace de dimension finie \\(n\\), une famille de exactement \\(n\\) vecteurs est une base dès qu’elle est libre ou génératrice.",
      "<strong>Cardinal.</strong> Une famille libre contient au plus \\(n\\) vecteurs. Toute famille de plus de \\(n\\) vecteurs est liée.",
      "<strong>Vecteur nul.</strong> Une famille qui contient le vecteur nul est liée : on peut donner au coefficient de ce vecteur la valeur 1, et aux autres la valeur 0."
    ],
    "demos": [
      "<strong>Famille libre de n vecteurs.</strong> Si elle ne générait pas l’espace, on pourrait l’agrandir en une famille libre de plus de n vecteurs, impossible en dimension n.",
      "<strong>Vecteur nul.</strong> Si une famille contient 0, alors \\(1\\cdot 0 + 0\\cdot v_{2} + \\ldots  =0\\) donne une relation linéaire non triviale."
    ],
    "methods": [
      "Pour montrer qu’une famille est libre : écrire une combinaison linéaire nulle et résoudre.",
      "Pour montrer qu’une famille est une base en dimension n : prouver libre ou génératrice avec exactement n vecteurs."
    ]
  },
  {
    "year": "1A",
    "module": "Algèbre linéaire",
    "theme": "Matrices et systèmes",
    "level": 7,
    "title": "Matrices, rang, inverse, déterminant 2×2",
    "intro": "Les matrices encodent les applications linéaires et les systèmes. Les opérations matricielles doivent devenir automatiques.",
    "defs": [
      "<strong>Rang d’une matrice</strong> : dimension de l’espace engendré par ses colonnes, ou rang de l’application linéaire associée.",
      "<strong>Matrice inversible</strong> : matrice carrée A telle qu’il existe B avec \\(AB=BA=I\\).",
      "<strong>Trace</strong> : somme des coefficients diagonaux."
    ],
    "results": [
      "<strong>Inversibilité.</strong> Pour \\(A\\in\\mathcal M_n(\\mathbb R)\\), les propriétés « inversible », « de rang \\(n\\) » et « de déterminant non nul » sont équivalentes.",
      "<strong>Dimension 2.</strong> \\[\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}=ad-bc.\\] Si ce nombre est non nul, l’inverse vaut \\(\\frac1{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}\\).",
      "<strong>Déterminant d’un produit.</strong> Pour des matrices carrées de même taille, \\(\\det(AB)=\\det(A)\\det(B)\\). Si \\(A\\) est inversible, \\(\\det(A^{-1})=1/\\det(A)\\)."
    ],
    "demos": [
      "<strong>Inversibilité et rang.</strong> A inversible équivaut à une application linéaire bijective. En dimension finie, bijective équivaut à rang maximal.",
      "<strong>Déterminant d’un produit.</strong> Résultat structural : l’effet de deux applications successives sur les volumes est le produit des effets de chacune."
    ],
    "methods": [
      "Pour inverser une matrice : utiliser Gauss ou résoudre \\(AX=I\\).",
      "Pour calculer un rang : pivoter, repérer les colonnes pivots, supprimer les lignes dépendantes."
    ]
  },
  {
    "year": "1A",
    "module": "Probabilités",
    "theme": "Dénombrement",
    "level": 8,
    "title": "Permutations, arrangements, combinaisons",
    "intro": "Le dénombrement est la base des probabilités discrètes : il faut identifier si l’ordre compte et si les répétitions sont autorisées.",
    "defs": [
      "<strong>Permutation.</strong> Un ordre de \\(n\\) objets distincts ; il y en a \\(n!\\), avec la convention \\(0!=1\\).",
      "<strong>Arrangement sans répétition.</strong> Un choix ordonné de \\(k\\) objets distincts parmi \\(n\\), pour \\(0\\leq k\\leq n\\).",
      "<strong>Combinaison.</strong> Un sous-ensemble de \\(k\\) objets parmi \\(n\\). Son nombre est noté \\(\\binom nk\\), aussi écrit \\(C(n,k)\\). L’ordre des éléments ne compte pas."
    ],
    "results": [
      "<strong>Choix sans répétition.</strong> Pour \\(0\\leq k\\leq n\\), le nombre de choix ordonnés est \\(\\frac{n!}{(n-k)!}\\), et le nombre de choix non ordonnés est \\[\\binom nk=\\frac{n!}{k!(n-k)!}.\\]",
      "<strong>Binôme de Newton.</strong> Pour \\(n\\in\\mathbb N\\), \\[(a+b)^n=\\sum_{k=0}^{n}\\binom nk a^{n-k}b^k.\\]",
      "<strong>Somme des coefficients.</strong> En prenant \\(a=b=1\\), on obtient \\(\\sum_{k=0}^{n}\\binom nk=2^n\\)."
    ],
    "demos": [
      "<strong>Combinaisons.</strong> Le nombre d’arrangements de k objets est \\(n!/(n-k)!\\). Chaque choix non ordonné donne \\(k!\\) ordres, donc \\(C(n,k)=n!/[k!(n-k)!]\\).",
      "<strong>Binôme.</strong> Pour obtenir \\(a^{n-k}b^k\\), il faut choisir les k facteurs où l’on prend b parmi n facteurs."
    ],
    "methods": [
      "Question clé : l’ordre compte-t-il ? Si oui, arrangement/permutation ; sinon, combinaison.",
      "Pour une probabilité uniforme : probabilité = cas favorables / cas possibles."
    ]
  },
  {
    "year": "1A",
    "module": "Probabilités",
    "theme": "Probabilités finies",
    "level": 9,
    "title": "Événements, conditionnement, indépendance",
    "intro": "Le conditionnement est central en ECS, notamment pour les arbres, les probabilités totales et la formule de Bayes.",
    "defs": [
      "<strong>Probabilité conditionnelle</strong> : \\(P_A(B)=P(A\\cap B)/P(A)\\) si \\(P(A)\\gt 0\\).",
      "<strong>Indépendance</strong> : A et B sont indépendants si \\(P(A\\cap B)=P(A)P(B)\\).",
      "<strong>Système complet d’événements</strong> : événements disjoints dont l’union est l’univers."
    ],
    "results": [
      "<strong>Probabilités totales.</strong> Pour une partition finie \\((A_i)\\) de l’univers dont chaque événement a une probabilité non nulle : \\[\\mathbb P(B)=\\sum_i\\mathbb P(A_i)\\mathbb P(B\\mid A_i).\\]",
      "<strong>Bayes.</strong> Si \\(\\mathbb P(A)\\gt 0\\) et \\(\\mathbb P(B)\\gt 0\\), alors \\[\\mathbb P(A\\mid B)=\\frac{\\mathbb P(A)\\mathbb P(B\\mid A)}{\\mathbb P(B)}.\\]",
      "<strong>Complémentaire.</strong> Si \\(A\\) et \\(B\\) sont indépendants, alors \\(A\\) et \\(\\overline B\\) le sont aussi, car \\(\\mathbb P(A\\cap\\overline B)=\\mathbb P(A)(1-\\mathbb P(B))\\)."
    ],
    "demos": [
      "<strong>Probabilités totales.</strong> Si les \\(A_i\\) forment une partition, alors B est réunion disjointe des \\(B\\cap A_i\\). Par additivité, \\(P(B)=\\sum P(B\\cap A_i)=\\sum P(A_i)P(B|A_i)\\).",
      "<strong>Bayes.</strong> On écrit \\(P(A_i\\cap B)\\) de deux façons : \\(P(A_i)P(B|A_i)=P(B)P(A_i|B)\\)."
    ],
    "methods": [
      "Faire un arbre pondéré pour visualiser les conditionnements successifs.",
      "Ne pas confondre incompatibilité et indépendance : incompatibles donne \\(P(A\\cap B)=0\\) ; indépendants donne \\(P(A\\cap B)=P(A)P(B)\\)."
    ]
  },
  {
    "year": "2A",
    "module": "Analyse",
    "theme": "Séries numériques",
    "level": 10,
    "title": "Séries à termes positifs, alternées, absolues",
    "intro": "Les séries prolongent les suites : il s’agit d’étudier la convergence des sommes partielles.",
    "defs": [
      "<strong>Série</strong> : suite des sommes partielles \\(S_n=\\sum _{k=0}^n u_k\\).",
      "<strong>Convergence absolue</strong> : \\(\\sum |u_n|\\) converge.",
      "<strong>Série alternée</strong> : série dont les termes changent de signe, souvent \\((-1)^n a_n\\)."
    ],
    "results": [
      "<strong>Condition nécessaire.</strong> Si \\(\\sum u_n\\) converge, alors \\(u_n\\to0\\). Cette condition seule ne permet pas d’établir la convergence.",
      "<strong>Séries de référence.</strong> La série \\(\\sum_{n\\geq1}\\frac1{n^\\alpha}\\) converge exactement pour \\(\\alpha\\gt 1\\). La série \\(\\sum_{n\\geq2}\\frac1{n(\\ln n)^\\alpha}\\) converge également exactement pour \\(\\alpha\\gt 1\\).",
      "<strong>Leibniz.</strong> Si \\((a_n)\\) est positive, décroissante et tend vers 0, la série \\(\\sum(-1)^na_n\\) converge. La valeur absolue du reste est majorée par le premier terme omis.",
      "<strong>Convergence absolue.</strong> La convergence de \\(\\sum|u_n|\\) entraîne celle de \\(\\sum u_n\\), mais la réciproque est fausse."
    ],
    "demos": [
      "<strong>Condition nécessaire.</strong> Si \\(S_n\\) converge vers S, alors \\(u_n=S_n-S_{n-1}\\to S-S=0\\).",
      "<strong>Leibniz.</strong> Les sommes partielles paires et impaires sont adjacentes lorsque \\(a_n\\) décroît vers 0 ; elles convergent donc vers la même limite."
    ],
    "methods": [
      "Pour termes positifs : chercher équivalent, comparaison, Riemann, Bertrand, d’Alembert.",
      "Pour signes variables : commencer par la convergence absolue, puis alternée si nécessaire."
    ]
  },
  {
    "year": "2A",
    "module": "Analyse",
    "theme": "Intégrales impropres",
    "level": 11,
    "title": "Convergence des intégrales généralisées",
    "intro": "Les intégrales impropres sont étudiées à l’infini ou au voisinage d’une singularité.",
    "defs": [
      "<strong>Intégrale impropre en \\(+\\infty\\)</strong> : \\(\\int _a^{+\\infty } f\\) est la limite de \\(\\int _a^A f\\) quand \\(A\\to +\\infty\\).",
      "<strong>Singularité en a</strong> : \\(\\int _a^b f\\) se définit comme limite quand \\(x\\to a+\\) de \\(\\int _x^b f\\).",
      "<strong>Convergence absolue</strong> : \\(\\int |f|\\) converge."
    ],
    "results": [
      "<strong>Riemann à l’infini.</strong> \\[\\int_1^{\\infty}\\frac{dx}{x^\\alpha}\\text{ converge si et seulement si }\\alpha\\gt 1.\\]",
      "<strong>Riemann en 0.</strong> \\[\\int_0^1\\frac{dx}{x^\\alpha}\\text{ converge si et seulement si }\\alpha\\lt 1.\\]",
      "<strong>Bertrand à l’infini.</strong> \\(\\int_2^{\\infty}\\frac{dx}{x(\\ln x)^\\alpha}\\) converge si et seulement si \\(\\alpha\\gt 1\\). Le changement \\(u=\\ln x\\) ramène au critère de Riemann.",
      "<strong>Comparaison.</strong> Pour des fonctions positives et localement intégrables près du point impropre, des équivalents strictement positifs donnent la même nature aux intégrales."
    ],
    "demos": [
      "<strong>Riemann à l’infini.</strong> Pour \\(\\alpha \\ne 1\\), une primitive de \\(x^{-\\alpha }\\) est \\(x^{1-\\alpha }/(1-\\alpha )\\). La limite en \\(+\\infty\\) est finie exactement si \\(1-\\alpha \\lt 0\\).",
      "<strong>Bertrand.</strong> Poser \\(u=\\ln  x\\) transforme \\(dx/x\\) en du ; l’intégrale devient \\(\\int du/u^\\alpha\\)."
    ],
    "methods": [
      "Toujours identifier le problème : infini ou borne finie singulière.",
      "Utiliser équivalents positifs : si \\(f\\sim g\\geq 0\\), les intégrales ont même nature."
    ]
  },
  {
    "year": "2A",
    "module": "Algèbre linéaire",
    "theme": "Applications linéaires",
    "level": 12,
    "title": "Noyau, image, rang, projecteurs, symétries",
    "intro": "Ce bloc est au cœur des sujets d’algèbre : comprendre un endomorphisme via son noyau, son image et ses sous-espaces stables.",
    "defs": [
      "<strong>Noyau</strong> : \\(\\operatorname{Ker}(f)=\\{x | f(x)=0\\}\\).",
      "<strong>Image</strong> : \\(\\operatorname{Im}(f)=\\{f(x), x\\in E\\}\\).",
      "<strong>Projecteur</strong> : endomorphisme p tel que \\(p^{2}=p\\).",
      "<strong>Symétrie</strong> : endomorphisme s tel que \\(s^{2}=\\operatorname{Id}\\)."
    ],
    "results": [
      "<strong>Théorème du rang.</strong> Pour une application linéaire \\(f:E\\to F\\), avec \\(E\\) de dimension finie : \\[\\dim E=\\dim(\\ker f)+\\dim(\\operatorname{Im}f).\\]",
      "<strong>Injectivité.</strong> Une application linéaire est injective si et seulement si \\(\\ker f=\\{0\\}\\). Pour un endomorphisme en dimension finie, injectivité, surjectivité et bijectivité sont équivalentes.",
      "<strong>Projecteur.</strong> Si \\(p^2=p\\), alors \\(E=\\ker p\\oplus\\operatorname{Im}p\\). Tout vecteur de l’image est fixé par \\(p\\).",
      "<strong>Symétrie.</strong> Sur \\(\\mathbb R\\) ou \\(\\mathbb C\\), si \\(s^2=\\operatorname{Id}\\), les seules valeurs propres possibles sont 1 et \\(-1\\)."
    ],
    "demos": [
      "<strong>Projecteur.</strong> Pour tout \\(x, x=(x-p(x))+p(x)\\). Or \\(p(x-p(x))=p(x)-p^{2}(x)=0\\), donc \\(x-p(x)\\in \\operatorname{Ker}(p)\\), et \\(p(x)\\in \\operatorname{Im}(p)\\). Intersection nulle : si \\(y\\in \\operatorname{Ker}(p)\\cap \\operatorname{Im}(p), y=p(z)\\) et \\(p(y)=0\\), mais \\(p(y)=p^{2}(z)=p(z)=y\\), donc \\(y=0\\).",
      "<strong>Injectivité.</strong> Si \\(\\operatorname{Ker}(f)=\\{0\\}\\) et \\(f(x)=f(y)\\), alors \\(f(x-y)=0\\), donc \\(x-y=0\\)."
    ],
    "methods": [
      "Pour étudier un projecteur : calculer \\(p^{2}, \\operatorname{Ker}(p), \\operatorname{Im}(p)\\).",
      "Pour une application linéaire : trouver matrice, rang, noyau, image, puis interpréter géométriquement."
    ]
  },
  {
    "year": "2A",
    "module": "Algèbre linéaire",
    "theme": "Réduction des endomorphismes",
    "level": 13,
    "title": "Valeurs propres, vecteurs propres, diagonalisation",
    "intro": "La réduction vise à trouver une base dans laquelle la matrice est simple, idéalement diagonale.",
    "defs": [
      "<strong>Valeur propre</strong> : \\(\\lambda\\) tel qu’il existe \\(v\\ne 0\\) avec \\(f(v)=\\lambda v\\).",
      "<strong>Sous-espace propre</strong> : \\(E_\\lambda =\\operatorname{Ker}(f-\\lambda \\operatorname{Id})\\).",
      "<strong>Diagonalisation</strong> : existence d’une base de vecteurs propres."
    ],
    "results": [
      "<strong>Critère général.</strong> Une matrice de taille \\(n\\) est diagonalisable sur le corps considéré si et seulement si la somme des dimensions de ses sous-espaces propres vaut \\(n\\).",
      "<strong>Valeurs propres distinctes.</strong> Une matrice de taille \\(n\\) ayant \\(n\\) valeurs propres distinctes dans le corps considéré est diagonalisable sur ce corps.",
      "<strong>Trace et déterminant.</strong> Si le polynôme caractéristique est scindé, la trace est la somme des valeurs propres et le déterminant leur produit, en comptant leurs multiplicités algébriques.",
      "<strong>Théorème spectral.</strong> Toute matrice réelle symétrique est diagonalisable dans une base orthonormée : \\(A=QDQ^{\\mathsf T}\\), avec \\(Q\\) orthogonale et \\(D\\) diagonale réelle."
    ],
    "demos": [
      "<strong>Vecteurs propres associés à des valeurs propres distinctes.</strong> Une relation linéaire minimale entre ces vecteurs conduit, en appliquant f puis en combinant, à supprimer un terme, contradiction par minimalité.",
      "<strong>Nilpotente.</strong> Si \\(A^p=0\\) et \\(Av=\\lambda v\\), alors \\(A^p v=\\lambda ^p v=0\\). Comme \\(v\\ne 0, \\lambda =0\\)."
    ],
    "methods": [
      "Calculer le polynôme caractéristique, factoriser, puis déterminer les dimensions des sous-espaces propres.",
      "Si la somme des dimensions des sous-espaces propres vaut n, la matrice est diagonalisable."
    ]
  },
  {
    "year": "2A",
    "module": "Probabilités",
    "theme": "Variables aléatoires discrètes",
    "level": 14,
    "title": "Lois usuelles, espérance, variance",
    "intro": "Les variables aléatoires discrètes modélisent les expériences aléatoires à valeurs finies ou dénombrables.",
    "defs": [
      "<strong>Espérance.</strong> Pour une variable discrète de support \\(S\\), \\(\\mathbb E(X)=\\sum_{x\\in S}x\\mathbb P(X=x)\\), si \\(\\sum_{x\\in S}|x|\\mathbb P(X=x)\\lt \\infty\\).",
      "<strong>Variance.</strong> Si \\(\\mathbb E(X^2)\\lt \\infty\\), \\(\\operatorname{Var}(X)=\\mathbb E((X-\\mathbb E(X))^2)\\).",
      "<strong>Indépendance discrète.</strong> Pour tous \\(x,y\\) possibles, \\(\\mathbb P(X=x,Y=y)=\\mathbb P(X=x)\\mathbb P(Y=y)\\)."
    ],
    "results": [
      "<strong>Lois usuelles.</strong> Pour \\(0\\leq p\\leq1\\), une Bernoulli de paramètre \\(p\\) a une espérance \\(p\\) et une variance \\(p(1-p)\\). Pour \\(X\\sim\\mathcal B(n,p)\\), \\[\\mathbb E(X)=np,\\qquad\\operatorname{Var}(X)=np(1-p).\\]",
      "<strong>Poisson.</strong> Si \\(X\\sim\\mathcal P(\\lambda)\\), avec \\(\\lambda\\gt 0\\), alors \\(\\mathbb E(X)=\\operatorname{Var}(X)=\\lambda\\).",
      "<strong>Indépendance et produit.</strong> Pour deux variables indépendantes intégrables, \\(\\mathbb E(XY)=\\mathbb E(X)\\mathbb E(Y)\\). Si leurs moments d’ordre 2 sont finis, \\(\\operatorname{Var}(X+Y)=\\operatorname{Var}(X)+\\operatorname{Var}(Y)\\)."
    ],
    "demos": [
      "<strong>Binomiale.</strong> Si X est somme de n Bernoulli indépendantes de paramètre p, alors \\(E(X)=\\sum p=np\\) et \\(\\operatorname{Var}(X)=\\sum p(1-p)=np(1-p)\\).",
      "<strong>Variance d’une somme.</strong> \\(\\operatorname{Var}(X+Y)=\\operatorname{Var}(X)+\\operatorname{Var}(Y)+2Cov(X,Y). L\\)’indépendance donne \\(\\operatorname{Cov}(X,Y)=0\\)."
    ],
    "methods": [
      "Reconnaître la loi avant de calculer : répétitions indépendantes → binomiale ; nombre d’événements rares \\(\\to  Poisson\\).",
      "Pour une espérance difficile : utiliser la linéarité de l’espérance, même sans indépendance."
    ]
  },
  {
    "year": "2A",
    "module": "Probabilités",
    "theme": "Variables à densité",
    "level": 15,
    "title": "Densités, loi uniforme, exponentielle, normale",
    "intro": "Les lois à densité modélisent des variables continues. Les calculs passent par des intégrales.",
    "defs": [
      "<strong>Densité.</strong> Une fonction intégrable positive ou nulle vérifiant \\(\\int_{\\mathbb R}f(t)\\,dt=1\\), telle que \\(\\mathbb P(a\\leq X\\leq b)=\\int_a^bf(t)\\,dt\\).",
      "<strong>Répartition.</strong> \\(F_X(x)=\\mathbb P(X\\leq x)=\\int_{-\\infty}^xf(t)\\,dt\\). Elle est croissante et continue pour une variable à densité.",
      "<strong>Loi exponentielle.</strong> Pour \\(\\lambda\\gt 0\\), sa densité vaut \\(\\lambda e^{-\\lambda x}\\) sur \\([0,+\\infty[\\), et 0 ailleurs."
    ],
    "results": [
      "<strong>Uniforme.</strong> Pour \\(X\\sim\\mathcal U([a,b])\\), avec \\(a\\lt b\\), \\[\\mathbb E(X)=\\frac{a+b}2,\\qquad\\operatorname{Var}(X)=\\frac{(b-a)^2}{12}.\\]",
      "<strong>Exponentielle.</strong> Pour un paramètre \\(\\lambda\\gt 0\\), \\(\\mathbb E(X)=1/\\lambda\\), \\(\\operatorname{Var}(X)=1/\\lambda^2\\) et \\(\\mathbb P(X\\gt s+t\\mid X\\gt s)=\\mathbb P(X\\gt t)\\) pour \\(s,t\\geq0\\).",
      "<strong>Normale centrée réduite.</strong> Sa densité est \\[\\varphi(x)=\\frac1{\\sqrt{2\\pi}}e^{-x^2/2},\\quad x\\in\\mathbb R.\\]",
      "<strong>Transfert.</strong> Si \\(X\\) a pour densité \\(f\\) et si \\(\\int_{\\mathbb R}|g(x)|f(x)\\,dx\\lt \\infty\\), alors \\(\\mathbb E(g(X))=\\int_{\\mathbb R}g(x)f(x)\\,dx\\)."
    ],
    "demos": [
      "<strong>Espérance exponentielle.</strong> \\(\\int _0^\\infty  x\\lambda e^{-\\lambda x}dx\\). Par intégration par parties, on obtient \\(1/\\lambda\\).",
      "<strong>Sans mémoire.</strong> \\(P(X\\gt s+t|X\\gt s)=P(X\\gt s+t)/P(X\\gt s)=e^{-\\lambda (s+t)}/e^{-\\lambda s}=e^{-\\lambda t}\\)."
    ],
    "methods": [
      "Vérifier d’abord qu’une densité est positive et d’intégrale 1.",
      "Pour une probabilité continue : traduire l’événement en intervalle puis intégrer la densité."
    ]
  },
  {
    "year": "2A",
    "module": "Analyse",
    "theme": "Fonctions de plusieurs variables",
    "level": 16,
    "title": "Dérivées partielles, gradient, extrema",
    "intro": "Outil fréquent en économie et optimisation : fonctions de deux variables, points critiques et étude locale.",
    "defs": [
      "<strong>Dérivée partielle</strong> : dérivée par rapport à une variable, les autres étant fixées.",
      "<strong>Gradient</strong> : vecteur des dérivées partielles.",
      "<strong>Point critique</strong> : point où le gradient est nul."
    ],
    "results": [
      "<strong>Premier ordre.</strong> Si une fonction différentiable admet un extremum local en un point intérieur du domaine, son gradient y est nul.",
      "<strong>Second ordre.</strong> Pour une fonction \\(C^2\\) au voisinage d’un point critique, une Hessienne définie positive donne un minimum local strict ; définie négative, un maximum local strict.",
      "<strong>Dimension 2.</strong> Si \\(H=\\begin{pmatrix}a&b\\\\b&c\\end{pmatrix}\\) au point critique, poser \\(D=ac-b^2\\). Si \\(D\\gt 0\\), le signe de \\(a\\) décide entre minimum et maximum ; si \\(D\\lt 0\\), c’est un point selle ; si \\(D=0\\), le test ne conclut pas."
    ],
    "demos": [
      "<strong>Condition nécessaire.</strong> Si f admet un extremum local en (a,b), alors les fonctions partielles \\(x\\mapsto f(x,b)\\) et \\(y\\mapsto f(a,y)\\) ont un extremum en a et b, donc leurs dérivées sont nulles.",
      "<strong>Classification.</strong> Le DL d’ordre 2 autour d’un point critique est piloté par la forme quadratique associée à la Hessienne."
    ],
    "methods": [
      "Résoudre \\(\\partial f/\\partial x=0\\) et \\(\\partial f/\\partial y=0\\).",
      "Calculer la Hessienne puis son déterminant et le signe d’un coefficient diagonal."
    ]
  }
];
