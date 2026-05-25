const PROBABILITY_EXAM_EXERCISES = [
  {
    level:8,year:'1A',module:'Probabilités',theme:'Dénombrement',difficulty:'intermédiaire',exercises:[
      {id:'prob-8-1',title:'Mains de cartes',statement:'Dans un jeu de 32 cartes, on tire une main de 5 cartes. 1) Combien y a-t-il de mains possibles ? 2) Combien contiennent exactement deux as ? 3) En déduire la probabilité correspondante.',solution:'L’ordre ne compte pas : nombre total C(32,5). Pour exactement deux as : choisir 2 as parmi 4, puis 3 cartes parmi les 28 non-as : C(4,2)C(28,3). La probabilité vaut C(4,2)C(28,3)/C(32,5).'},
      {id:'prob-8-2',title:'Anagrammes avec répétitions',statement:'Combien d’anagrammes distincts peut-on former avec le mot MATHEMATIQUES en tenant compte des répétitions ?',solution:'On compte les lettres répétées. Le mot a 12 lettres. Les répétitions sont M deux fois, A deux fois, T deux fois, E deux fois. Les autres lettres sont simples. Le nombre est 12!/(2!2!2!2!).'},
      {id:'prob-8-3',title:'Choix d’un comité',statement:'Une classe contient 12 filles et 10 garçons. On forme un comité de 5 élèves. 1) Combien de comités possibles ? 2) Combien avec au moins 2 filles ?',solution:'Total : C(22,5). Pour au moins 2 filles : somme pour k=2 à 5 de C(12,k)C(10,5-k). On peut aussi faire total moins 0 fille moins 1 fille : C(22,5)-C(10,5)-C(12,1)C(10,4).'},
      {id:'prob-8-4',title:'Surjections simples',statement:'On répartit 5 objets distincts dans 3 boîtes distinctes. Combien de répartitions utilisent toutes les boîtes ?',solution:'Nombre total : 3^5. On retire les répartitions qui laissent au moins une boîte vide. Par inclusion-exclusion : 3^5 - C(3,1)2^5 + C(3,2)1^5 = 243-96+3=150.'}
    ]
  },
  {
    level:9,year:'1A',module:'Probabilités',theme:'Probabilités finies',difficulty:'intermédiaire',exercises:[
      {id:'prob-9-1',title:'Formule de Bayes — test',statement:'Une maladie touche 1% d’une population. Un test est positif avec probabilité 0,95 si la personne est malade et 0,05 si elle ne l’est pas. Calculer la probabilité d’être malade sachant que le test est positif.',solution:'Soit M malade et T positif. P(M)=0,01, P(T|M)=0,95, P(T|M^c)=0,05. P(T)=0,95×0,01+0,05×0,99=0,059. Donc P(M|T)=0,0095/0,059≈0,161.'},
      {id:'prob-9-2',title:'Indépendance ou incompatibilité',statement:'Soient A et B deux événements avec P(A)=0,4, P(B)=0,5 et P(A∩B)=0,2. 1) Sont-ils indépendants ? 2) Sont-ils incompatibles ?',solution:'P(A)P(B)=0,4×0,5=0,2=P(A∩B). Ils sont indépendants. Ils ne sont pas incompatibles car P(A∩B)≠0.'},
      {id:'prob-9-3',title:'Probabilités totales',statement:'Une urne U1 contient 2 rouges et 3 noires, U2 contient 4 rouges et 1 noire. On choisit U1 avec probabilité 1/3 et U2 avec probabilité 2/3, puis on tire une boule. Calculer la probabilité de tirer rouge.',solution:'P(R)=P(U1)P(R|U1)+P(U2)P(R|U2)=1/3×2/5+2/3×4/5=2/15+8/15=10/15=2/3.'},
      {id:'prob-9-4',title:'Conditionnement successif',statement:'Une urne contient 3 rouges et 2 noires. On tire deux boules sans remise. Calculer la probabilité d’obtenir deux rouges, puis la probabilité que la deuxième soit rouge.',solution:'P(R1∩R2)=3/5×2/4=3/10. Pour la deuxième rouge : P(R2)=P(R1R2)+P(N1R2)=3/10 + 2/5×3/4 =3/10+3/10=3/5.'}
    ]
  },
  {
    level:21,year:'1A',module:'Probabilités',theme:'Variables aléatoires finies',difficulty:'intermédiaire',exercises:[
      {id:'prob-21-1',title:'Loi et espérance',statement:'Une variable X prend les valeurs 0,1,2 avec probabilités a, 2a, 3a. 1) Déterminer a. 2) Calculer E(X) et Var(X).',solution:'Somme des probabilités : 6a=1 donc a=1/6. E(X)=0×1/6+1×2/6+2×3/6=8/6=4/3. E(X²)=1×2/6+4×3/6=14/6=7/3. Var(X)=7/3-(4/3)²=21/9-16/9=5/9.'},
      {id:'prob-21-2',title:'Somme d’indicatrices',statement:'On lance n fois une pièce donnant pile avec probabilité p. X est le nombre de piles. Retrouver E(X) par les indicatrices.',solution:'Écrire X=I1+...+In, où Ik vaut 1 si le k-ième lancer donne pile. E(Ik)=p. Par linéarité de l’espérance, E(X)=np. L’indépendance n’est pas nécessaire pour la linéarité, mais elle intervient pour la variance.'},
      {id:'prob-21-3',title:'Gain aléatoire',statement:'Un jeu rapporte 10€ avec probabilité 0,2, 2€ avec probabilité 0,5, et fait perdre 4€ sinon. Calculer l’espérance et dire si le jeu est favorable.',solution:'La probabilité restante est 0,3. E(G)=10×0,2+2×0,5-4×0,3=2+1-1,2=1,8. L’espérance est positive : le jeu est favorable au joueur en moyenne.'},
      {id:'prob-21-4',title:'Bernoulli et variance',statement:'Soit X une Bernoulli(p). Montrer que Var(X)=p(1-p).',solution:'Comme X vaut 0 ou 1, X²=X. Donc E(X)=p et E(X²)=p. Par Koenig-Huygens, Var(X)=E(X²)-E(X)²=p-p²=p(1-p).'}
    ]
  },
  {
    level:14,year:'2A',module:'Probabilités',theme:'Variables aléatoires discrètes',difficulty:'concours',exercises:[
      {id:'prob-14-1',title:'Loi géométrique',statement:'Soit X une variable géométrique de paramètre p sur N* : P(X=k)=(1-p)^{k-1}p. 1) Vérifier que c’est une loi. 2) Donner E(X).',solution:'La somme vaut pΣ_{k≥1}(1-p)^{k-1}=p/(1-(1-p))=1. L’espérance classique vaut 1/p, obtenue en utilisant Σ kq^{k-1}=1/(1-q)^2 avec q=1-p.'},
      {id:'prob-14-2',title:'Poisson et somme',statement:'Soit X~P(λ). 1) Vérifier que les probabilités somment à 1. 2) Calculer E(X).',solution:'Σ e^{-λ}λ^k/k!=e^{-λ}e^λ=1. Pour l’espérance : Σ k e^{-λ}λ^k/k! = e^{-λ}λ Σ_{k≥1} λ^{k-1}/(k-1)! = λ.'},
      {id:'prob-14-3',title:'Binomiale comme somme',statement:'Soit X~B(n,p). Montrer E(X)=np et Var(X)=np(1-p).',solution:'On écrit X=Σ_{i=1}^n I_i avec I_i Bernoulli(p) indépendantes. Alors E(X)=ΣE(I_i)=np. La variance d’une somme indépendante est la somme des variances : Var(X)=np(1-p).'},
      {id:'prob-14-4',title:'Fonction d’une variable discrète',statement:'X prend les valeurs -1,0,1 avec probabilités 1/4,1/2,1/4. Calculer E(X), Var(X), E(X²+2X).',solution:'E(X)=(-1)/4+0+1/4=0. E(X²)=1/4+1/4=1/2, donc Var(X)=1/2. E(X²+2X)=E(X²)+2E(X)=1/2.'}
    ]
  },
  {
    level:15,year:'2A',module:'Probabilités',theme:'Variables à densité',difficulty:'concours',exercises:[
      {id:'prob-15-1',title:'Densité avec paramètre',statement:'Soit f(x)=a x sur [0,1], 0 ailleurs. 1) Déterminer a pour que f soit une densité. 2) Calculer E(X).',solution:'Il faut ∫_0^1 ax dx=a/2=1, donc a=2. E(X)=∫_0^1 x·2x dx=2/3.'},
      {id:'prob-15-2',title:'Loi exponentielle',statement:'Soit X de densité λe^{-λx} sur R+. 1) Calculer P(X>t). 2) Montrer la propriété sans mémoire.',solution:'P(X>t)=∫_t^∞ λe^{-λx}dx=e^{-λt}. Puis P(X>s+t|X>s)=P(X>s+t)/P(X>s)=e^{-λ(s+t)}/e^{-λs}=e^{-λt}=P(X>t).'},
      {id:'prob-15-3',title:'Fonction de répartition',statement:'Soit X uniforme sur [a,b]. Donner sa fonction de répartition et son espérance.',solution:'F(x)=0 si x<a, F(x)=(x-a)/(b-a) si a≤x≤b, F(x)=1 si x>b. L’espérance vaut (a+b)/2.'},
      {id:'prob-15-4',title:'Calcul par densité',statement:'Soit X de densité f(x)=2x sur [0,1]. Calculer P(X≥1/2) et E(X²).',solution:'P(X≥1/2)=∫_{1/2}^1 2x dx=[x²]_{1/2}^1=3/4. E(X²)=∫_0^1 x²·2x dx=2∫_0^1 x^3 dx=1/2.'}
    ]
  },
  {
    level:24,year:'2A',module:'Probabilités',theme:'Convergences et approximations',difficulty:'concours',exercises:[
      {id:'prob-24-1',title:'Inégalité de Markov',statement:'Soit X≥0 avec E(X)=3. Majorer P(X≥10).',solution:'Par Markov, P(X≥10)≤E(X)/10=3/10.'},
      {id:'prob-24-2',title:'Tchebychev',statement:'Soit X d’espérance 5 et variance 4. Majorer P(|X-5|≥3).',solution:'Par Tchebychev, P(|X-E(X)|≥a)≤Var(X)/a². Ici ≤4/9.'},
      {id:'prob-24-3',title:'Moyenne empirique',statement:'Soient X_1,...,X_n iid d’espérance μ et variance σ². Pour M_n=(X_1+...+X_n)/n, calculer E(M_n) et Var(M_n).',solution:'Par linéarité, E(M_n)=μ. Par indépendance, Var(M_n)=1/n² × nσ²=σ²/n.'},
      {id:'prob-24-4',title:'Loi faible',statement:'Utiliser Tchebychev pour montrer que M_n converge en probabilité vers μ.',solution:'P(|M_n-μ|≥ε)≤Var(M_n)/ε²=σ²/(nε²), qui tend vers 0. Donc M_n→μ en probabilité.'}
    ]
  },
  {
    level:34,year:'2A',module:'Probabilités',theme:'Couples de variables aléatoires',difficulty:'concours',exercises:[
      {id:'prob-34-1',title:'Tableau conjoint',statement:'On donne P(X=0,Y=0)=1/4, P(0,1)=1/4, P(1,0)=1/4, P(1,1)=1/4. 1) Trouver les marginales. 2) X et Y sont-elles indépendantes ?',solution:'P(X=0)=1/2, P(X=1)=1/2, idem pour Y. Chaque probabilité conjointe vaut 1/4, égale au produit des marginales 1/2×1/2. X et Y sont indépendantes.'},
      {id:'prob-34-2',title:'Covariance',statement:'Soient X,Y avec E(X)=1, E(Y)=2, E(XY)=5. Calculer Cov(X,Y).',solution:'Cov(X,Y)=E(XY)-E(X)E(Y)=5-1×2=3.'},
      {id:'prob-34-3',title:'Variance de somme',statement:'Soient Var(X)=2, Var(Y)=3 et Cov(X,Y)=-1. Calculer Var(X+Y).',solution:'Var(X+Y)=Var(X)+Var(Y)+2Cov(X,Y)=2+3-2=3.'},
      {id:'prob-34-4',title:'Indépendance et fonction',statement:'Si X et Y sont indépendantes, montrer que E(g(X)h(Y))=E(g(X))E(h(Y)) dans le cas discret fini.',solution:'On somme sur x,y : E(g(X)h(Y))=Σg(x)h(y)P(X=x,Y=y). Par indépendance, P(X=x,Y=y)=P(X=x)P(Y=y). La double somme se factorise.'}
    ]
  },
  {
    level:35,year:'2A',module:'Probabilités',theme:'Chaînes de Markov finies',difficulty:'concours',exercises:[
      {id:'prob-35-1',title:'Matrice de transition',statement:'Vérifier que P=[[0.7,0.3],[0.2,0.8]] est une matrice de transition et interpréter ses coefficients.',solution:'Chaque coefficient est positif et chaque ligne somme à 1. p_12=0.3 est la probabilité de passer de l’état 1 à l’état 2 en une étape.'},
      {id:'prob-35-2',title:'Distribution stationnaire',statement:'Trouver la distribution stationnaire de P=[[0.8,0.2],[0.3,0.7]].',solution:'Écrire π=(a,1-a). πP=π donne 0.8a+0.3(1-a)=a. Donc 0.5a=0.3, a=0.6. La distribution stationnaire est (0.6,0.4).'},
      {id:'prob-35-3',title:'Deux transitions',statement:'Pour P=[[0.5,0.5],[0.2,0.8]], calculer la loi après deux transitions à partir de μ=(1,0).',solution:'Après deux transitions, la loi est μP². On calcule μP=(0.5,0.5). Puis (0.5,0.5)P=(0.5×0.5+0.5×0.2, 0.5×0.5+0.5×0.8)=(0.35,0.65).'},
      {id:'prob-35-4',title:'État absorbant',statement:'Soit P=[[1,0],[p,1-p]] avec 0<p≤1. Interpréter l’état 1 et résoudre πP=π.',solution:'L’état 1 est absorbant car depuis 1 on reste en 1 avec probabilité 1. Pour π=(a,1-a), πP=(a+(1-a)p,(1-a)(1-p)). L’équation πP=π impose (1-a)p=0, donc a=1. La seule stationnaire est (1,0).'}
    ]
  }
];

if (typeof EXAM_EXERCISES !== 'undefined') {
  for (const group of PROBABILITY_EXAM_EXERCISES) {
    const idx = EXAM_EXERCISES.findIndex(g => g.level === group.level);
    if (idx >= 0) EXAM_EXERCISES[idx] = group;
    else EXAM_EXERCISES.push(group);
  }
}
