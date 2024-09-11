# Routes

Ce dossier contient toutes les routes (endpoints) exposées par l'API REST via Fastify. Chaque route est responsable de recevoir les requêtes HTTP, de valider les entrées, et de déléguer la logique métier aux contrôleurs.

### Contenu typique :

- **`dbRoutes.js`** : Définit les endpoints pour gérer les bases de données, comme :
  - **POST /databases** : Ajouter une nouvelle base de données.
  - **GET /databases** : Récupérer la liste des bases de données.
  - **PUT /databases/:id** : Modifier une base existante.
  - **DELETE /databases/:id** : Supprimer une base de données.
  
- **`backupRoutes.js`** : Définit les endpoints pour gérer les sauvegardes :
  - **POST /backups** : Déclencher une sauvegarde manuelle.
  - **GET /backups** : Récupérer la liste des sauvegardes disponibles.
  - **POST /restore/:backupId** : Restaurer une base de données à partir d'une sauvegarde.

Les routes définissent principalement l'interface de l'API et ne contiennent pas la logique métier. Elles dépendent des contrôleurs pour traiter les actions.
