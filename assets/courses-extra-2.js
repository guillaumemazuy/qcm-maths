ECS_COURSES.push(...[
  {
    "year": "1A",
    "module": "Analyse",
    "theme": "Limites et équivalents",
    "level": 25,
    "title": "Limites, équivalents et croissances comparées",
    "intro": "Chapitre indispensable pour toutes les études de fonctions, les suites et les séries. L’objectif est de reconnaître rapidement le terme dominant.",
    "defs": [
      "<strong>Limite finie</strong> : f(x) tend vers l lorsque x tend vers a si f(x) devient arbitrairement proche de l près de a.",
      "<strong>Équivalent</strong> : \\(f\\sim g\\) en a si \\(f/g\\) tend vers 1.",
      "<strong>Négligeabilité</strong> : \\(f=o(g)\\) si \\(f/g\\) tend vers 0.",
      "<strong>Domination</strong> : \\(f=O(g)\\) si \\(f/g\\) est bornée au voisinage considéré."
    ],
    "results": [
      "<strong>Équivalents en 0.</strong> \\(\\sin x\\sim x\\), \\(\\tan x\\sim x\\), \\(e^x-1\\sim x\\), \\(\\ln(1+x)\\sim x\\) et \\(1-\\cos x\\sim x^2/2\\).",
      "<strong>Croissances à l’infini.</strong> Pour \\(\\alpha\\gt 0\\) fixé, \\(\\ln x=o(x^\\alpha)\\) et \\(x^\\alpha=o(e^x)\\).",
      "<strong>Signe.</strong> Si \\(f\\sim g\\) et \\(g\\) ne s’annule pas dans un voisinage épointé, alors \\(f/g\\) est positif assez près du point : les fonctions y ont le même signe.",
      "<strong>Opérations.</strong> Les équivalents se multiplient et se divisent lorsque les quotients sont définis. Ils ne s’additionnent pas sans contrôle d’une éventuelle annulation des termes dominants."
    ],
    "demos": [
      "<strong>\\(\\sin  x\\sim x\\).</strong> Géométriquement sur le cercle trigonométrique, pour \\(x\\gt 0\\) petit : \\(\\sin  x\\leq x\\leq \\tan  x\\). En divisant par sin x puis en utilisant \\(\\cos  x\\to 1\\), on obtient \\(\\sin  x/x\\to 1\\).",
      "<strong>\\(\\ln  x=o(x^\\alpha )\\).</strong> Poser \\(x=e^t\\). Alors \\(\\ln  x/x^\\alpha =t/e^{\\alpha t}\\), qui tend vers 0 par domination exponentielle."
    ],
    "methods": [
      "Face à une limite : identifier le terme dominant avant de calculer.",
      "Si une différence annule les termes principaux, utiliser un développement limité plutôt qu’un équivalent brut.",
      "Pour racines : rationaliser ou utiliser \\((1+u)^\\alpha =1+\\alpha u+o(u)\\)."
    ]
  },
  {
    "year": "1A",
    "module": "Analyse",
    "theme": "Continuité",
    "level": 26,
    "title": "Continuité, TVI et prolongement",
    "intro": "La continuité permet de garantir l’existence de solutions et de prolonger proprement des fonctions définies par morceaux.",
    "defs": [
      "<strong>Continuité en a</strong> : \\(f(x)\\to f(a)\\) quand \\(x\\to a\\).",
      "<strong>Prolongement par continuité</strong> : définition de f(a) par la limite lorsque la fonction n’était pas définie en a.",
      "<strong>Fonction continue sur un intervalle</strong> : continue en tout point de cet intervalle."
    ],
    "results": [
      "<strong>Opérations.</strong> Sommes, produits et composées de fonctions continues sont continus sur leurs domaines ; pour un quotient, le dénominateur doit rester non nul.",
      "<strong>TVI.</strong> Une fonction continue sur \\([a,b]\\) prend toutes les valeurs entre \\(f(a)\\) et \\(f(b)\\). Si ces deux valeurs sont de signes strictement opposés, une racine existe dans \\(]a,b[\\).",
      "<strong>Segment.</strong> Une fonction continue sur un segment est bornée et atteint ses minimum et maximum. Le caractère fermé et borné du segment est essentiel.",
      "<strong>Bijection monotone.</strong> Une fonction continue strictement monotone sur un intervalle réalise une bijection de cet intervalle sur son image ; sa réciproque est continue."
    ],
    "demos": [
      "<strong>TVI, idée.</strong> L’image d’un intervalle par une fonction continue est un intervalle. Donc toutes les valeurs intermédiaires entre f(a) et f(b) sont atteintes.",
      "<strong>Bornes atteintes.</strong> Sur un segment, la compacité empêche une fonction continue de s’échapper sans atteindre ses valeurs extrêmes."
    ],
    "methods": [
      "Pour prouver une existence de solution \\(f(x)=0\\) : chercher deux valeurs de signes opposés et appliquer le TVI.",
      "Pour un prolongement : calculer la limite au point problématique, puis définir la valeur par cette limite."
    ]
  },
  {
    "year": "1A",
    "module": "Analyse",
    "theme": "Fonctions convexes",
    "level": 27,
    "title": "Convexité, tangentes et inégalités",
    "intro": "La convexité est un outil puissant pour démontrer des inégalités et comprendre la forme globale d’une fonction.",
    "defs": [
      "<strong>Convexité</strong> : \\(f(tx+(1-t)y)\\leq tf(x)+(1-t)f(y)\\) pour \\(t\\in [0,1]\\).",
      "<strong>Concavité</strong> : opposée de la convexité ; f est concave si -f est convexe.",
      "<strong>Point d’inflexion</strong> : point où la convexité change de sens."
    ],
    "results": [
      "<strong>Critère différentiel.</strong> Sur un intervalle, pour une fonction deux fois dérivable, la convexité équivaut à \\(f''\\geq0\\). La concavité équivaut à \\(f''\\leq0\\).",
      "<strong>Tangentes.</strong> Si \\(f\\) est convexe et dérivable, \\(f(x)\\geq f(a)+f'(a)(x-a)\\). Pour une fonction concave, le sens de l’inégalité est inversé.",
      "<strong>Jensen.</strong> Si \\(f\\) est convexe, si \\(t_i\\geq0\\), \\(\\sum_i t_i=1\\) et si les \\(x_i\\) appartiennent à son intervalle de définition : \\[f\\left(\\sum_i t_ix_i\\right)\\leq\\sum_i t_if(x_i).\\]",
      "<strong>Exemples usuels.</strong> L’exponentielle est convexe sur \\(\\mathbb R\\) et le logarithme est concave sur \\(]0,+\\infty[\\)."
    ],
    "demos": [
      "<strong>Tangente sous la courbe.</strong> Pour f convexe dérivable, les pentes des cordes sont croissantes. En faisant tendre une extrémité vers a, on obtient \\(f(x)\\geq f(a)+f'(a)(x-a)\\).",
      "<strong>Critère \\(f''\\geq 0\\).</strong> Si \\(f''\\geq 0\\), alors f’ est croissante, donc les pentes augmentent, ce qui caractérise la convexité."
    ],
    "methods": [
      "Pour prouver \\(e^x\\geq 1+x\\) : utiliser la convexité de exp et la tangente en 0.",
      "Pour prouver \\(\\ln  x\\leq x-1\\) : utiliser la concavité de ln ou étudier \\(x-1-\\ln  x\\)."
    ]
  },
  {
    "year": "1A",
    "module": "Analyse",
    "theme": "Sommes et produits",
    "level": 28,
    "title": "Sommes classiques, télescopage, produits",
    "intro": "Les sommes interviennent partout : suites, probabilités, algèbre et analyse asymptotique.",
    "defs": [
      "<strong>Somme télescopique</strong> : somme où les termes s’annulent en chaîne.",
      "<strong>Somme géométrique</strong> : somme de termes \\(q^k\\).",
      "<strong>Produit</strong> : notation \\(\\prod\\) utilisée pour factorisations et probabilités indépendantes."
    ],
    "results": [
      "<strong>Géométrique finie.</strong> Pour \\(q\\neq1\\), \\[\\sum_{k=0}^nq^k=\\frac{1-q^{n+1}}{1-q}.\\] Pour \\(q=1\\), la somme vaut \\(n+1\\).",
      "<strong>Sommes usuelles.</strong> \\[\\sum_{k=1}^nk=\\frac{n(n+1)}2,\\qquad\\sum_{k=1}^nk^2=\\frac{n(n+1)(2n+1)}6.\\]",
      "<strong>Télescopage.</strong> \\(\\sum_{k=1}^n(v_k-v_{k+1})=v_1-v_{n+1}\\). En particulier : \\[\\sum_{k=1}^n\\frac1{k(k+1)}=1-\\frac1{n+1}.\\]"
    ],
    "demos": [
      "<strong>Somme géométrique.</strong> Multiplier \\(S=1+q+\\ldots +q^n\\) par \\(1-q\\) : les termes intermédiaires s’annulent et \\((1-q)S=1-q^{n+1}\\).",
      "<strong>Télescopage.</strong> \\(1/[k(k+1)]=1/k-1/(k+1)\\). La somme se réduit au premier moins le dernier terme."
    ],
    "methods": [
      "Chercher une écriture \\(u_k=v_k-v_{k+1}\\) pour télescoper.",
      "Pour des sommes polynomiales, connaître les formules jusqu’au degré 2 et savoir estimer l’ordre dominant."
    ]
  },
  {
    "year": "1A",
    "module": "Algèbre",
    "theme": "Complexes",
    "level": 29,
    "title": "Nombres complexes, module, argument, racines",
    "intro": "Les complexes servent en algèbre, trigonométrie, équations polynomiales et diagonalisation.",
    "defs": [
      "<strong>Forme algébrique.</strong> \\(z=a+ib\\), avec \\(a,b\\in\\mathbb R\\) et \\(i^2=-1\\).",
      "<strong>Module.</strong> \\(|z|=\\sqrt{a^2+b^2}\\), la distance de \\(z\\) à l’origine dans le plan complexe.",
      "<strong>Argument.</strong> Pour \\(z\\neq0\\), un réel \\(\\theta\\) tel que \\(z=|z|e^{i\\theta}\\). Deux arguments diffèrent d’un multiple de \\(2\\pi\\).",
      "<strong>Conjugué.</strong> Si \\(z=a+ib\\), son conjugué est \\(\\overline z=a-ib\\)."
    ],
    "results": [
      "<strong>Conjugaison et module.</strong> \\(z\\overline z=|z|^2\\), \\(|zw|=|z||w|\\), et, pour \\(z\\neq0\\), \\(1/z=\\overline z/|z|^2\\).",
      "<strong>Euler et Moivre.</strong> \\(e^{i\\theta}=\\cos\\theta+i\\sin\\theta\\), puis \\((re^{i\\theta})^n=r^ne^{in\\theta}\\) pour tout entier \\(n\\geq0\\).",
      "<strong>Racines de l’unité.</strong> Pour \\(n\\geq1\\), les solutions de \\(z^n=1\\) sont \\[z_k=e^{2ik\\pi/n},\\qquad k=0,\\ldots,n-1.\\]"
    ],
    "demos": [
      "<strong>Module du produit.</strong> \\(|zw|^{2}=zw\\overline{zw}=z\\overline{z}\\cdot w\\overline{w}=|z|^{2}|w|^{2}\\), donc \\(|zw|=|z||w|\\).",
      "<strong>Racines de l’unité.</strong> \\(z^n=1\\) impose \\(|z|^n=1\\) donc \\(|z|=1\\), puis \\(n\\theta =2k\\pi\\)."
    ],
    "methods": [
      "Pour résoudre \\(z^n=a\\) : écrire a sous forme trigonométrique.",
      "Pour calculer \\(1/z\\) : utiliser \\(1/z=\\overline{z}/|z|^{2}\\)."
    ]
  },
  {
    "year": "1A",
    "module": "Algèbre linéaire",
    "theme": "Systèmes linéaires",
    "level": 30,
    "title": "Méthode de Gauss et structure des solutions",
    "intro": "La méthode de Gauss est l’outil de base pour résoudre les systèmes, calculer les rangs et inverser les matrices.",
    "defs": [
      "<strong>Système compatible</strong> : système admettant au moins une solution.",
      "<strong>Système homogène</strong> : système \\(AX=0\\).",
      "<strong>Pivot</strong> : coefficient non nul utilisé pour éliminer les inconnues suivantes."
    ],
    "results": [
      "<strong>Compatibilité.</strong> Le système \\(AX=B\\) possède une solution si et seulement si \\(\\operatorname{rg}(A)=\\operatorname{rg}(A\\mid B)\\), où le second rang porte sur la matrice augmentée.",
      "<strong>Unicité.</strong> Pour une matrice carrée inversible \\(A\\), le système admet l’unique solution \\(X=A^{-1}B\\).",
      "<strong>Structure affine.</strong> Si \\(X_0\\) est une solution particulière, toutes les solutions s’écrivent \\(X=X_0+H\\), avec \\(H\\in\\ker A\\).",
      "<strong>Dimension.</strong> Pour \\(n\\) inconnues, l’espace des solutions de \\(AX=0\\) a pour dimension \\(n-\\operatorname{rg}(A)\\). Ce nombre compte les paramètres libres."
    ],
    "demos": [
      "<strong>Structure affine.</strong> Si \\(X_{0}\\) est une solution de \\(AX=B\\), alors \\(A(X-X_{0})=0\\). Donc toute solution s’écrit \\(X_{0}+H\\) avec \\(H\\in \\operatorname{Ker}(A)\\).",
      "<strong>Dimension du noyau.</strong> C’est le théorème du rang appliqué à l’application linéaire associée à A."
    ],
    "methods": [
      "Appliquer Gauss en gardant les opérations sur les lignes propres.",
      "Identifier les variables pivots et les variables libres."
    ]
  },
  {
    "year": "2A",
    "module": "Analyse",
    "theme": "Séries de fonctions",
    "level": 31,
    "title": "Convergence simple, uniforme, normale",
    "intro": "Les séries de fonctions permettent de manipuler des sommes dépendant d’une variable. La convergence uniforme justifie les passages à la limite.",
    "defs": [
      "<strong>Convergence simple</strong> : pour chaque x fixé, \\(f_n(x)\\) converge.",
      "<strong>Convergence uniforme</strong> : \\(sup_x |f_n(x)-f(x)|\\) tend vers 0.",
      "<strong>Convergence normale</strong> d’une série : \\(\\sum  sup_x |u_n(x)|\\) converge."
    ],
    "results": [
      "<strong>Continuité.</strong> Une limite uniforme de fonctions continues sur un même domaine est continue sur ce domaine. La convergence simple ne suffit pas.",
      "<strong>Weierstrass.</strong> Si \\(|u_n(x)|\\leq M_n\\) pour tout \\(x\\) du domaine et si \\(\\sum M_n\\) converge, alors la série converge normalement, donc uniformément et absolument en chaque point.",
      "<strong>Intégration.</strong> Si les termes sont continus sur \\([a,b]\\) et si leur série converge uniformément sur ce segment, on peut intégrer terme à terme.",
      "<strong>Dérivation.</strong> Pour des termes \\(C^1\\) sur un segment, la convergence de la série en un point et la convergence uniforme de la série des dérivées permettent de dériver la somme terme à terme."
    ],
    "demos": [
      "<strong>Continuité de la limite uniforme.</strong> Écrire \\(|f(x)-f(a)|\\leq |f-f_n|(x)+|f_n(x)-f_n(a)|+|f_n(a)-f(a)|\\) et choisir n puis x.",
      "<strong>Normale ⇒ uniforme.</strong> Le critère de Weierstrass majore la queue de série par une queue numérique convergente."
    ],
    "methods": [
      "Chercher un majorant indépendant de x pour utiliser Weierstrass.",
      "Pour montrer que la convergence n’est pas uniforme : regarder le sup ou choisir une suite \\(x_n\\) dépendant de n."
    ]
  },
  {
    "year": "2A",
    "module": "Analyse",
    "theme": "Optimisation à plusieurs variables",
    "level": 32,
    "title": "Extrema libres et sous contrainte",
    "intro": "L’optimisation multivariée intervient dans les modèles économiques et les sujets de concours avec contraintes.",
    "defs": [
      "<strong>Gradient</strong> : vecteur des dérivées partielles premières.",
      "<strong>Hessienne</strong> : matrice des dérivées secondes.",
      "<strong>Contrainte</strong> : condition du type \\(g(x,y)=0\\) imposée aux variables."
    ],
    "results": [
      "<strong>Extremum libre.</strong> À un extremum intérieur d’une fonction différentiable, \\(\\nabla f=0\\). La Hessienne peut ensuite classifier les points critiques si le test est non dégénéré.",
      "<strong>Lagrange.</strong> Pour une contrainte \\(g=0\\), avec \\(f,g\\) de classe \\(C^1\\) et \\(\\nabla g\\neq0\\) au point étudié, un extremum local contraint satisfait \\(\\nabla f=\\lambda\\nabla g\\) pour un réel \\(\\lambda\\).",
      "<strong>Convexité globale.</strong> Sur un domaine convexe, tout minimum local d’une fonction convexe est global ; tout maximum local d’une fonction concave est global.",
      "<strong>Existence.</strong> Sur un ensemble admissible non vide et compact, une fonction continue atteint un minimum et un maximum. Cette étape justifie ensuite la comparaison des candidats."
    ],
    "demos": [
      "<strong>Condition du gradient nul.</strong> Restreindre f aux droites passant par le point : chaque fonction d’une variable a un extremum, donc chaque dérivée directionnelle est nulle.",
      "<strong>Lagrange.</strong> À l’optimum sous contrainte, le gradient de f est orthogonal à la tangente de la contrainte, donc parallèle au gradient de g."
    ],
    "methods": [
      "Extremum libre : résoudre \\(\\nabla f=0\\) puis classifier avec la Hessienne.",
      "Sous contrainte : écrire le système de Lagrange et vérifier les points obtenus."
    ]
  },
  {
    "year": "2A",
    "module": "Algèbre linéaire",
    "theme": "Diagonalisation avancée",
    "level": 33,
    "title": "Polynômes annulateurs et diagonalisation",
    "intro": "Les polynômes annulateurs donnent des critères rapides pour comprendre les valeurs propres et la diagonalisabilité.",
    "defs": [
      "<strong>Polynôme annulateur</strong> : P tel que \\(P(A)=0\\).",
      "<strong>Polynôme scindé à racines simples</strong> : produit de facteurs linéaires distincts.",
      "<strong>Sous-espace stable</strong> : F tel que \\(A(F)\\subset F\\)."
    ],
    "results": [
      "<strong>Valeurs propres.</strong> Si \\(P(A)=0\\), toute valeur propre \\(\\lambda\\) vérifie \\(P(\\lambda)=0\\). La réciproque est fausse pour un annulateur quelconque.",
      "<strong>Diagonalisation.</strong> Un annulateur scindé à racines simples sur le corps considéré entraîne la diagonalisation sur ce corps.",
      "<strong>Projecteurs.</strong> Si \\(A^2=A\\), le polynôme \\(X(X-1)\\) est annulateur, donc \\(A\\) est diagonalisable et ses valeurs propres appartiennent à \\(\\{0,1\\}\\).",
      "<strong>Symétries.</strong> Sur \\(\\mathbb R\\) ou \\(\\mathbb C\\), si \\(A^2=I\\), le polynôme \\((X-1)(X+1)\\) annule \\(A\\). Elle est diagonalisable et ses valeurs propres appartiennent à \\(\\{-1,1\\}\\)."
    ],
    "demos": [
      "<strong>Valeur propre et annulateur.</strong> Si \\(Av=\\lambda v\\), alors \\(P(A)v=P(\\lambda )v\\). Si \\(P(A)=0\\), alors \\(P(\\lambda )v=0\\), donc \\(P(\\lambda )=0\\).",
      "<strong>Projecteur.</strong> \\(P(X)=X(X-1)\\) annule A si \\(A^{2}=A\\). Ses racines sont simples, donc A est diagonalisable."
    ],
    "methods": [
      "Avant de calculer tout le polynôme caractéristique, chercher une relation simple : \\(A^{2}=A, A^{2}=I, A^p=0\\).",
      "Utiliser les polynômes annulateurs pour limiter les valeurs propres possibles."
    ]
  },
  {
    "year": "2A",
    "module": "Probabilités",
    "theme": "Couples de variables aléatoires",
    "level": 34,
    "title": "Lois conjointes, marginales, indépendance",
    "intro": "Les couples de variables modélisent deux grandeurs simultanées et permettent de traiter covariance, corrélation et indépendance.",
    "defs": [
      "<strong>Loi conjointe</strong> : probabilités \\(P(X=x,Y=y)\\).",
      "<strong>Loi marginale</strong> : loi de X ou de Y obtenue en sommant/intégrant l’autre variable.",
      "<strong>Covariance</strong> : \\(\\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y)\\)."
    ],
    "results": [
      "<strong>Marginales discrètes.</strong> \\(\\mathbb P(X=x)=\\sum_y\\mathbb P(X=x,Y=y)\\), et de même pour \\(Y\\).",
      "<strong>Indépendance.</strong> Pour un couple discret, elle équivaut à \\(\\mathbb P(X=x,Y=y)=\\mathbb P(X=x)\\mathbb P(Y=y)\\) pour toutes les valeurs possibles.",
      "<strong>Variance d’une somme.</strong> Avec des moments d’ordre 2 finis : \\[\\operatorname{Var}(X+Y)=\\operatorname{Var}(X)+\\operatorname{Var}(Y)+2\\operatorname{Cov}(X,Y).\\]",
      "<strong>Produit et covariance.</strong> L’indépendance entraîne la factorisation des espérances de produits de fonctions intégrables des variables. Elle implique une covariance nulle si les moments d’ordre 2 sont finis ; la réciproque est fausse."
    ],
    "demos": [
      "<strong>Variance d’une somme.</strong> Développer \\(E[(X+Y-E(X)-E(Y))^{2}]\\). Le terme croisé donne \\(2Cov(X,Y)\\).",
      "<strong>Indépendance ⇒ covariance nulle.</strong> Si X,Y indépendantes, \\(E(XY)=E(X)E(Y)\\), donc \\(\\operatorname{Cov}(X,Y)=0\\)."
    ],
    "methods": [
      "À partir d’un tableau conjoint : sommer les lignes/colonnes pour les marginales.",
      "Pour tester l’indépendance : comparer chaque case au produit des marginales."
    ]
  },
  {
    "year": "2A",
    "module": "Probabilités",
    "theme": "Chaînes de Markov finies",
    "level": 35,
    "title": "Matrices de transition et régimes stationnaires",
    "intro": "Les chaînes de Markov décrivent des évolutions aléatoires où le futur dépend seulement de l’état présent.",
    "defs": [
      "<strong>Chaîne de Markov</strong> : suite d’états aléatoires avec propriété de mémoire courte.",
      "<strong>Matrice de transition</strong> : matrice P dont le coefficient \\(p_ij\\) est la probabilité de passer de i à j.",
      "<strong>Distribution stationnaire</strong> : vecteur \\(\\pi\\) tel que \\(\\pi P=\\pi\\)."
    ],
    "results": [
      "<strong>Transition.</strong> Avec la convention des vecteurs lignes, \\(p_{ij}\\geq0\\), \\(\\sum_jp_{ij}=1\\) et \\(\\mu_n=\\mu_0P^n\\).",
      "<strong>Stationnarité.</strong> Une distribution \\(\\pi\\) vérifie \\(\\pi P=\\pi\\), \\(\\pi_i\\geq0\\) et \\(\\sum_i\\pi_i=1\\). C’est un vecteur propre à gauche de valeur propre 1, normalisé en probabilité.",
      "<strong>Convergence.</strong> Pour une chaîne finie irréductible, la distribution stationnaire est unique. Si la chaîne est aussi apériodique, les lois convergent vers cette distribution quelle que soit la loi initiale."
    ],
    "demos": [
      "<strong>Stationnarité.</strong> Si la loi initiale est \\(\\pi\\) et \\(\\pi P=\\pi\\), alors après une transition la loi reste \\(\\pi\\) ; par récurrence, elle reste \\(\\pi\\) à tout rang.",
      "<strong>Somme des lignes.</strong> Depuis un état i, la chaîne doit aller vers l’un des états possibles, donc la somme des probabilités de transition vaut 1."
    ],
    "methods": [
      "Pour trouver \\(\\pi\\) : résoudre \\(\\pi P=\\pi\\) avec la contrainte somme des composantes \\(=1\\).",
      "Pour n étapes : diagonaliser P si possible, ou exploiter une relation de récurrence."
    ]
  },
  {
    "year": "2A",
    "module": "Analyse",
    "theme": "Équations différentielles",
    "level": 36,
    "title": "Équations différentielles linéaires",
    "intro": "Les équations différentielles linéaires apparaissent en dynamique, probabilités continues et modèles économiques.",
    "defs": [
      "<strong>Équation linéaire du premier ordre</strong> : \\(y'+a(x)y=b(x)\\).",
      "<strong>Équation homogène</strong> : second membre nul.",
      "<strong>Solution particulière</strong> : une solution de l’équation complète."
    ],
    "results": [
      "<strong>Premier ordre homogène.</strong> Sur un intervalle où \\(a\\) est continue, si \\(A\\) est une primitive de \\(a\\), les solutions de \\(y'+a(x)y=0\\) sont \\(y(x)=Ce^{-A(x)}\\).",
      "<strong>Équation complète.</strong> La solution générale d’une équation linéaire est une solution particulière plus la solution générale de l’équation homogène.",
      "<strong>Facteur intégrant.</strong> Pour \\(y'+a(x)y=b(x)\\), avec coefficients continus : \\[(e^{A(x)}y(x))'=e^{A(x)}b(x).\\] Il reste à intégrer, puis à utiliser la condition initiale.",
      "<strong>Second ordre harmonique.</strong> Pour \\(\\omega\\neq0\\), les solutions réelles de \\(y''+\\omega^2y=0\\) sont \\(C_1\\cos(\\omega x)+C_2\\sin(\\omega x)\\). Pour \\(\\omega=0\\), elles sont affines."
    ],
    "demos": [
      "<strong>Premier ordre homogène.</strong> Si \\(A'=a\\), alors la règle du produit donne \\((e^Ay)'=e^A(y'+ay)\\). L’équation homogène implique que ce produit est constant, donc \\(y=Ce^{-A}\\). Réciproquement, la dérivation de cette expression vérifie l’équation. Cette preuve inclut la solution nulle sans division par \\(y\\).",
      "<strong>Équation harmonique.</strong> Pour \\(\\omega\\neq0\\), le polynôme caractéristique \\(r^2+\\omega^2\\) possède les racines \\(i\\omega\\) et \\(-i\\omega\\). Les solutions réelles sont donc \\(C_1\\cos(\\omega x)+C_2\\sin(\\omega x)\\). Si \\(\\omega=0\\), l’équation devient \\(y''=0\\), donc les solutions sont affines."
    ],
    "methods": [
      "Pour \\(y'+ay=b\\) : facteur intégrant \\(e^{\\int a}\\).",
      "Pour coefficients constants : résoudre l’équation caractéristique."
    ]
  }
]);
