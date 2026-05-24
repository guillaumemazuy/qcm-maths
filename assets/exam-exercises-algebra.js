const ALGEBRA_EXAM_EXERCISES = [
  {
    level:6,year:'1A',module:'Algèbre linéaire',theme:'Espaces vectoriels',difficulty:'intermédiaire',exercises:[
      {id:'alg-6-1',title:'Famille libre et base dans R³',statement:'Dans R³, on considère u=(1,1,0), v=(1,0,1), w=(0,1,1). 1) Montrer que (u,v,w) est une famille libre. 2) En déduire que c’est une base de R³. 3) Décomposer x=(1,2,3) dans cette base.',solution:'On résout au+bv+cw=0. Coordonnées : a+b=0, a+c=0, b+c=0. Des deux premières, b=-a et c=-a. La troisième donne -2a=0, donc a=b=c=0. La famille est libre. Elle contient trois vecteurs dans R³, donc c’est une base. Pour x=au+bv+cw : a+b=1, a+c=2, b+c=3. On obtient a=0, b=1, c=2.'},
      {id:'alg-6-2',title:'Sous-espace vectoriel',statement:'Soit F={(x,y,z)∈R³ | x+y+z=0}. 1) Montrer que F est un sous-espace vectoriel. 2) Donner une base et sa dimension.',solution:'L’équation est linéaire homogène. Le vecteur nul vérifie l’équation et F est stable par combinaison linéaire. On pose y=s, z=t, alors x=-s-t. Donc (x,y,z)=s(-1,1,0)+t(-1,0,1). Une base est [(-1,1,0),(-1,0,1)], dimension 2.'},
      {id:'alg-6-3',title:'Somme directe',statement:'Dans R², soient F=Vect((1,1)) et G=Vect((1,-1)). Montrer que R²=F⊕G.',solution:'Les deux vecteurs (1,1) et (1,-1) ne sont pas colinéaires, donc forment une base de R². Ainsi F+G=R². De plus F∩G={0} car un vecteur commun vérifierait a(1,1)=b(1,-1), donc a=b et a=-b, donc a=b=0. Somme directe.'},
      {id:'alg-6-4',title:'Application linéaire définie sur une base',statement:'Soit B=(e1,e2,e3) une base de E. On définit f(e1)=e1+e2, f(e2)=e2+e3, f(e3)=e1. Expliquer pourquoi f existe et est unique, puis écrire sa matrice dans B.',solution:'Une application linéaire est entièrement déterminée par l’image d’une base. Elle existe et est unique en prolongeant par linéarité. Les colonnes de la matrice sont les coordonnées des images : f(e1)=(1,1,0), f(e2)=(0,1,1), f(e3)=(1,0,0).'}
    ]
  },
  {
    level:7,year:'1A',module:'Algèbre linéaire',theme:'Matrices et systèmes',difficulty:'intermédiaire',exercises:[
      {id:'alg-7-1',title:'Inversion par Gauss',statement:'Soit A=[[1,2],[3,7]]. 1) Montrer que A est inversible. 2) Calculer A^{-1}. 3) Résoudre AX=(5,17).',solution:'det(A)=7-6=1, donc A est inversible. Pour une 2×2, A^{-1}=[[7,-2],[-3,1]]. Alors X=A^{-1}(5,17)=(35-34,-15+17)=(1,2).'},
      {id:'alg-7-2',title:'Rang avec paramètre',statement:'Soit A_a=[[1,1,1],[1,a,1],[1,1,a]]. Déterminer le rang selon a.',solution:'Soustraire L1 aux lignes 2 et 3 donne lignes (1,1,1), (0,a-1,0), (0,0,a-1). Si a≠1, trois pivots donc rang 3. Si a=1, toutes les lignes sont égales, rang 1.'},
      {id:'alg-7-3',title:'Système dépendant d’un paramètre',statement:'Résoudre selon a le système x+y+z=1, x+ay+z=1, x+y+az=1.',solution:'En soustrayant la première équation aux deux autres : (a-1)y=0 et (a-1)z=0. Si a≠1, y=z=0, puis x=1. Si a=1, les trois équations sont identiques : x+y+z=1, deux paramètres libres.'},
      {id:'alg-7-4',title:'Produit matriciel et interprétation',statement:'Soient A=[[1,1],[0,1]] et B=[[1,0],[1,1]]. Calculer AB et BA. Les matrices commutent-elles ?',solution:'AB=[[2,1],[1,1]]. BA=[[1,1],[1,2]]. Comme AB≠BA, les matrices ne commutent pas. Le produit matriciel n’est pas commutatif en général.'}
    ]
  },
  {
    level:20,year:'1A',module:'Algèbre linéaire',theme:'Déterminants',difficulty:'intermédiaire',exercises:[
      {id:'alg-20-1',title:'Déterminant triangulaire',statement:'Calculer le déterminant de A=[[2,1,3],[0,-1,4],[0,0,5]]. En déduire si A est inversible.',solution:'A est triangulaire supérieure, donc det(A)=2×(-1)×5=-10. Ce déterminant est non nul, donc A est inversible.'},
      {id:'alg-20-2',title:'Déterminant avec opérations sur lignes',statement:'Calculer det [[1,1,1],[1,2,3],[1,4,9]].',solution:'Soustraire L1 à L2 et L3 : det = det [[1,1,1],[0,1,2],[0,3,8]]. Développer selon la première colonne : determinant de [[1,2],[3,8]]=8-6=2.'},
      {id:'alg-20-3',title:'Paramètre et inversibilité',statement:'Soit A_a=[[a,1],[1,a]]. Déterminer les valeurs de a pour lesquelles A_a est inversible.',solution:'det(A_a)=a²-1=(a-1)(a+1). La matrice est inversible si et seulement si det≠0, donc a≠1 et a≠-1.'},
      {id:'alg-20-4',title:'Déterminant d’un produit',statement:'Soient A,B deux matrices 3×3 avec det(A)=2 et det(B)=-4. Calculer det(AB), det(A^{-1}) et det(3A).',solution:'det(AB)=det(A)det(B)=-8. det(A^{-1})=1/det(A)=1/2. Pour une matrice 3×3, det(3A)=3^3 det(A)=27×2=54.'}
    ]
  },
  {
    level:12,year:'2A',module:'Algèbre linéaire',theme:'Applications linéaires',difficulty:'concours',exercises:[
      {id:'alg-12-1',title:'Noyau et image',statement:'Soit f:R³→R³ définie par f(x,y,z)=(x+y,y+z,x+z). 1) Écrire la matrice de f. 2) Déterminer Ker(f). 3) Déterminer le rang de f.',solution:'La matrice dans la base canonique est [[1,1,0],[0,1,1],[1,0,1]]. Résoudre f(x,y,z)=0 donne x+y=0, y+z=0, x+z=0. On obtient x=-y, z=-y, puis -2y=0, donc x=y=z=0. Le noyau est nul, donc f est injective. En dimension 3, rang 3.'},
      {id:'alg-12-2',title:'Projecteur',statement:'Soit p un endomorphisme de E vérifiant p²=p. 1) Montrer que E=Ker(p)⊕Im(p). 2) Quelles sont les valeurs propres possibles de p ?',solution:'Pour tout x, x=(x-p(x))+p(x). On a p(x-p(x))=p(x)-p²(x)=0, donc x-p(x)∈Ker(p), et p(x)∈Im(p). L’intersection est nulle : si y=p(z) et p(y)=0, alors y=p(z)=p²(z)=p(y)=0. Donc somme directe. Si p(v)=λv, alors λ²=λ, donc λ=0 ou 1.'},
      {id:'alg-12-3',title:'Symétrie',statement:'Soit s un endomorphisme vérifiant s²=Id. Montrer que E=Ker(s-Id)⊕Ker(s+Id).',solution:'Pour tout x, poser u=(x+s(x))/2 et v=(x-s(x))/2. Alors s(u)=u et s(v)=-v, donc u∈Ker(s-Id), v∈Ker(s+Id), et x=u+v. L’intersection est nulle : si s(y)=y et s(y)=-y, alors y=0.'},
      {id:'alg-12-4',title:'Théorème du rang',statement:'Soit f:E→F linéaire avec dim(E)=5. On suppose dim Ker(f)=2. 1) Déterminer rg(f). 2) f peut-elle être injective ? 3) Si dim(F)=3, f peut-elle être surjective ?',solution:'Par le théorème du rang, rg(f)=5-2=3. f n’est pas injective car son noyau n’est pas nul. Si dim(F)=3, le rang vaut dim(F), donc f est surjective.'}
    ]
  },
  {
    level:13,year:'2A',module:'Algèbre linéaire',theme:'Réduction des endomorphismes',difficulty:'concours',exercises:[
      {id:'alg-13-1',title:'Diagonalisation d’une matrice triangulaire',statement:'Soit A=[[1,1,0],[0,2,0],[0,0,3]]. 1) Donner les valeurs propres. 2) A est-elle diagonalisable ?',solution:'A est triangulaire, ses valeurs propres sont 1,2,3. Elles sont distinctes et la matrice est de taille 3. Donc A est diagonalisable.'},
      {id:'alg-13-2',title:'Valeur propre et noyau',statement:'Soit A=[[2,1],[0,2]]. 1) Déterminer ses valeurs propres. 2) Est-elle diagonalisable ?',solution:'A est triangulaire, seule valeur propre 2 de multiplicité 2. A-2I=[[0,1],[0,0]], son noyau est défini par y=0, dimension 1. La somme des dimensions des sous-espaces propres vaut 1<2, donc A n’est pas diagonalisable.'},
      {id:'alg-13-3',title:'Trace et déterminant',statement:'Une matrice 3×3 a pour valeurs propres 1, -2 et 4. Donner sa trace, son déterminant et les valeurs propres possibles de A².',solution:'Trace =1-2+4=3. Déterminant =1×(-2)×4=-8. Les valeurs propres de A² sont les carrés : 1,4,16.'},
      {id:'alg-13-4',title:'Nilpotente',statement:'Soit A nilpotente : il existe p≥1 tel que A^p=0. Montrer que 0 est la seule valeur propre possible.',solution:'Si Av=λv avec v≠0, alors A^p v=λ^p v. Mais A^p=0, donc λ^p v=0. Comme v≠0, λ^p=0, donc λ=0.'}
    ]
  },
  {
    level:23,year:'2A',module:'Algèbre linéaire',theme:'Espaces euclidiens',difficulty:'concours',exercises:[
      {id:'alg-23-1',title:'Cauchy-Schwarz',statement:'Soit E euclidien. Démontrer l’inégalité de Cauchy-Schwarz.',solution:'Si y=0, c’est trivial. Sinon, pour tout t réel, ||x+ty||²≥0. Cela donne un trinôme en t : ||y||²t²+2<x,y>t+||x||²≥0. Son discriminant est ≤0, donc 4<x,y>²-4||x||²||y||²≤0, d’où |<x,y>|≤||x||||y||.'},
      {id:'alg-23-2',title:'Projection orthogonale sur une droite',statement:'Dans R³ euclidien, projeter x=(1,2,3) sur la droite dirigée par u=(1,1,1).',solution:'proj(x)=<x,u>/<u,u> u. On a <x,u>=6 et <u,u>=3. Donc proj(x)=2(1,1,1)=(2,2,2).'},
      {id:'alg-23-3',title:'Orthogonal d’un plan',statement:'Dans R³, déterminer l’orthogonal de F={x+y+z=0}.',solution:'F est le plan normal au vecteur n=(1,1,1). Son orthogonal est donc Vect((1,1,1)).'},
      {id:'alg-23-4',title:'Gram-Schmidt',statement:'Orthonormaliser la famille u=(1,0), v=(1,1) dans R².',solution:'Premier vecteur e1=(1,0). On retire à v sa projection sur e1 : v-<v,e1>e1=(1,1)-1(1,0)=(0,1). Normalisé, e2=(0,1). Base orthonormée : ((1,0),(0,1)).'}
    ]
  },
  {
    level:33,year:'2A',module:'Algèbre linéaire',theme:'Diagonalisation avancée',difficulty:'concours',exercises:[
      {id:'alg-33-1',title:'Polynôme annulateur scindé simple',statement:'Soit A telle que A²-3A+2I=0. 1) Quelles sont les valeurs propres possibles ? 2) Montrer que A est diagonalisable.',solution:'Le polynôme annulateur est P(X)=X²-3X+2=(X-1)(X-2). Toute valeur propre est racine de P, donc vaut 1 ou 2. Le polynôme annulateur est scindé à racines simples, donc A est diagonalisable.'},
      {id:'alg-33-2',title:'Projecteur et réduction',statement:'Soit p²=p. Montrer que p est diagonalisable et interpréter ses sous-espaces propres.',solution:'Le polynôme X(X-1) annule p et a deux racines simples. Donc p est diagonalisable. Le sous-espace propre associé à 0 est Ker(p), celui associé à 1 est Im(p).'},
      {id:'alg-33-3',title:'Symétrie et réduction',statement:'Soit s²=Id. Montrer que s est diagonalisable et préciser ses valeurs propres possibles.',solution:'Le polynôme X²-1=(X-1)(X+1) annule s, il est scindé à racines simples. Donc s est diagonalisable. Les valeurs propres possibles sont 1 et -1.'},
      {id:'alg-33-4',title:'Nilpotente et non diagonalisation',statement:'Soit A≠0 nilpotente. Montrer que si A est diagonalisable, alors contradiction.',solution:'Une nilpotente n’a que 0 comme valeur propre. Si elle était diagonalisable, elle serait semblable à une matrice diagonale dont tous les coefficients diagonaux sont 0, donc à la matrice nulle. Ainsi A serait nulle, contradiction.'}
    ]
  }
];

if (typeof EXAM_EXERCISES !== 'undefined') {
  for (const group of ALGEBRA_EXAM_EXERCISES) {
    const idx = EXAM_EXERCISES.findIndex(g => g.level === group.level);
    if (idx >= 0) EXAM_EXERCISES[idx] = group;
    else EXAM_EXERCISES.push(group);
  }
}
