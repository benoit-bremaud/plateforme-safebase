## Backend Architecture Design Document - SafeBase

### 1. Introduction

Le document présente l'architecture backend du projet **SafeBase**, une solution complète de gestion des sauvegardes et des restaurations de bases de données. Ce backend, construit avec **Fastify** et intégrant **MySQL**, est conçu pour être modulaire, évolutif, et sécurisé. Il inclut la gestion des bases de données, l'automatisation des sauvegardes, la gestion des erreurs, et un système de surveillance en temps réel.

### 2. Structure des Dossiers

L'architecture backend suit une structure de dossiers claire pour séparer les différentes responsabilités.

- **`/routes`** : Contient les routes de l'API REST pour la gestion des bases de données, sauvegardes, et restaurations.
- **`/controllers`** : Contient la logique métier, notamment la gestion des actions CRUD et des processus de sauvegarde/restauration.
- **`/models`** : Contient les schémas de données pour les interactions avec MySQL (SQL brut).
- **`/services`** : Contient des services réutilisables, comme la gestion des connexions à la base de données et les interactions avec le système de fichiers pour les sauvegardes.
- **`/middlewares`** : Gestion des erreurs et de l’authentification.
- **`/config`** : Paramètres de configuration du projet (variables d'environnement, connexion MySQL).
- **`/tests`** : Tests unitaires (Jest) et end-to-end (Cypress).

### 3. Endpoints de l'API REST

Les endpoints principaux incluent :

- **Gestion des bases de données** :
  - `POST /databases` : Ajouter une base de données.
  - `GET /databases` : Lister les bases de données.
  - `PUT /databases/:id` : Mettre à jour une base de données.
  - `DELETE /databases/:id` : Supprimer une base de données.
  
- **Gestion des sauvegardes** :
  - `POST /backup` : Déclencher une sauvegarde manuelle.
  - `GET /backup` : Lister les sauvegardes disponibles.
  
- **Restauration de bases de données** :
  - `POST /restore/:id` : Restaurer une base de données à partir d'une sauvegarde.

Chaque endpoint est documenté avec les méthodes HTTP, les paramètres d'entrée, et les réponses attendues.

### 4. Stratégie de Connexion à MySQL

La connexion à MySQL est gérée via le module `mysql2`, avec utilisation d'un pool de connexions pour améliorer les performances et la gestion des erreurs.

- **Pool de Connexions** : Assure une réutilisation des connexions pour réduire la surcharge de création/destruction de connexions.
- **Gestion des Erreurs** : Toutes les erreurs de connexion ou de requête sont capturées et gérées via un middleware global.

### 5. Modèles de Données

Les interactions avec MySQL sont effectuées via des requêtes SQL brutes, simplifiant ainsi l’accès aux données sans utiliser d'ORM. Chaque modèle est associé à une table MySQL spécifique, par exemple :

- **`Database`** : Gère les informations sur les bases de données.
- **`Backup`** : Gère les informations sur les sauvegardes (date, chemin, taille).
- **`User`** : Gère les utilisateurs et leurs permissions.

### 6. Système de Sauvegarde et Restauration

Les sauvegardes sont gérées par des scripts exécutant des **dumps SQL** pour MySQL, et les restaurations se font en réimportant ces dumps dans la base de données.

- **Sauvegardes Automatisées** : Configurées via des tâches CRON qui s'exécutent à intervalles réguliers pour créer des sauvegardes.
- **Restauration** : Permet de restaurer une base à une version antérieure à partir d’un fichier de sauvegarde sélectionné.

### 7. Surveillance et Alertes

Un système de surveillance est mis en place pour suivre l’état des bases de données et des processus de sauvegarde/restauration en temps réel.

- **Alertes en Temps Réel** : Notifications en cas de problème (échec de sauvegarde, échec de restauration) via email et interface utilisateur.
- **Monitoring** : Intégré dans le backend, ce système déclenche des vérifications régulières via CRON et génère des logs pour toutes les opérations critiques.

### 8. Diagrammes d'Architecture

Le backend SafeBase est modélisé à l’aide de diagrammes UML, permettant de visualiser les relations et les flux de données entre les composants :

- **Diagramme de Classes** : Montre les relations entre les entités (Bases de Données, Sauvegardes, Utilisateurs).
- **Diagramme de Séquence** : Décrit les interactions lors d'une sauvegarde manuelle ou automatisée.

### 9. Tests et Validation

- **Tests Unitaires (Jest)** : Testent individuellement chaque route et service, notamment les CRUD pour les bases de données et les sauvegardes.
- **Tests End-to-End (Cypress)** : Simulent des scénarios utilisateur complets pour vérifier l'intégration backend-frontend, notamment pour les processus critiques comme les sauvegardes et restaurations.

### 10. Justifications Techniques

- **Fastify** : Choisi pour ses performances, sa simplicité, et sa compatibilité avec TypeScript.
- **MySQL** : Base de données relationnelle robuste et bien supportée pour la gestion des données transactionnelles.
- **Docker** : Utilisé pour containeriser l'application et simplifier le déploiement en production.

### Conclusion

L’architecture backend de SafeBase a été conçue pour être robuste, modulaire, et facile à maintenir. Elle garantit la sécurité des données, la fiabilité des sauvegardes, et une intégration simple avec d'autres composants tels que le frontend et le système de surveillance.
