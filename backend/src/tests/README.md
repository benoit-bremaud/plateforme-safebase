# Tests

Ce dossier contient les tests unitaires et d'intégration du projet, écrits avec **Jest** pour le backend. Les tests permettent de vérifier que chaque composant de l'application fonctionne correctement et répond aux attentes.

### Contenu typique :

- **`dbController.test.js`** : Teste les fonctionnalités du contrôleur des bases de données :
  - Vérifie que l'ajout, la modification, et la suppression des bases de données fonctionnent correctement.
  - Teste les cas d'erreur, comme l'ajout d'une base de données avec des informations invalides.

- **`backupService.test.js`** : Teste la logique des sauvegardes :
  - Vérifie que les sauvegardes sont bien effectuées et enregistrées dans le bon emplacement.
  - Simule des échecs de sauvegarde pour vérifier que l'application gère correctement les erreurs.

Les tests garantissent que les différentes parties de l'application fonctionnent bien individuellement et ensemble, tout en réduisant le risque de régressions lors de modifications du code.
