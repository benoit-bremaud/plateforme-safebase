# Controllers

Ce dossier contient la logique métier de l'application. Les contrôleurs sont utilisés pour traiter les requêtes reçues par les routes et orchestrer les appels aux services et modèles. Ils sont le point central où la logique métier est mise en œuvre.

### Contenu typique

- **`dbController.js`** : Contient la logique pour gérer les bases de données, comme :
  - Ajouter une nouvelle base de données en validant les informations fournies.
  - Supprimer une base de données existante.
  - Vérifier si une base de données existe avant de la modifier ou la supprimer.
  - Appelle le service MySQL pour interagir avec la base de données.

- **`backupController.js`** : Contient la logique pour les opérations de sauvegarde :
  - Déclencher une sauvegarde en appelant le service de sauvegarde.
  - Lister les sauvegardes disponibles.
  - Restaurer une base de données à partir d'une sauvegarde.
  - Gérer les erreurs ou les échecs de sauvegarde/restauration.

Les contrôleurs sont la couche intermédiaire qui orchestre les différentes étapes de traitement avant de renvoyer une réponse à l'utilisateur via les routes.
