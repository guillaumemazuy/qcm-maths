const ANALYSIS_EXAM_EXERCISES = [
  {
    level:25,year:'1A',module:'Analyse',theme:'Limites et équivalents',difficulty:'concours',exercises:[
      {id:'ana-25-1',title:'Développements asymptotiques en 0',statement:'Soit f(x)=ln(1+2x)-2x+2x². 1) Déterminer un équivalent de f en 0. 2) En déduire la limite de f(x)/x³. 3) Étudier le signe de f au voisinage de 0.',solution:"On utilise \\(\\ln (1+u)=u-u^{2}/2+u^{3}/3+o(u^{3})\\). Avec \\(u=2x\\) : \\(\\ln (1+2x)=2x-2x^{2}+8x^{3}/3+o(x^{3})\\). Donc \\(f(x)=8x^{3}/3+o(x^{3})\\). La limite vaut \\(\\frac{8}{3}\\). Le signe est celui de \\(x^{3}\\) au voisinage de 0, donc positif à droite et négatif à gauche."},
      {id:'ana-25-2',title:'Racine et rationalisation',statement:"Étudier la limite de \\(u_n=n^{2}(\\sqrt{1+3/n}-1-3/(2n))\\). Puis donner un développement asymptotique à deux termes de \\(\\sqrt{n^{2}+3n}-n\\).",solution:"On utilise \\(\\sqrt{1+u}=1+u/2-u^{2}/8+o(u^{2})\\). Avec \\(u=3/n\\) : \\(\\sqrt{1+3/n}=1+3/(2n)-9/(8n^{2})+o(1/n^{2})\\). Ainsi \\(u_n\\to -9/8\\). Ensuite \\(\\sqrt{n^{2}+3n}-n=n(\\sqrt{1+3/n}-1)=3/2-9/(8n)+o(1/n)\\)."},
      {id:'ana-25-3',title:'Composition d’équivalents',statement:"Déterminer un équivalent en 0 de \\(e^{\\sin  x}-e^x\\). En déduire la limite de \\((e^{\\sin  x}-e^x)/x^{3}\\).",solution:"\\(e^{\\sin  x}-e^x=e^x(e^{\\sin  x-x}-1)\\). Or \\(\\sin  x-x=-x^{3}/6+o(x^{3})\\). Comme \\(e^u-1\\sim u\\), on obtient \\(e^{\\sin  x}-e^x\\sim e^x(\\sin  x-x)\\sim -x^{3}/6\\). La limite vaut \\(\\frac{-1}{6}\\)."},
      {id:'ana-25-4',title:'Croissances comparées',statement:"Étudier la limite de \\(a_n=(\\ln  n)^3/\\sqrt{n}\\) puis celle de \\(b_n=n^4/e^{\\sqrt{n}}\\).",solution:"Pour \\(a_n\\), toute puissance positive de n domine toute puissance de ln n, donc \\(a_n\\to 0\\). Pour \\(b_n\\), poser \\(m=\\sqrt{n}\\). Alors \\(n^4/e^{\\sqrt{n}}=m^8/e^m\\to 0\\) par domination exponentielle."}
    ]
  },
  {
    level:26,year:'1A',module:'Analyse',theme:'Continuité',difficulty:'progressif',exercises:[
      {id:'ana-26-1',title:'Prolongement par continuité',statement:"Soit \\(f(x)=(1-\\cos  x)/x^{2}\\) pour x≠0. 1) Montrer que f admet un prolongement continu en 0. 2) Déterminer la valeur à donner en 0.",solution:"On sait que \\(1-\\cos  x\\sim x^{2}/2\\). Donc \\(f(x)\\to 1/2\\) lorsque \\(x\\to 0\\). Le prolongement continu est obtenu en posant \\(f(0)=1/2\\)."},
      {id:'ana-26-2',title:'Existence et unicité',statement:"Montrer que l’équation \\(x+\\ln  x=2\\) admet une unique solution sur \\(\\mathbb{R}_{+}^{*}\\).",solution:"La fonction \\(f(x)=x+\\ln  x-2\\) est continue sur \\(\\mathbb{R}_{+}^{*}\\). Elle est strictement croissante car \\(f'(x)=1+1/x\\gt 0\\). De plus \\(f(1)=-1\\) et \\(f(2)=\\ln  2\\gt 0\\). Par TVI il existe une solution dans \\(]1,2[\\), et par stricte croissance elle est unique."},
      {id:'ana-26-3',title:'Image d’un intervalle',statement:"Soit f continue sur \\([0,1]\\), avec \\(f(0)=1\\) et \\(f(1)=0\\). Montrer qu’il existe \\(c\\in [0,1]\\) tel que \\(f(c)=c\\).",solution:"Poser \\(g(x)=f(x)-x. g\\) est continue, \\(g(0)=1\\gt 0\\) et \\(g(1)=-1\\lt 0\\). Par TVI, il existe \\(c\\in ]0,1[\\) tel que \\(g(c)=0\\), donc \\(f(c)=c\\)."},
      {id:'ana-26-4',title:'Réciproque continue',statement:'Soit f continue strictement croissante sur [a,b]. Expliquer pourquoi f réalise une bijection de [a,b] sur [f(a),f(b)].',solution:'La stricte croissance donne l’injectivité. Le TVI donne que toute valeur entre f(a) et f(b) est atteinte, donc la surjectivité sur [f(a),f(b)]. La réciproque existe et est continue car f est monotone continue sur un segment.'}
    ]
  },
  {
    level:27,year:'1A',module:'Analyse',theme:'Fonctions convexes',difficulty:'intermédiaire',exercises:[
      {id:'ana-27-1',title:'Inégalité de tangente',statement:"Démontrer que pour tout \\(x\\gt 0, \\ln  x\\leq x-1\\). Préciser le cas d’égalité.",solution:"La fonction ln est concave sur \\(\\mathbb{R}_{+}^{*}\\), donc elle est sous ses tangentes. Sa tangente en 1 est \\(y=x-1\\). Donc \\(\\ln  x\\leq x-1\\). Égalité uniquement en \\(x=1\\)."},
      {id:'ana-27-2',title:'Convexité de x ln x',statement:"Étudier la convexité de \\(f(x)=x \\ln  x\\) sur \\(\\mathbb{R}_{+}^{*}\\). En déduire une inégalité de tangente en 1.",solution:"\\(f'(x)=\\ln  x+1\\) et \\(f''(x)=1/x\\gt 0\\), donc f est convexe. La tangente en 1 vaut \\(f(1)+f'(1)(x-1)=0+1(x-1)\\). Donc \\(x \\ln  x\\geq x-1\\)."},
      {id:'ana-27-3',title:'Jensen à deux points',statement:"Soit f convexe. Montrer que \\(f((x+y)/2)\\leq (f(x)+f(y))/2\\). Appliquer à \\(f(t)=t^{2}\\).",solution:"C’est la définition de la convexité avec \\(t=1/2\\). Pour \\(f(t)=t^{2}\\), on obtient \\(((x+y)/2)^{2}\\leq (x^{2}+y^{2})/2\\), soit \\((x-y)^{2}\\geq 0\\)."},
      {id:'ana-27-4',title:'Point d’inflexion',statement:"Étudier la convexité de \\(f(x)=x^{3}-3x\\) et déterminer ses éventuels points d’inflexion.",solution:"\\(f''(x)=6x\\). Elle est négative sur \\(\\mathbb{R}_-\\) et positive sur \\(\\mathbb{R}_{+}\\). La convexité change en 0. Donc 0 est un point d’inflexion, de coordonnées \\((0,0)\\)."}
    ]
  },
  {
    level:5,year:'1A',module:'Analyse',theme:'Développements limités',difficulty:'concours',exercises:[
      {id:'ana-5-1',title:'DL avec quotient',statement:"Calculer \\(lim_{x\\to 0} [\\tan  x - \\sin  x]/x^{3}\\).",solution:"\\(\\tan  x=x+x^{3}/3+o(x^{3}), \\sin  x=x-x^{3}/6+o(x^{3})\\). La différence vaut \\(x^{3}/3+x^{3}/6+o(x^{3})=x^{3}/2+o(x^{3})\\). La limite vaut \\(\\frac{1}{2}\\)."},
      {id:'ana-5-2',title:'DL logarithmique ordre 4',statement:"Calculer \\(lim_{x\\to 0} [\\ln (1+x)-x+x^{2}/2-x^{3}/3]/x^{4}\\).",solution:"\\(\\ln (1+x)=x-x^{2}/2+x^{3}/3-x^{4}/4+o(x^{4})\\). Après simplification, le quotient tend vers \\(\\frac{-1}{4}\\)."},
      {id:'ana-5-3',title:'Composition de DL',statement:"Donner le DL à l’ordre 2 de \\(e^{x+x^{2}}\\) en 0.",solution:"Poser \\(u=x+x^{2}. e^u=1+u+u^{2}/2+o(u^{2})\\). Comme \\(u^{2}=x^{2}+o(x^{2})\\), on obtient \\(1+x+x^{2}+x^{2}/2+o(x^{2})=1+x+3x^{2}/2+o(x^{2})\\)."},
      {id:'ana-5-4',title:'DL et signe local',statement:"Étudier le signe au voisinage de 0 de \\(h(x)=e^x-1-x-x^{2}/2\\).",solution:"\\(e^x=1+x+x^{2}/2+x^{3}/6+o(x^{3})\\). Donc \\(h(x)=x^{3}/6+o(x^{3})\\). Le signe est celui de \\(x^{3}\\) près de 0 : négatif à gauche, positif à droite."}
    ]
  },
  {
    level:19,year:'1A',module:'Analyse',theme:'Intégration sur un segment',difficulty:'intermédiaire',exercises:[
      {id:'ana-19-1',title:'Intégration par parties',statement:"Calculer \\(I=\\int _0^1 x e^x dx\\).",solution:"IPP avec \\(u=x\\) et \\(v'=e^x. I=[xe^x]_0^1-\\int _0^1 e^x dx=e-(e-1)=1\\)."},
      {id:'ana-19-2',title:'Changement de variable',statement:"Calculer \\(\\int _0^1 2x/(1+x^{2}) dx\\).",solution:"Poser \\(u=1+x^{2}, du=2x dx\\). Les bornes deviennent 1 et \\(2. L\\)’intégrale vaut \\(\\int _1^2 du/u=\\ln  2\\)."},
      {id:'ana-19-3',title:'Positivité',statement:"Montrer que pour toute fonction continue positive f sur \\([a,b], \\int _a^b f\\geq 0\\).",solution:'L’intégrale est limite de sommes de Riemann dont chaque terme est positif. La limite est donc positive.'},
      {id:'ana-19-4',title:'Encadrement intégral',statement:"Si \\(0\\leq f\\leq g\\) sur [a,b], montrer que \\(\\int f\\leq \\int g\\).",solution:"Comme \\(g-f\\geq 0\\), par positivité \\(\\int (g-f)\\geq 0\\). Par linéarité, \\(\\int g-\\int f\\geq 0\\), donc \\(\\int f\\leq \\int g\\)."}
    ]
  },
  {
    level:10,year:'2A',module:'Analyse',theme:'Séries numériques',difficulty:'concours',exercises:[
      {id:'ana-10-1',title:'Série de Bertrand',statement:"Étudier selon \\(\\alpha \\in R\\) la nature de \\(\\sum _{n\\geq 2} 1/[n(\\ln  n)^\\alpha ]\\).",solution:"Par comparaison intégrale ou critère de Bertrand, la série converge si et seulement si \\(\\alpha \\gt 1\\). Elle diverge pour \\(\\alpha \\leq 1\\)."},
      {id:'ana-10-2',title:'Série alternée non absolue',statement:"Étudier \\(\\sum _{n\\geq 2} (-1)^n/\\ln  n\\).",solution:"La suite \\(1/\\ln  n\\) décroît vers 0 à partir de \\(n\\geq 3\\). Par Leibniz, la série converge. Mais la série des valeurs absolues \\(\\sum 1/\\ln  n\\) diverge car le terme ne décroît pas assez vite, en particulier \\(1/\\ln  n \\geq  1/n\\) à partir d’un certain rang. Elle n’est pas absolument convergente."},
      {id:'ana-10-3',title:'Critère de d’Alembert',statement:"Étudier \\(\\sum  n!/n^n\\).",solution:"Soit \\(u_n=n!/n^n\\). Alors \\(u_{n+1}/u_n=(n/(n+1))^n\\to e^{-1}\\lt 1\\). Par d’Alembert, la série converge."},
      {id:'ana-10-4',title:'Équivalent trigonométrique',statement:"Étudier \\(\\sum (1-\\cos (1/n))\\).",solution:"\\(1-\\cos  u\\sim u^{2}/2\\). Avec \\(u=1/n\\), le terme est équivalent à \\(1/(2n^{2})\\). Comme \\(\\sum 1/n^{2}\\) converge, la série converge."}
    ]
  },
  {
    level:11,year:'2A',module:'Analyse',theme:'Intégrales impropres',difficulty:'concours',exercises:[
      {id:'ana-11-1',title:'Critère de Riemann à l’infini',statement:"Étudier \\(\\int _1^\\infty  dx/x^\\alpha\\) selon \\(\\alpha\\).",solution:"Pour \\(\\alpha \\ne 1\\), une primitive est \\(x^{1-\\alpha }/(1-\\alpha )\\). La limite en \\(+\\infty\\) est finie si et seulement si \\(1-\\alpha \\lt 0\\), donc \\(\\alpha \\gt 1\\). Pour \\(\\alpha =1\\), on obtient ln x, divergent."},
      {id:'ana-11-2',title:'Critère de Riemann en 0',statement:"Étudier \\(\\int _0^1 dx/x^\\alpha\\) selon \\(\\alpha\\).",solution:"Pour \\(\\alpha \\ne 1\\), une primitive est \\(x^{1-\\alpha }/(1-\\alpha )\\). La limite en \\(0+\\) est finie si \\(1-\\alpha \\gt 0\\), donc \\(\\alpha \\lt 1\\). Pour \\(\\alpha =1\\), divergence logarithmique."},
      {id:'ana-11-3',title:'Bertrand intégral',statement:"Étudier \\(\\int _2^\\infty  dx/[x(\\ln  x)^\\alpha ]\\).",solution:"Poser \\(u=\\ln  x, du=dx/x. L\\)’intégrale devient \\(\\int _{\\ln  2}^\\infty  du/u^\\alpha\\), convergente si et seulement si \\(\\alpha \\gt 1\\)."},
      {id:'ana-11-4',title:'Intégrale avec logarithme',statement:"Calculer \\(\\int _1^\\infty  \\ln  x/x^{2} dx\\).",solution:"IPP : \\(u=\\ln  x, dv=dx/x^{2}\\). Alors \\(v=-1/x\\). Le terme de bord \\([-\\ln  x/x]_1^\\infty\\) vaut 0, et il reste \\(\\int _1^\\infty  1/x^{2} dx=1\\)."}
    ]
  },
  {
    level:22,year:'2A',module:'Analyse',theme:'Séries entières',difficulty:'concours',exercises:[
      {id:'ana-22-1',title:'Rayons classiques',statement:"Déterminer les rayons de convergence de \\(\\sum n^{2}x^n, \\sum n!x^n\\) et \\(\\sum x^n/n!\\).",solution:"Pour \\(\\sum n^{2}x^n\\), rayon 1. Pour \\(\\sum n!x^n, d\\)’Alembert donne \\((n+1)|x|\\), donc rayon 0. Pour \\(\\sum x^n/n!, d\\)’Alembert donne \\(|x|/(n+1)\\to 0\\) pour tout x, donc rayon \\(+\\infty\\)."},
      {id:'ana-22-2',title:'Somme dérivée',statement:"À partir de \\(\\sum _{n\\geq 0}x^n=1/(1-x)\\), obtenir \\(\\sum _{n\\geq 1} n x^{n-1}\\).",solution:"Sur \\(]-1,1[\\), on peut dériver terme à terme. On obtient \\(\\sum _{n\\geq 1} n x^{n-1}=1/(1-x)^{2}\\)."},
      {id:'ana-22-3',title:'Bornes d’intervalle',statement:"Étudier l’intervalle de convergence de \\(\\sum  x^n/n\\).",solution:"Le rayon vaut 1. En \\(x=1, \\sum 1/n\\) diverge. En \\(x=-1, \\sum (-1)^n/n\\) converge par Leibniz. Intervalle : \\([-1,1[\\)."},
      {id:'ana-22-4',title:'Fonction somme',statement:"Montrer que \\(f(x)=\\sum _{n\\geq 0}x^n/n!\\) vérifie \\(f'=f\\).",solution:"Le rayon est infini. On dérive terme à terme : \\(f'(x)=\\sum _{n\\geq 1} n x^{n-1}/n! = \\sum _{n\\geq 1} x^{n-1}/(n-1)! = f(x)\\)."}
    ]
  }
];

if (typeof EXAM_EXERCISES !== 'undefined') {
  for (const group of ANALYSIS_EXAM_EXERCISES) {
    const idx = EXAM_EXERCISES.findIndex(g => g.level === group.level);
    if (idx >= 0) EXAM_EXERCISES[idx] = group;
    else EXAM_EXERCISES.push(group);
  }
}
