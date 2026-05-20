const DEFAULT_QUESTIONS=[
{id:'q1',theme:'Analyse',level:'difficile',source:'base',question:'Quelle est la limite de (tan x - sin x)/x^3 lorsque x tend vers 0 ?',options:['1/2','1/3','1/6','0'],answer:'A',explanation:'tan x=x+x^3/3+o(x^3) et sin x=x-x^3/6+o(x^3). La différence vaut x^3/2+o(x^3).'},
{id:'q2',theme:'Analyse',level:'difficile',source:'base',question:'Quelle est la limite de (ln(1+x)-x+x^2/2-x^3/3)/x^4 lorsque x tend vers 0 ?',options:['-1/4','1/4','1/3','0'],answer:'A',explanation:'ln(1+x)=x-x^2/2+x^3/3-x^4/4+o(x^4). Après simplification, il reste -x^4/4.'},
{id:'q3',theme:'Suites',level:'difficile',source:'base',question:'Quelle est la limite de n^3(sin(1/n)-1/n) ?',options:['0','-1/6','1/6','-1/2'],answer:'B',explanation:'sin u=u-u^3/6+o(u^3). Avec u=1/n, puis multiplication par n^3, la limite vaut -1/6.'},
{id:'q4',theme:'Séries',level:'difficile',source:'base',question:'Quel est le rayon de convergence de la série entière Σ n! x^n ?',options:['0','1','e','+∞'],answer:'A',explanation:'Par d’Alembert, |u_{n+1}/u_n|=(n+1)|x|. Pour x non nul, cela tend vers +∞. Rayon 0.'},
{id:'q5',theme:'Algèbre linéaire',level:'moyen',source:'base',question:'Si f:E→F est linéaire, dim(E)=5 et rg(f)=3, quelle est dim Ker(f) ?',options:['1','2','3','5'],answer:'B',explanation:'Théorème du rang : dim(E)=dim Ker(f)+rg(f), donc dim Ker(f)=2.'},
{id:'q6',theme:'Matrices',level:'difficile',source:'base',question:'Pour A de taille n×n, det(λA) vaut :',options:['λdet(A)','λ²det(A)','λ^n det(A)','det(A)/λ'],answer:'C',explanation:'Chaque ligne est multipliée par λ. Il y a n lignes, donc facteur λ^n.'},
{id:'q7',theme:'Probabilités',level:'moyen',source:'base',question:'Si X suit une loi binomiale B(n,p), alors Var(X) vaut :',options:['np','p(1-p)','np(1-p)','n+p'],answer:'C',explanation:'Une binomiale est somme de n Bernoulli indépendantes. Variance np(1-p).'},
{id:'q8',theme:'Complexes',level:'moyen',source:'base',question:'Un argument de 1+i√3 est :',options:['π/6','π/3','π/2','2π/3'],answer:'B',explanation:'Le module vaut 2. cos θ=1/2 et sin θ=√3/2, donc θ=π/3.'},
{id:'q9',theme:'Polynômes',level:'moyen',source:'base',question:'Si a est racine double de P, alors :',options:['P(a)=0 seulement','P(a)=0 et P’(a)=0','P’(a)≠0','P est constant'],answer:'B',explanation:'Si P(X)=(X-a)^2Q(X), alors P(a)=0 et P’(a)=0.'},
{id:'q10',theme:'Dénombrement',level:'moyen',source:'base',question:'Le coefficient de x^3 dans (1+x)^7 est :',options:['21','35','42','7'],answer:'B',explanation:'Par le binôme de Newton, le coefficient vaut C(7,3)=35.'},
{id:'q11',theme:'Analyse',level:'concours',source:'concours',exam:'Mines-Ponts — type oral',question:'On considère f(x)=x^x pour x>0. Quelle est la limite en 0+ ?',options:['0','1','+∞','N’existe pas'],answer:'B',explanation:'x^x=exp(x ln x). Or x ln x→0 en 0+, donc x^x→1.'},
{id:'q12',theme:'Séries',level:'concours',source:'concours',exam:'Centrale — série type',question:'La série Σ(1-cos(1/n)) est :',options:['Divergente','Convergente','Semi-convergente','Géométrique'],answer:'B',explanation:'1-cos u~u²/2. Donc le terme est équivalent à 1/(2n²), série convergente.'},
{id:'q13',theme:'Matrices',level:'concours',source:'concours',exam:'CCINP — algèbre type',question:'Si A²=I, les valeurs propres possibles de A sont :',options:['0 uniquement','1 et -1','2 et -2','i et -i'],answer:'B',explanation:'Si Av=λv, alors A²v=λ²v=v, donc λ²=1.'},
{id:'q14',theme:'Probabilités',level:'concours',source:'concours',exam:'HEC/ECS — proba type',question:'Si X et Y sont indépendantes, Var(X+Y) vaut :',options:['Var(X)+Var(Y)','Var(X)Var(Y)','E(X)+E(Y)','0'],answer:'A',explanation:'Var(X+Y)=Var(X)+Var(Y)+2Cov(X,Y). L’indépendance annule la covariance.'}
];

const COURSES=[
{theme:'Analyse',title:'Développements limités et équivalents',content:'À retenir : e^x=1+x+x²/2+x³/6+o(x³), ln(1+x)=x-x²/2+x³/3+o(x³), sin x=x-x³/6+o(x³), cos x=1-x²/2+x⁴/24+o(x⁴), tan x=x+x³/3+o(x³). Les équivalents servent à remplacer une expression par son terme dominant dans un quotient ou une série à termes positifs.'},
{theme:'Suites',title:'Suites et sous-suites',content:'Une suite convergente impose la convergence de toutes ses sous-suites vers la même limite. Une suite croissante majorée converge ; croissante non majorée tend vers +∞. Les limites de suites récurrentes se cherchent souvent en résolvant l’équation l=f(l), puis en justifiant la convergence.'},
{theme:'Séries',title:'Critères de convergence',content:'Riemann : Σ1/n^α converge si α>1. Bertrand : Σ1/(n(ln n)^α) converge si α>1. Critère grossier : si u_n ne tend pas vers 0, Σu_n diverge. Pour les séries alternées, le critère de Leibniz donne une convergence si le terme positif décroît vers 0.'},
{theme:'Algèbre linéaire',title:'Rang, noyau, diagonalisation',content:'Théorème du rang : dim(E)=dim Ker(f)+rg(f). Une matrice est diagonalisable si elle possède une base de vecteurs propres. Une matrice réelle symétrique est orthogonalement diagonalisable. Les matrices semblables ont même trace, même déterminant et même polynôme caractéristique.'},
{theme:'Probabilités',title:'Lois usuelles et indépendance',content:'Bernoulli(p) : E=p, Var=p(1-p). Binomiale B(n,p) : E=np, Var=np(1-p). Poisson(λ) : E=Var=λ. Si X et Y sont indépendantes, E(XY)=E(X)E(Y) et Var(X+Y)=Var(X)+Var(Y).'}
];

function getStoredQuestions(){try{return JSON.parse(localStorage.getItem('qcm_questions')||'[]')}catch(e){return[]}}
function saveStoredQuestions(items){localStorage.setItem('qcm_questions',JSON.stringify(items))}
function getAllQuestions(){return [...DEFAULT_QUESTIONS,...getStoredQuestions()]}
function getThemes(){return [...new Set(getAllQuestions().map(q=>q.theme))].sort()}
function shuffleArray(array){const copy=[...array];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}return copy}
