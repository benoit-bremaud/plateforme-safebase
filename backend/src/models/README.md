# Models

Ce dossier contient les modèles de données, utilisés pour définir la structure des tables et des entités de la base de données. Si vous utilisez un ORM, chaque modèle mappe une table de la base de données à un objet JavaScript.

### Contenu typique

- **`dbModel.js`** : Définit la structure de la table des bases de données :
  - Champs typiques : `id`, `name`, `type`, `host`, `port`, `user`, `password`.
  - Décrit les relations entre les bases de données (MySQL/PostgreSQL) et le système SafeBase.
  - Utilisé par les services pour interagir avec les données via l'ORM ou des requêtes SQL directes.

- **`backupModel.js`** : Modèle pour la gestion des sauvegardes :
  - Définit la structure des sauvegardes : `id`, `databaseId`, `date`, `location`, `status`.
  - Utilisé pour stocker et récupérer des informations sur les sauvegardes effectuées.

Les modèles sont directement liés à la base de données et définissent comment les données sont structurées et récupérées.
