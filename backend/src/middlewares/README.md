# Middlewares

Ce dossier contient les middlewares, qui sont des fonctions exécutées avant ou après les routes pour gérer des fonctionnalités transversales comme l'authentification, la gestion des erreurs ou la validation des données.

### Contenu typique :

- **`auth.js`** : Middleware d'authentification :
  - Vérifie que l'utilisateur est authentifié avant de permettre l'accès à certaines routes.
  - Peut vérifier les tokens JWT ou d'autres méthodes d'authentification.

- **`errorHandler.js`** : Middleware global pour la gestion des erreurs :
  - Intercepte les erreurs qui se produisent dans l'application et renvoie une réponse appropriée.
  - Permet d'uniformiser la gestion des erreurs en renvoyant des codes d'erreur et des messages clairs.

- **`validation.js`** : Middleware pour valider les requêtes :
  - Valide les données d'entrée pour certaines routes avant de les transmettre aux contrôleurs (ex. : vérifier que tous les champs obligatoires sont présents).

Les middlewares permettent de gérer les aspects transversaux de manière centralisée, améliorant la cohérence et la réutilisabilité dans le projet.
