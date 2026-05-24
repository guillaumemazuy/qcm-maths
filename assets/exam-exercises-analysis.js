const ANALYSIS_EXAM_EXERCISES = [
  {
    level:25,year:'1A',module:'Analyse',theme:'Limites et équivalents',difficulty:'concours',exercises:[
      {id:'ana-25-1',title:'Développements asymptotiques en 0',statement:'Soit f(x)=ln(1+2x)-2x+2x². 1) Déterminer un équivalent de f en 0. 2) En déduire la limite de f(x)/x³. 3) Étudier le signe de f au voisinage de 0.',solution:'On utilise ln(1+u)=u-u²/2+u³/3+o(u³). Avec u=2x : ln(1+2x)=2x-2x²+8x³/3+o(x³). Donc f(x)=8x³/3+o(x³). La limite vaut 8/3. Le signe est celui de x³ au voisinage de 0, donc positif à droite et négatif à gauche.'},
      {id:'ana-25-2',title:'Racine et rationalisation',statement:'Étudier la limite de u_n=n²(√(1+3/n)-1-3/(2n)). Puis donner un développement asymptotique à deux termes de √(n²+3n)-n.',solution:'On utilise √(1+u)=1+u/2-u²/8+o(u²). Avec u=3/n : √(1+3/n)=1+3/(2n)-9/(8n²)+o(1/n²). Ainsi u_n→-9/8. Ensuite √(n²+3n)-n=n(√(1+3/n)-1)=3/2-9/(8n)+o(1/n).'},
      {id:'ana-25-3',title:'Composition d’équivalents',statement:'Déterminer un équivalent en 0 de e^{sin x}-e^x. En déduire la limite de (e^{sin x}-e^x)/x³.',solution:'e^{sin x}-e^x=e^x(e^{sin x-x}-1). Or sin x-x=-x³/6+o(x³). Comme e^u-1~u, on obtient e^{sin x}-e^x~e^x(sin x-x)~-x³/6. La limite vaut -1/6.'},
      {id:'ana-25-4',title:'Croissances comparées',statement:'Étudier la limite de a_n=(ln n)^3/√n puis celle de b_n=n^4/e^{√n}.',solution:'Pour a_n, toute puissance positive de n domine toute puissance de ln n, donc a_n→0. Pour b_n, poser m=√n. Alors n^4/e^{√n}=m^8/e^m→0 par domination exponentielle.'}
    ]
  },
  {
    level:26,year:'1A',module:'Analyse',theme:'Continuité',difficulty:'progressif',exercises:[
      {id:'ana-26-1',title:'Prolongement par continuité',statement:'Soit f(x)=(1-cos x)/x² pour x≠0. 1) Montrer que f admet un prolongement continu en 0. 2) Déterminer la valeur à donner en 0.',solution:'On sait que 1-cos x~x²/2. Donc f(x)→1/2 lorsque x→0. Le prolongement continu est obtenu en posant f(0)=1/2.'},
      {id:'ana-26-2',title:'Existence et unicité',statement:'Montrer que l’équation x+ln x=2 admet une unique solution sur R_+^*.',solution:'La fonction f(x)=x+ln x-2 est continue sur R_+^*. Elle est strictement croissante car f’(x)=1+1/x>0. De plus f(1)=-1 et f(2)=ln 2>0. Par TVI il existe une solution dans ]1,2[, et par stricte croissance elle est unique.'},
      {id:'ana-26-3',title:'Image d’un intervalle',statement:'Soit f continue sur [0,1], avec f(0)=1 et f(1)=0. Montrer qu’il existe c∈[0,1] tel que f(c)=c.',solution:'Poser g(x)=f(x)-x. g est continue, g(0)=1>0 et g(1)=-1<0. Par TVI, il existe c∈]0,1[ tel que g(c)=0, donc f(c)=c.'},
      {id:'ana-26-4',title:'Réciproque continue',statement:'Soit f continue strictement croissante sur [a,b]. Expliquer pourquoi f réalise une bijection de [a,b] sur [f(a),f(b)].',solution:'La stricte croissance donne l’injectivité. Le TVI donne que toute valeur entre f(a) et f(b) est atteinte, donc la surjectivité sur [f(a),f(b)]. La réciproque existe et est continue car f est monotone continue sur un segment.'}
    ]
  },
  {
    level:27,year:'1A',module:'Analyse',theme:'Fonctions convexes',difficulty:'intermédiaire',exercises:[
      {id:'ana-27-1',title:'Inégalité de tangente',statement:'Démontrer que pour tout x>0, ln x≤x-1. Préciser le cas d’égalité.',solution:'La fonction ln est concave sur R_+^*, donc elle est sous ses tangentes. Sa tangente en 1 est y=x-1. Donc ln x≤x-1. Égalité uniquement en x=1.'},
      {id:'ana-27-2',title:'Convexité de x ln x',statement:'Étudier la convexité de f(x)=x ln x sur R_+^*. En déduire une inégalité de tangente en 1.',solution:'f’(x)=ln x+1 et f’’(x)=1/x>0, donc f est convexe. La tangente en 1 vaut f(1)+f’(1)(x-1)=0+1(x-1). Donc x ln x≥x-1.'},
      {id:'ana-27-3',title:'Jensen à deux points',statement:'Soit f convexe. Montrer que f((x+y)/2)≤(f(x)+f(y))/2. Appliquer à f(t)=t².',solution:'C’est la définition de la convexité avec t=1/2. Pour f(t)=t², on obtient ((x+y)/2)²≤(x²+y²)/2, soit (x-y)²≥0.'},
      {id:'ana-27-4',title:'Point d’inflexion',statement:'Étudier la convexité de f(x)=x³-3x et déterminer ses éventuels points d’inflexion.',solution:'f’’(x)=6x. Elle est négative sur R_- et positive sur R_+. La convexité change en 0. Donc 0 est un point d’inflexion, de coordonnées (0,0).'}
    ]
  },
  {
    level:5,year:'1A',module:'Analyse',theme:'Développements limités',difficulty:'concours',exercises:[
      {id:'ana-5-1',title:'DL avec quotient',statement:'Calculer lim_{x→0} [tan x - sin x]/x³.',solution:'tan x=x+x³/3+o(x³), sin x=x-x³/6+o(x³). La différence vaut x³/3+x³/6+o(x³)=x³/2+o(x³). La limite vaut 1/2.'},
      {id:'ana-5-2',title:'DL logarithmique ordre 4',statement:'Calculer lim_{x→0} [ln(1+x)-x+x²/2-x³/3]/x⁴.',solution:'ln(1+x)=x-x²/2+x³/3-x⁴/4+o(x⁴). Après simplification, le quotient tend vers -1/4.'},
      {id:'ana-5-3',title:'Composition de DL',statement:'Donner le DL à l’ordre 2 de e^{x+x²} en 0.',solution:'Poser u=x+x². e^u=1+u+u²/2+o(u²). Comme u²=x²+o(x²), on obtient 1+x+x²+x²/2+o(x²)=1+x+3x²/2+o(x²).'},
      {id:'ana-5-4',title:'DL et signe local',statement:'Étudier le signe au voisinage de 0 de h(x)=e^x-1-x-x²/2.',solution:'e^x=1+x+x²/2+x³/6+o(x³). Donc h(x)=x³/6+o(x³). Le signe est celui de x³ près de 0 : négatif à gauche, positif à droite.'}
    ]
  },
  {
    level:19,year:'1A',module:'Analyse',theme:'Intégration sur un segment',difficulty:'intermédiaire',exercises:[
      {id:'ana-19-1',title:'Intégration par parties',statement:'Calculer I=∫_0^1 x e^x dx.',solution:'IPP avec u=x et v’=e^x. I=[xe^x]_0^1-∫_0^1 e^x dx=e-(e-1)=1.'},
      {id:'ana-19-2',title:'Changement de variable',statement:'Calculer ∫_0^1 2x/(1+x²) dx.',solution:'Poser u=1+x², du=2x dx. Les bornes deviennent 1 et 2. L’intégrale vaut ∫_1^2 du/u=ln 2.'},
      {id:'ana-19-3',title:'Positivité',statement:'Montrer que pour toute fonction continue positive f sur [a,b], ∫_a^b f≥0.',solution:'L’intégrale est limite de sommes de Riemann dont chaque terme est positif. La limite est donc positive.'},
      {id:'ana-19-4',title:'Encadrement intégral',statement:'Si 0≤f≤g sur [a,b], montrer que ∫f≤∫g.',solution:'Comme g-f≥0, par positivité ∫(g-f)≥0. Par linéarité, ∫g-∫f≥0, donc ∫f≤∫g.'}
    ]
  },
  {
    level:10,year:'2A',module:'Analyse',theme:'Séries numériques',difficulty:'concours',exercises:[
      {id:'ana-10-1',title:'Série de Bertrand',statement:'Étudier selon α∈R la nature de Σ_{n≥2} 1/[n(ln n)^α].',solution:'Par comparaison intégrale ou critère de Bertrand, la série converge si et seulement si α>1. Elle diverge pour α≤1.'},
      {id:'ana-10-2',title:'Série alternée non absolue',statement:'Étudier Σ_{n≥2} (-1)^n/ln n.',solution:'La suite 1/ln n décroît vers 0 à partir de n≥3. Par Leibniz, la série converge. Mais la série des valeurs absolues Σ1/ln n diverge car le terme ne décroît pas assez vite, en particulier 1/ln n ≥ 1/n à partir d’un certain rang. Elle n’est pas absolument convergente.'},
      {id:'ana-10-3',title:'Critère de d’Alembert',statement:'Étudier Σ n!/n^n.',solution:'Soit u_n=n!/n^n. Alors u_{n+1}/u_n=(n/(n+1))^n→e^{-1}<1. Par d’Alembert, la série converge.'},
      {id:'ana-10-4',title:'Équivalent trigonométrique',statement:'Étudier Σ(1-cos(1/n)).',solution:'1-cos u~u²/2. Avec u=1/n, le terme est équivalent à 1/(2n²). Comme Σ1/n² converge, la série converge.'}
    ]
  },
  {
    level:11,year:'2A',module:'Analyse',theme:'Intégrales impropres',difficulty:'concours',exercises:[
      {id:'ana-11-1',title:'Critère de Riemann à l’infini',statement:'Étudier ∫_1^∞ dx/x^α selon α.',solution:'Pour α≠1, une primitive est x^{1-α}/(1-α). La limite en +∞ est finie si et seulement si 1-α<0, donc α>1. Pour α=1, on obtient ln x, divergent.'},
      {id:'ana-11-2',title:'Critère de Riemann en 0',statement:'Étudier ∫_0^1 dx/x^α selon α.',solution:'Pour α≠1, une primitive est x^{1-α}/(1-α). La limite en 0+ est finie si 1-α>0, donc α<1. Pour α=1, divergence logarithmique.'},
      {id:'ana-11-3',title:'Bertrand intégral',statement:'Étudier ∫_2^∞ dx/[x(ln x)^α].',solution:'Poser u=ln x, du=dx/x. L’intégrale devient ∫_{ln 2}^∞ du/u^α, convergente si et seulement si α>1.'},
      {id:'ana-11-4',title:'Intégrale avec logarithme',statement:'Calculer ∫_1^∞ ln x/x² dx.',solution:'IPP : u=ln x, dv=dx/x². Alors v=-1/x. Le terme de bord [-ln x/x]_1^∞ vaut 0, et il reste ∫_1^∞ 1/x² dx=1.'}
    ]
  },
  {
    level:22,year:'2A',module:'Analyse',theme:'Séries entières',difficulty:'concours',exercises:[
      {id:'ana-22-1',title:'Rayons classiques',statement:'Déterminer les rayons de convergence de Σn²x^n, Σn!x^n et Σx^n/n!.',solution:'Pour Σn²x^n, rayon 1. Pour Σn!x^n, d’Alembert donne (n+1)|x|, donc rayon 0. Pour Σx^n/n!, d’Alembert donne |x|/(n+1)→0 pour tout x, donc rayon +∞.'},
      {id:'ana-22-2',title:'Somme dérivée',statement:'À partir de Σ_{n≥0}x^n=1/(1-x), obtenir Σ_{n≥1} n x^{n-1}.',solution:'Sur ]-1,1[, on peut dériver terme à terme. On obtient Σ_{n≥1} n x^{n-1}=1/(1-x)².'},
      {id:'ana-22-3',title:'Bornes d’intervalle',statement:'Étudier l’intervalle de convergence de Σ x^n/n.',solution:'Le rayon vaut 1. En x=1, Σ1/n diverge. En x=-1, Σ(-1)^n/n converge par Leibniz. Intervalle : [-1,1[.'},
      {id:'ana-22-4',title:'Fonction somme',statement:'Montrer que f(x)=Σ_{n≥0}x^n/n! vérifie f’=f.',solution:'Le rayon est infini. On dérive terme à terme : f’(x)=Σ_{n≥1} n x^{n-1}/n! = Σ_{n≥1} x^{n-1}/(n-1)! = f(x).'}
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
