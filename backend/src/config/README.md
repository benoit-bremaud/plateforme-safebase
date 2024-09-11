# Config

Ce dossier contient tous les fichiers de configuration de l'application, notamment les configurations des bases de données et des variables d'environnement. Il centralise les paramètres globaux pour que l'application puisse fonctionner dans différents environnements (développement, production).

### Contenu typique

- **`database.js`** : Configuration pour se connecter à la base de données MySQL/PostgreSQL :
  - Définit les informations de connexion (host, port, user, password, database).
  - Peut inclure des options comme le pool de connexions ou la gestion des erreurs.

- **`config.js`** : Variables d'environnement globales :
  - Définit des variables comme le port de l'application, les secrets JWT, ou les clés API.

La configuration est séparée de la logique métier pour rendre le code plus propre et faciliter la gestion des environnements multiples.
