# QCM Maths Prépa

Application HTML autonome pour s'entraîner sur des QCM de mathématiques niveau prépa.

## Fonctionnalités

- 30 questions tirées aléatoirement à chaque test
- Base de questions difficiles
- Correction immédiate au clic
- Score mis à jour en direct
- Explications détaillées
- Compatible mobile et ordinateur
- 36 chapitres avec explications, exemple guidé en trois étapes et erreur fréquente à éviter
- Formules composées avec KaTeX : fractions, indices, sommes, matrices et produits scalaires
- Navigation et présentation communes aux cours, QCM, épreuves et pages d’administration

## Utilisation

Ouvrir `index.html` dans un navigateur.

Le site fonctionne sans compilation et sans accès à un CDN : le moteur mathématique et ses polices sont fournis dans le dépôt. Les liens « S’entraîner sur ce chapitre » et « Exercices type épreuves » ouvrent le thème correspondant.

## Modifier les contenus

Les fiches sont réparties dans `assets/courses-data.js`, `assets/courses-extra.js` et `assets/courses-extra-2.js`. Les explications et exemples guidés des 36 chapitres sont dans `assets/courses-guides.js`. Les exemples complémentaires restent dans `assets/course-practice*.js`.

Délimiter une formule dans le texte par `\(` et `\)`, ou une formule sur sa propre ligne par `\[` et `\]`. Dans une chaîne JavaScript ordinaire, doubler les antislashs ; `String.raw` permet de saisir directement le TeX. Utiliser `\lt` et `\gt` pour les inégalités, afin d’éviter que le navigateur ne les interprète comme du HTML. Les contenus ajoutés localement dans l’administration acceptent également ces délimiteurs.

Le rendu commun est assuré par `assets/site.js`, avec une sortie MathML pour les lecteurs d’écran. Après un changement de filtre ou une reconstruction du QCM, rappeler `renderMath` sur le bloc mis à jour. Les formules longues défilent dans leur propre bloc sur petit écran.

KaTeX 0.19.0 est fourni dans `assets/vendor/katex`, avec sa licence MIT et ses polices. Aucun service distant n’est requis pour le rendu mathématique.

## Vérification

Avec Node.js installé, exécuter `node --test tests/content.test.cjs`. Les contrôles couvrent la présence des contenus des 36 chapitres, la validité des formules et les questions générées depuis les cours.

## Déploiement GitHub Pages

Dans GitHub :

1. Aller dans **Settings**
2. Ouvrir **Pages**
3. Source : **Deploy from a branch**
4. Branch : `main`
5. Folder : `/root`
6. Sauvegarder

Le site sera ensuite accessible via l'URL GitHub Pages du repository.
