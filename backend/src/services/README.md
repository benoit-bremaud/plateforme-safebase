# Services

Ce dossier contient des services réutilisables qui encapsulent la logique métier complexe ou les interactions avec des systèmes externes comme les bases de données. Les services permettent de centraliser et de réutiliser la logique métier à travers plusieurs contrôleurs ou routes.

### Contenu typique :

- **`dbService.js`** : Service pour gérer l'interaction avec la base de données :
  - Connexion à MySQL/PostgreSQL.
  - Ajouter, modifier, et supprimer des bases de données.
  - Gérer les transactions et les erreurs de connexion à la base de données.
  
- **`backupService.js`** : Service pour gérer les sauvegardes :
  - Déclenchement manuel d'une sauvegarde (utilisation de `mysqldump` ou `pg_dump`).
  - Gestion de l'emplacement des fichiers de sauvegarde.
  - Récupération des fichiers de sauvegarde pour restauration.

Les services permettent de décomposer la logique en unités modulaires et réutilisables, séparant ainsi les responsabilités entre la manipulation des données et les autres fonctionnalités.
