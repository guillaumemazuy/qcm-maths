ECS_COURSES.push(...[
  {
    "year": "1A",
    "module": "Analyse",
    "theme": "Fonctions usuelles",
    "level": 17,
    "title": "Exponentielle, logarithme, puissances",
    "intro": "Les fonctions usuelles sont omniprésentes dans les limites, dérivées, équivalents, probabilités continues et modèles économiques.",
    "defs": [
      "<strong>Exponentielle</strong> : fonction dérivable vérifiant \\(\\exp '=\\exp\\) et \\(\\exp (0)=1\\).",
      "<strong>Logarithme népérien</strong> : réciproque de l’exponentielle sur \\(\\mathbb{R}_{+}^{*}\\), noté ln.",
      "<strong>Puissance réelle</strong> : pour \\(x\\gt 0, x^\\alpha =\\exp (\\alpha  \\ln  x)\\)."
    ],
    "results": [
      "<strong>Identités.</strong> Pour tous réels \\(a,b\\), \\(e^{a+b}=e^ae^b\\). Pour \\(a,b\\gt 0\\), \\(\\ln(ab)=\\ln a+\\ln b\\).",
      "<strong>Croissances comparées.</strong> Pour \\(\\alpha\\gt 0\\) fixé, lorsque \\(x\\to+\\infty\\), \\[\\frac{\\ln x}{x^\\alpha}\\to0,\\qquad\\frac{x^\\alpha}{e^x}\\to0.\\]",
      "<strong>Dérivées composées.</strong> Pour \\(u\\) dérivable, \\((e^u)'=u'e^u\\). Si \\(u\\gt 0\\), \\((\\ln u)'=u'/u\\) et \\((u^\\alpha)'=\\alpha u'u^{\\alpha-1}\\).",
      "<strong>Équivalents en 0.</strong> \\(\\ln(1+x)\\sim x\\) et \\(e^x-1\\sim x\\). Le logarithme est pris là où \\(1+x\\gt 0\\)."
    ],
    "demos": [
      "<strong>Dérivée du logarithme.</strong> Comme ln est la réciproque de exp, si \\(y=\\ln  x\\) alors \\(x=e^y\\). En dérivant implicitement, \\(1=e^y y\\)’, donc \\(y'=1/e^y=1/x\\).",
      "<strong>Croissance comparée \\(\\ln  x / x^\\alpha\\).</strong> Poser \\(x=e^t\\). Alors \\(\\ln  x/x^\\alpha =t/e^{\\alpha t}\\), qui tend vers 0 par domination exponentielle."
    ],
    "methods": [
      "Transformer les puissances variables avec exp et ln : \\(x^x=\\exp (x\\ln x)\\).",
      "Pour comparer logarithme, puissance et exponentielle, poser \\(x=e^t\\) ou utiliser les croissances comparées."
    ]
  },
  {
    "year": "1A",
    "module": "Analyse",
    "theme": "Dérivation et études de fonctions",
    "level": 18,
    "title": "Variations, extrema et convexité",
    "intro": "Chapitre central pour les études de fonctions et les inégalités. Il relie signe de la dérivée, variations et géométrie de la courbe.",
    "defs": [
      "<strong>Point critique</strong> : point intérieur où \\(f'(a)=0\\).",
      "<strong>Maximum local</strong> : \\(f(x)\\leq f(a)\\) au voisinage de a ; minimum local : \\(f(x)\\geq f(a)\\).",
      "<strong>Convexité</strong> : f est convexe si ses pentes sont croissantes ; si f est \\(C^{2}, f''\\geq 0\\)."
    ],
    "results": [
      "<strong>Variations.</strong> Sur un intervalle où \\(f\\) est dérivable, \\(f'\\gt 0\\) implique la stricte croissance, et \\(f'\\lt 0\\) la stricte décroissance.",
      "<strong>Extremum.</strong> Un passage de \\(f'\\) de positif à négatif donne un maximum local ; de négatif à positif, un minimum local, avec la continuité de \\(f\\) au point étudié.",
      "<strong>Tangente.</strong> Si \\(f\\) est convexe et dérivable sur un intervalle, alors pour tous \\(a,x\\) de cet intervalle : \\[f(x)\\geq f(a)+f'(a)(x-a).\\]",
      "<strong>Corde.</strong> La convexité s’écrit \\(f(tx+(1-t)y)\\leq tf(x)+(1-t)f(y)\\) pour \\(t\\in[0,1]\\)."
    ],
    "demos": [
      "<strong>Signe de f’ et variations.</strong> Par le théorème des accroissements finis, \\(f(b)-f(a)=f'(c)(b-a)\\). Si \\(f'\\geq 0\\) et \\(b\\gt a\\), alors \\(f(b)\\geq f(a)\\).",
      "<strong>Tangente sous la courbe.</strong> Pour f convexe dérivable, les pentes des cordes sont croissantes ; en faisant tendre un point vers a, on obtient \\(f(x)\\geq f(a)+f'(a)(x-a)\\)."
    ],
    "methods": [
      "Pour une étude complète : domaine, limites, dérivée, signe, variations, convexité, asymptotes.",
      "Pour une inégalité : poser une fonction auxiliaire et étudier ses variations ou sa convexité."
    ]
  },
  {
    "year": "1A",
    "module": "Analyse",
    "theme": "Intégration sur un segment",
    "level": 19,
    "title": "Primitives, intégration par parties, changement de variable",
    "intro": "L’intégration sur un segment prépare les intégrales impropres, les densités de probabilité et les calculs d’espérance.",
    "defs": [
      "<strong>Primitive</strong> : F est une primitive de f si \\(F'=f\\).",
      "<strong>Intégrale sur [a,b]</strong> : aire algébrique, calculée par F(b)-F(a) si F est une primitive.",
      "<strong>Fonction continue par morceaux</strong> : fonction intégrable avec un nombre fini de discontinuités simples."
    ],
    "results": [
      "<strong>Linéarité et positivité.</strong> Pour des fonctions continues sur \\([a,b]\\), avec \\(a\\leq b\\), l’intégrale est linéaire et \\(f\\geq0\\) implique \\(\\int_a^bf(x)\\,dx\\geq0\\).",
      "<strong>Intégration par parties.</strong> Pour \\(u,v\\) de classe \\(C^1\\) sur \\([a,b]\\) : \\[\\int_a^b u(x)v'(x)\\,dx=[u(x)v(x)]_a^b-\\int_a^b u'(x)v(x)\\,dx.\\]",
      "<strong>Changement de variable.</strong> Si \\(f\\) est continue et \\(\\varphi\\) de classe \\(C^1\\), avec des domaines compatibles : \\[\\int_\\alpha^\\beta f(\\varphi(t))\\varphi'(t)\\,dt=\\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)}f(u)\\,du.\\]"
    ],
    "demos": [
      "<strong>IPP.</strong> Partir de \\((uv)'=u'v+uv\\)’. En intégrant entre a et b, on isole \\(\\int u'v\\).",
      "<strong>Positivité.</strong> L’intégrale d’une fonction positive est limite de sommes de Riemann positives."
    ],
    "methods": [
      "Produit avec polynôme × exponentielle/trigonométrique : penser IPP.",
      "Présence de \\(u'/u\\) ou \\(\\varphi 'f(\\varphi )\\) : penser changement de variable."
    ]
  },
  {
    "year": "1A",
    "module": "Algèbre linéaire",
    "theme": "Déterminants",
    "level": 20,
    "title": "Déterminants et critères d’inversibilité",
    "intro": "Le déterminant donne un critère rapide d’inversibilité et intervient dans la réduction, les systèmes et les changements de base.",
    "defs": [
      "<strong>Déterminant</strong> : forme multilinéaire alternée des colonnes, normalisée par \\(\\det (I)=1\\).",
      "<strong>Matrice singulière</strong> : matrice carrée non inversible, donc de déterminant nul.",
      "<strong>Cofacteur</strong> : terme signé utilisé dans le développement selon une ligne ou colonne."
    ],
    "results": [
      "<strong>Inversibilité.</strong> Pour une matrice carrée \\(A\\), \\(\\det A\\neq0\\) si et seulement si \\(A\\) est inversible.",
      "<strong>Produit et transposition.</strong> Pour des matrices de même taille, \\(\\det(AB)=\\det A\\det B\\), et \\(\\det(A^{\\mathsf T})=\\det A\\).",
      "<strong>Triangulaire.</strong> Le déterminant d’une matrice triangulaire est le produit de ses coefficients diagonaux : \\(\\det A=\\prod_{i=1}^n a_{ii}\\).",
      "<strong>Opérations.</strong> Un échange de lignes change le signe du déterminant ; multiplier une ligne par \\(c\\) le multiplie par \\(c\\) ; ajouter à une ligne un multiple d’une autre le conserve."
    ],
    "demos": [
      "<strong>Triangulaire.</strong> Dans le développement du déterminant, tous les produits contenant un terme sous la diagonale nul disparaissent ; il reste le produit diagonal.",
      "<strong>Inversibilité.</strong> Si A est inversible, \\(\\det (A)\\det (A^{-1})=\\det (I)=1\\). Donc \\(\\det (A)\\ne 0\\). Réciproquement, \\(\\det (A)\\ne 0\\) implique rang maximal."
    ],
    "methods": [
      "Créer des zéros avec des opérations élémentaires sur les lignes avant de développer.",
      "Pour une matrice triangulaire ou diagonale : lire directement le produit diagonal."
    ]
  },
  {
    "year": "1A",
    "module": "Probabilités",
    "theme": "Variables aléatoires finies",
    "level": 21,
    "title": "Espérance, variance, loi de Bernoulli et binomiale",
    "intro": "Les variables aléatoires finies introduisent les calculs d’espérance et de variance, nécessaires pour toute la suite du programme.",
    "defs": [
      "<strong>Variable aléatoire finie.</strong> Une application de l’univers vers un ensemble fini de valeurs réelles. Sa loi associe une probabilité à chacune de ces valeurs.",
      "<strong>Espérance.</strong> Si les valeurs possibles sont \\(x_1,\\ldots,x_m\\), alors \\[\\mathbb E(X)=\\sum_{i=1}^mx_i\\mathbb P(X=x_i).\\]",
      "<strong>Variance.</strong> \\(\\operatorname{Var}(X)=\\mathbb E((X-\\mathbb E(X))^2)\\). Elle est positive ou nulle et mesure une dispersion au carré."
    ],
    "results": [
      "<strong>Linéarité.</strong> Pour des variables finies et des réels \\(a,b\\), \\(\\mathbb E(aX+bY)=a\\mathbb E(X)+b\\mathbb E(Y)\\), sans indépendance.",
      "<strong>König-Huygens.</strong> \\[\\operatorname{Var}(X)=\\mathbb E(X^2)-\\mathbb E(X)^2.\\] En particulier, \\(\\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X)\\).",
      "<strong>Bernoulli.</strong> Si \\(X\\) vaut 1 avec probabilité \\(p\\) et 0 sinon, son espérance vaut \\(p\\) et sa variance \\(p(1-p)\\).",
      "<strong>Binomiale.</strong> Pour \\(X\\sim\\mathcal B(n,p)\\), \\(\\mathbb E(X)=np\\) et \\(\\operatorname{Var}(X)=np(1-p)\\). Cette loi suppose des essais indépendants, de même probabilité de succès."
    ],
    "demos": [
      "<strong>Koenig-Huygens.</strong> Développer \\(E((X-E(X))^{2})=E(X^{2}-2XE(X)+E(X)^{2})=E(X^{2})-E(X)^{2}\\).",
      "<strong>Binomiale.</strong> Écrire X comme somme de n variables de Bernoulli indépendantes et utiliser linéarité de l’espérance et additivité des variances indépendantes."
    ],
    "methods": [
      "Pour calculer une espérance : préférer la linéarité si X est une somme d’indicatrices.",
      "Pour reconnaître une binomiale : nombre fixé d’essais indépendants, deux issues, probabilité de succès constante."
    ]
  },
  {
    "year": "2A",
    "module": "Analyse",
    "theme": "Séries entières",
    "level": 22,
    "title": "Rayon de convergence et somme",
    "intro": "Les séries entières généralisent les polynômes et permettent de manipuler fonctions usuelles, dérivation et intégration terme à terme.",
    "defs": [
      "<strong>Série entière.</strong> Une série de la forme \\(\\sum_{n=0}^{\\infty}a_nx^n\\), avec des coefficients fixés.",
      "<strong>Rayon.</strong> Un nombre \\(R\\in[0,+\\infty]\\) tel que la série converge absolument pour \\(|x|\\lt R\\) et diverge pour \\(|x|\\gt R\\).",
      "<strong>Intervalle de convergence.</strong> L’intervalle ouvert \\(]-R,R[\\), complété éventuellement par une ou deux bornes après leur étude séparée, lorsque \\(0\\lt R\\lt \\infty\\)."
    ],
    "results": [
      "<strong>Rayon par quotient.</strong> Si les coefficients sont non nuls à partir d’un rang et si \\(\\left|a_{n+1}/a_n\\right|\\to L\\), alors \\(R=1/L\\), avec \\(R=+\\infty\\) pour \\(L=0\\), et \\(R=0\\) pour \\(L=+\\infty\\).",
      "<strong>Calcul terme à terme.</strong> À l’intérieur du rayon, les séries dérivée et intégrée gardent le même rayon, et donnent la dérivée et une primitive de la somme. Les bornes se réétudient séparément.",
      "<strong>Géométrique.</strong> \\[\\sum_{n=0}^{\\infty}x^n=\\frac1{1-x},\\qquad |x|\\lt 1.\\]",
      "<strong>Exponentielle.</strong> \\[\\sum_{n=0}^{\\infty}\\frac{x^n}{n!}=e^x,\\qquad x\\in\\mathbb R.\\]"
    ],
    "demos": [
      "<strong>Rayon par d’Alembert.</strong> Pour \\(x\\neq0\\) et des coefficients finalement non nuls, le quotient des valeurs absolues vaut \\(|x|\\,|a_{n+1}/a_n|\\). S’il tend vers \\(|x|L\\lt 1\\), il y a convergence absolue ; s’il tend vers une valeur supérieure à 1, le terme ne tend pas vers 0. Le seuil est donc \\(R=1/L\\), avec les conventions indiquées.",
      "<strong>Dérivation dans le rayon.</strong> Pour \\(0\\lt r\\lt \\rho\\lt R\\), la convergence absolue en \\(\\rho\\) contrôle les coefficients. Le facteur \\(n(r/\\rho)^{n-1}\\), sommable, permet de majorer les dérivées sur \\([-r,r]\\). La série dérivée y converge uniformément ; le théorème de dérivation terme à terme s’applique. La simple convergence uniforme de la série initiale ne suffirait pas."
    ],
    "methods": [
      "Toujours étudier les bornes séparément : le rayon ne décide pas de \\(x=\\pm R\\).",
      "Pour sommer : ramener à une série géométrique puis dériver/intégrer si nécessaire."
    ]
  },
  {
    "year": "2A",
    "module": "Algèbre linéaire",
    "theme": "Espaces euclidiens",
    "level": 23,
    "title": "Produit scalaire, orthogonalité, projections",
    "intro": "Les espaces euclidiens ajoutent la géométrie à l’algèbre linéaire : normes, angles, orthogonalité et projections.",
    "defs": [
      "<strong>Produit scalaire réel.</strong> Une forme bilinéaire symétrique \\(\\langle\\cdot,\\cdot\\rangle\\), positive et définie : \\(\\langle x,x\\rangle\\geq0\\), avec égalité seulement pour \\(x=0\\).",
      "<strong>Norme associée.</strong> \\[\\|x\\|=\\sqrt{\\langle x,x\\rangle}.\\]",
      "<strong>Orthogonalité.</strong> Les vecteurs \\(x\\) et \\(y\\) sont orthogonaux si \\(\\langle x,y\\rangle=0\\), ce qu’on note \\(x\\perp y\\).",
      "<strong>Projection orthogonale.</strong> Le projeté sur \\(F\\) est l’unique \\(p_F(x)\\in F\\) tel que \\(x-p_F(x)\\in F^\\perp\\)."
    ],
    "results": [
      "<strong>Cauchy-Schwarz.</strong> \\[|\\langle x,y\\rangle|\\leq\\|x\\|\\,\\|y\\|.\\] L’égalité a lieu si et seulement si les deux vecteurs sont liés.",
      "<strong>Pythagore.</strong> Si \\(\\langle x,y\\rangle=0\\), alors \\(\\|x+y\\|^2=\\|x\\|^2+\\|y\\|^2\\).",
      "<strong>Décomposition orthogonale.</strong> Dans un espace euclidien de dimension finie, \\(E=F\\oplus F^\\perp\\). Tout sous-espace possède une base orthonormée.",
      "<strong>Projection sur une droite.</strong> Pour \\(u\\neq0\\), \\[p_{\\operatorname{Vect}(u)}(x)=\\frac{\\langle x,u\\rangle}{\\langle u,u\\rangle}u.\\]"
    ],
    "demos": [
      "<strong>Cauchy-Schwarz.</strong> Si \\(y=0\\), l’inégalité est immédiate. Sinon, pour tout réel \\(t\\), \\(0\\leq\\|x+ty\\|^2=\\|y\\|^2t^2+2\\langle x,y\\rangle t+\\|x\\|^2\\). Ce trinôme a un coefficient dominant strictement positif et reste positif ou nul : son discriminant est donc négatif ou nul. Il vient \\(4\\langle x,y\\rangle^2\\leq4\\|x\\|^2\\|y\\|^2\\), puis l’inégalité en prenant les racines.",
      "<strong>Pythagore.</strong> La bilinéarité et la symétrie donnent \\(\\|x+y\\|^2=\\|x\\|^2+2\\langle x,y\\rangle+\\|y\\|^2\\). Si les vecteurs sont orthogonaux, le terme croisé s’annule. Cela démontre la formule et explique pourquoi l’hypothèse d’orthogonalité est nécessaire."
    ],
    "methods": [
      "Pour projeter sur une droite dirigée par u : \\(proj_F(x)=\\langle x,u\\rangle /\\langle u,u\\rangle  \\cdot  u\\).",
      "Pour une base orthonormée : appliquer Gram-Schmidt."
    ]
  },
  {
    "year": "2A",
    "module": "Probabilités",
    "theme": "Convergences et approximations",
    "level": 24,
    "title": "Markov, Tchebychev, loi faible des grands nombres",
    "intro": "Ces outils permettent de contrôler les fluctuations aléatoires et de justifier les approximations statistiques.",
    "defs": [
      "<strong>Convergence en probabilité</strong> : \\(X_n\\to X\\) si \\(P(|X_n-X|\\gt \\varepsilon )\\to 0\\) pour tout \\(\\varepsilon \\gt 0\\).",
      "<strong>Moyenne empirique</strong> : moyenne de variables aléatoires indépendantes de même loi.",
      "<strong>Estimateur</strong> : variable aléatoire servant à approcher un paramètre inconnu."
    ],
    "results": [
      "<strong>Markov.</strong> Pour \\(X\\geq0\\) intégrable et \\(a\\gt 0\\) : \\[\\mathbb P(X\\geq a)\\leq\\frac{\\mathbb E(X)}a.\\]",
      "<strong>Tchebychev.</strong> Si \\(X\\) possède une variance finie, alors pour \\(a\\gt 0\\) : \\[\\mathbb P(|X-\\mathbb E(X)|\\geq a)\\leq\\frac{\\operatorname{Var}(X)}{a^2}.\\]",
      "<strong>Loi faible des grands nombres.</strong> Pour des variables indépendantes de même loi, d’espérance \\(m\\) et de variance finie \\(\\sigma^2\\), la moyenne \\(\\overline X_n\\) vérifie \\(\\mathbb P(|\\overline X_n-m|\\geq\\varepsilon)\\leq\\sigma^2/(n\\varepsilon^2)\\to0\\), pour tout \\(\\varepsilon\\gt 0\\)."
    ],
    "demos": [
      "<strong>Markov.</strong> Comme \\(X\\geq a\\cdot 1_{X\\geq a}\\), en prenant l’espérance : \\(E(X)\\geq aP(X\\geq a)\\).",
      "<strong>Tchebychev.</strong> Appliquer Markov à la variable positive \\((X-E(X))^{2}\\) avec le seuil \\(a^{2}\\)."
    ],
    "methods": [
      "Pour majorer une probabilité d’écart à la moyenne : penser Tchebychev.",
      "Pour une moyenne de n variables iid : calculer espérance et variance, puis appliquer Tchebychev."
    ]
  }
]);
