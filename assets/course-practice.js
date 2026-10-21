const COURSE_PRACTICE = {
  25: {
    examples: [
      {title:'Limite avec racine', statement:"Calculer \\(\\lim  n(\\sqrt{n^{2}+3n}-n)\\).", correction:"On factorise n dans la racine : \\(\\sqrt{n^{2}+3n}=n\\sqrt{1+3/n}\\). Donc \\(n(\\sqrt{n^{2}+3n}-n)=n^{2}(\\sqrt{1+3/n}-1)\\). Or \\(\\sqrt{1+u}=1+u/2+o(u)\\), donc \\(\\sqrt{1+3/n}-1\\sim 3/(2n). L\\)’expression est équivalente à \\(3n/2\\) et tend vers \\(+\\infty\\)."},
      {title:'Équivalent avec logarithme', statement:"Trouver un équivalent de \\(\\ln (1+2x)-2x\\) en 0.", correction:"\\(\\ln (1+u)=u-u^{2}/2+o(u^{2})\\). Avec \\(u=2x\\) : \\(\\ln (1+2x)=2x-2x^{2}+o(x^{2})\\). Donc \\(\\ln (1+2x)-2x\\sim -2x^{2}\\)."}
    ],
    exercises: [
      "Calculer \\(lim_{x\\to 0} (e^{x^{2}}-1)/x^{2}\\).",
      "Déterminer la limite de \\(n^{2}(\\ln (1+1/n)-1/n)\\).",
      'Trouver un équivalent de 1-cos(3x) en 0.'
    ]
  },
  26: {
    examples: [
      {title:'Prolongement par continuité', statement:"Définir \\(f(0)\\) pour prolonger \\(f(x)=(e^x-1)/x\\) en 0.", correction:"On utilise \\(e^x=1+x+o(x)\\). Alors \\((e^x-1)/x=(x+o(x))/x\\to 1\\). Il faut donc poser \\(f(0)=1\\)."},
      {title:'Existence d’une racine', statement:"Montrer que \\(x^{3}+x-1=0\\) admet une solution dans \\(]0,1[\\).", correction:"La fonction \\(f(x)=x^{3}+x-1\\) est continue. \\(f(0)=-1\\) et \\(f(1)=1\\). Par le théorème des valeurs intermédiaires, il existe \\(c\\in ]0,1[\\) tel que \\(f(c)=0\\)."}
    ],
    exercises: ["Montrer que \\(\\cos  x=x\\) admet une solution sur \\([0,1]\\).","Trouver le prolongement continu de \\(\\sin  x/x\\) en 0.",'Étudier la continuité en 0 de x ln x prolongée par 0.']
  },
  27: {
    examples: [
      {title:'Inégalité de convexité', statement:"Démontrer \\(e^x \\geq  1+x\\) pour tout réel x.", correction:"La fonction exp est convexe. Sa tangente en \\(0 a\\) pour équation \\(y=1+x\\). Une fonction convexe est au-dessus de ses tangentes, donc \\(e^x\\geq 1+x\\)."},
      {title:'Inégalité logarithmique', statement:"Démontrer \\(\\ln  x \\leq  x-1\\) pour \\(x\\gt 0\\).", correction:"Poser \\(g(x)=x-1-\\ln  x\\). Alors \\(g'(x)=1-1/x=(x-1)/x. g\\) décroît sur \\(]0,1]\\) et croît sur \\([1,+\\infty [\\), avec \\(g(1)=0\\). Donc \\(g(x)\\geq 0\\)."}
    ],
    exercises: ["Démontrer que \\(x^{2}+1\\geq 2x\\).", "Montrer que ln est concave sur \\(\\mathbb{R}_{+}^{*}\\).", "Étudier la convexité de \\(x\\mapsto x \\ln  x\\) sur \\(\\mathbb{R}_{+}^{*}\\)."]
  },
  28: {
    examples: [
      {title:'Somme télescopique', statement:"Calculer \\(\\sum _{k=1}^n 1/[k(k+1)]\\).", correction:"On décompose \\(1/[k(k+1)]=1/k-1/(k+1)\\). La somme vaut \\(1-1/(n+1)=n/(n+1)\\)."},
      {title:'Somme géométrique', statement:"Calculer \\(\\sum _{k=0}^n 2^k\\).", correction:"Somme géométrique de raison 2 : \\((2^{n+1}-1)/(2-1)=2^{n+1}-1\\)."}
    ],
    exercises: ["Calculer \\(\\sum _{k=1}^n k\\).", "Calculer \\(\\sum _{k=1}^n (1/k - 1/(k+1))\\).", "Calculer \\(\\sum _{k=0}^n q^k\\) pour \\(q\\ne 1\\)."]
  },
  29: {
    examples: [
      {title:'Forme trigonométrique', statement:"Écrire \\(1+i\\sqrt{3}\\) sous forme trigonométrique.", correction:"Le module vaut \\(\\sqrt{1+3}=2\\). On \\(a \\cos  \\theta =1/2\\) et \\(\\sin  \\theta =\\sqrt{3}/2\\), donc \\(\\theta =\\pi /3\\). Ainsi \\(1+i\\sqrt{3}=2e^{i\\pi /3}\\)."},
      {title:'Racines carrées', statement:"Résoudre \\(z^{2}=-4\\).", correction:"Comme \\(-4=4e^{i\\pi }\\), les racines ont module 2 et arguments \\(\\pi /2\\) et \\(\\pi /2+\\pi\\). Les solutions sont \\(2i\\) et \\(-2i\\)."}
    ],
    exercises: ["Résoudre \\(z^{3}=1\\).", "Calculer le module et un argument de \\(-1+i\\).", "Exprimer \\((1+i)^8\\) sous forme algébrique."]
  },
  30: {
    examples: [
      {title:'Système avec paramètre libre', statement:"Résoudre \\(x+y+z=0\\) dans \\(\\mathbb{R}^{3}\\).", correction:"On pose \\(y=s\\) et \\(z=t\\). Alors \\(x=-s-t\\). Les solutions sont (-s-t,s,t), soit \\(s(-1,1,0)+t(-1,0,1)\\)."},
      {title:'Structure affine', statement:"Si \\(AX=B\\) et \\(X_{0}\\) est solution, décrire toutes les solutions.", correction:"X est solution si \\(AX=B=A X_{0}\\). Donc \\(A(X-X_{0})=0\\). Toutes les solutions sont \\(X_{0}+H\\) avec \\(H\\in \\operatorname{Ker}(A)\\)."}
    ],
    exercises: ["Résoudre \\(x+y=1, x-y=3\\).", 'Trouver le rang de [[1,2],[2,4]].', "Décrire les solutions de \\(x+y+z=1\\)."]
  },
  31: {
    examples: [
      {title:'Convergence normale', statement:"Montrer que \\(\\sum  x^n/n^{2}\\) converge normalement sur \\([-1,1]\\).", correction:"Pour \\(x\\in [-1,1], |x^n/n^{2}|\\leq 1/n^{2}\\). Comme \\(\\sum 1/n^{2}\\) converge, la série converge normalement par Weierstrass."},
      {title:'Non-uniformité type', statement:"\\(f_n(x)=x^n\\) sur \\([0,1]\\). La convergence vers 0 sur \\([0,1[\\) est-elle uniforme ?", correction:"Sur \\([0,1[, f_n(x)\\to 0\\) point par point. Mais \\(sup_{[0,1[} x^n=1\\), donc le sup ne tend pas vers 0. Pas de convergence uniforme."}
    ],
    exercises: ["Étudier la convergence normale de \\(\\sum  x^n/2^n\\) sur \\([-1,1]\\).", "Montrer que \\(x^n\\) converge uniformément vers 0 sur \\([0,a]\\) avec \\(a\\lt 1\\).", 'Justifier l’intégration terme à terme d’une série normalement convergente.']
  },
  32: {
    examples: [
      {title:'Point critique', statement:"Trouver les extrema de \\(f(x,y)=x^{2}+y^{2}\\).", correction:"\\(\\nabla f=(2x,2y)\\). Le seul point critique est \\((0,0)\\). La Hessienne vaut \\(2I\\), définie positive. C’est un minimum global."},
      {title:'Point selle', statement:"Classifier \\(f(x,y)=x^{2}-y^{2}\\) en \\((0,0)\\).", correction:"\\(\\nabla f=(2x,-2y)\\), point critique \\((0,0)\\). La Hessienne \\(\\operatorname{diag}(2,-2)\\) est indéfinie : point selle."}
    ],
    exercises: ["Étudier \\(f(x,y)=x^{2}+xy+y^{2}\\).", "Résoudre \\(\\nabla f=0\\) pour \\(f=x^{2}+y^{2}-2x\\).", "Appliquer Lagrange à \\(x+y\\) sous \\(x^{2}+y^{2}=1\\)."]
  },
  33: {
    examples: [
      {title:'Projecteur', statement:"Si \\(A^{2}=A\\), montrer que les valeurs propres sont 0 ou 1.", correction:"Si \\(Av=\\lambda v\\), alors \\(A^{2}v=\\lambda ^{2}v\\). Mais \\(A^{2}v=Av=\\lambda v\\). Donc \\(\\lambda ^{2}=\\lambda\\), soit \\(\\lambda \\in \\{0,1\\}\\)."},
      {title:'Symétrie', statement:"Si \\(A^{2}=I\\), montrer que A est diagonalisable si le polynôme \\(X^{2}-1\\) est annulateur.", correction:"\\(X^{2}-1=(X-1)(X+1)\\) est scindé à racines simples. Un endomorphisme annulé par un polynôme scindé à racines simples est diagonalisable."}
    ],
    exercises: ['Montrer qu’une matrice nilpotente n’a que 0 comme valeur propre.', "Trouver les valeurs propres possibles si \\(A^{3}=I\\).", "Utiliser un polynôme annulateur pour étudier \\(A^{2}=3A-2I\\)."]
  },
  34: {
    examples: [
      {title:'Covariance nulle', statement:"Si X et Y indépendantes, montrer \\(\\operatorname{Cov}(X,Y)=0\\).", correction:"Par indépendance, \\(E(XY)=E(X)E(Y)\\). Donc \\(\\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y)=0\\)."},
      {title:'Variance d’une somme', statement:"Établir \\(\\operatorname{Var}(X+Y)\\).", correction:"On développe \\(X+Y-E(X)-E(Y)=(X-E(X))+(Y-E(Y))\\). Le carré donne \\(\\operatorname{Var}(X)+\\operatorname{Var}(Y)+2Cov(X,Y)\\)."}
    ],
    exercises: ['Calculer les marginales d’un tableau conjoint.', 'Tester l’indépendance de deux variables discrètes.', 'Calculer Cov(X,Y) à partir de E(XY).']
  },
  35: {
    examples: [
      {title:'Distribution stationnaire à deux états', statement:"Pour \\(P=\\begin{pmatrix}0.8&0.2\\\\0.3&0.7\\end{pmatrix}\\), trouver \\(\\pi\\).", correction:"Écrire \\(\\pi =(a,1-a). \\pi P=\\pi\\) donne \\(0.8a+0.3(1-a)=a\\). Donc \\(0.5a=0.3, a=0.6\\). Ainsi \\(\\pi =(0.6,0.4)\\)."},
      {title:'Loi après deux transitions', statement:"Si la loi initiale est \\(\\mu\\), la loi après deux étapes vaut ?", correction:"Après une étape : \\(\\mu P\\). Après deux étapes : \\(\\mu P^{2}\\)."}
    ],
    exercises: ['Vérifier qu’une matrice est stochastique.', "Résoudre \\(\\pi P=\\pi\\) pour une chaîne à deux états.", "Calculer \\(P^{2}\\) pour une matrice 2×2 simple."]
  },
  36: {
    examples: [
      {title:'Premier ordre homogène', statement:"Résoudre \\(y'+3y=0, y(0)=2\\).", correction:"\\(y'=-3y\\). Les solutions sont \\(Ce^{-3x}\\). La condition initiale donne \\(C=2\\), donc \\(y=2e^{-3x}\\)."},
      {title:'Second ordre', statement:"Résoudre \\(y''+4y=0\\).", correction:"Équation caractéristique \\(r^{2}+4=0\\), racines \\(\\pm 2i\\). Solutions réelles : \\(A \\cos (2x)+B \\sin (2x)\\)."}
    ],
    exercises: ["Résoudre \\(y'=2y\\).", "Trouver une solution particulière de \\(y'-y=e^x\\).", "Résoudre \\(y''-9y=0\\)."]
  }
};
