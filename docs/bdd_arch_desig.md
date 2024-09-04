# **Document de Conception de l'Architecture de la Base de Données - SafeBase**

## **1. Introduction**

### 1.1. **Objectif du Document**

- Décrire l'objectif du document, qui est de définir l'architecture de la base de données MySQL pour le projet SafeBase. Ce document servira de référence pour les développeurs, les administrateurs de bases de données, et les architectes systèmes.

### 1.2. **Portée**

- Décrire la portée du document, en précisant qu'il couvre la conception des tables, des relations, des schémas de base de données, et des stratégies de gestion des données. Ce document fait également référence aux diagrammes UML pour illustrer la conception.

### 1.3. **Références**

- Lister les documents de référence, tels que :
  - **Backend Architecture Design Document**
  - **Technical Requirements Document (TRD)**
  - **Diagrams UML** (diagrammes de classes, diagrammes de séquence)
  
### 1.4. **Glossaire**

- Inclure un glossaire pour définir les termes techniques utilisés dans le document.

## **2. Structure des Tables**

### 2.1. **Tables Principales**

- **Table des Bases de Données**
  - **Colonnes** : `id`, `name`, `type`, `host`, `port`, `username`, `password_hash`, `created_at`, `updated_at`.
  - **Description** : Contient les informations de connexion pour chaque base de données gérée par SafeBase.
  - **Contraintes** : `id` est la clé primaire, `name` est unique.
  - **Référence UML** : Voir le **diagramme de classes** pour une représentation visuelle de cette table et de ses relations.
- **Table des Sauvegardes**
  - **Colonnes** : `id`, `database_id`, `backup_path`, `backup_date`, `status`, `created_at`, `updated_at`.
  - **Description** : Enregistre les détails de chaque sauvegarde effectuée.
  - **Contraintes** : `id` est la clé primaire, `database_id` est une clé étrangère vers la table des bases de données.
  - **Référence UML** : Voir le **diagramme de classes** pour comprendre comment cette table interagit avec les autres.
- **Table des Restaurations**
  - **Colonnes** : `id`, `backup_id`, `restore_date`, `status`, `created_at`, `updated_at`.
  - **Description** : Gère les informations sur les restaurations réalisées à partir des sauvegardes.
  - **Contraintes** : `id` est la clé primaire, `backup_id` est une clé étrangère vers la table des sauvegardes.
  - **Référence UML** : Consulter le **diagramme de séquence** pour visualiser le processus de restauration impliquant cette table.
- **Table des Logs**
  - **Colonnes** : `id`, `action`, `details`, `user_id`, `created_at`.
  - **Description** : Stocke les journaux d'activité du système.
  - **Contraintes** : `id` est la clé primaire, `user_id` est une clé étrangère si applicable.
  - **Référence UML** : Voir le **diagramme de classes** pour l'intégration des logs avec d'autres entités du système.
- **Table des Configurations**
  - **Colonnes** : `id`, `key`, `value`, `description`, `created_at`, `updated_at`.
  - **Description** : Contient les paramètres de configuration globaux de l'application.
  - **Contraintes** : `id` est la clé primaire, `key` est unique.
  - **Référence UML** : Inclure dans le **diagramme de classes** pour voir comment les configurations interagissent avec d'autres composants.

### 2.2. **Relations Entre les Tables**

- **Base de Données ↔ Sauvegardes**
  - **Type de relation** : `One-to-Many`.
  - **Description** : Une base de données peut avoir plusieurs sauvegardes.
  - **Référence UML** : Voir le **diagramme de classes** pour une vue globale des relations entre ces entités.
- **Sauvegardes ↔ Restaurations**
  - **Type de relation** : `One-to-Many`.
  - **Description** : Une sauvegarde peut être utilisée pour plusieurs restaurations.
  - **Référence UML** : Consulter le **diagramme de séquence** pour visualiser les flux entre sauvegardes et restaurations.
- **Utilisateurs ↔ Logs**
  - **Type de relation** : `One-to-Many`.
  - **Description** : Un utilisateur peut générer plusieurs logs d'activités.
  - **Référence UML** : Inclure cette relation dans le **diagramme de classes** pour illustrer l'interaction entre les utilisateurs et les logs.

## **3. Schéma de la Base de Données**

### 3.1. **Diagramme Entité-Relation (ERD)**

- **Présentation du Schéma**
  - Présenter un diagramme entité-relation (ERD) qui montre les tables, les colonnes, les types de données, et les relations entre les tables.
  - **Outils suggérés** : MySQL Workbench, Lucidchart, Draw.io.
  - **Référence UML** : Le **diagramme de classes UML** peut être utilisé pour enrichir ou clarifier certaines parties du schéma ERD.

### 3.2. **Optimisation des Index**

- **Identification des Colonnes à Indexer**
  - Lister les colonnes critiques à indexer pour optimiser les performances des requêtes.
  - Exemples : `database_id` dans la table des sauvegardes, `backup_id` dans la table des restaurations.
- **Stratégie d'Indexation**
  - Décrire la stratégie d'indexation, y compris les types d'index utilisés (ex. : index unique, index composé).
  - Mentionner l'impact attendu sur les performances.

## **4. Gestion des Migrations de Schéma**

### 4.1. **Outils de Migration**

- **Outil Sélectionné** : Préciser l'outil utilisé pour gérer les migrations (ex. : Flyway, Liquibase, Sequelize si ORM est utilisé).
- **Raison du Choix** : Justifier le choix de l'outil en fonction des besoins du projet.

### 4.2. **Stratégie de Migration**

- **Ajout de Tables/Colonnes** : Décrire le processus pour ajouter de nouvelles tables ou colonnes sans perturber le service en production.
- **Modification de Schéma** : Décrire la méthode pour modifier la structure existante des tables (ex. : modification des types de données, ajout de contraintes).
- **Suppression de Tables/Colonnes** : Expliquer comment gérer la suppression de tables ou de colonnes tout en maintenant l'intégrité des données.
- **Référence UML** : Utiliser le **diagramme de séquence UML** pour illustrer comment les migrations sont appliquées dans le flux de travail.

### 4.3. **Versioning des Migrations**

- **Stratégie de Versioning** : Décrire comment les migrations seront versionnées et documentées.
- **Gestion des Dépendances** : Expliquer comment gérer les dépendances entre les migrations pour éviter les conflits ou les erreurs.

## **5. Sécurité des Données**

### 5.1. **Chiffrement des Données Sensibles**

- **Données à Chiffrer** : Identifier les données sensibles (ex. : `password_hash`, `backup_path`) qui doivent être chiffrées.
- **Méthodes de Chiffrement** : Décrire les algorithmes et méthodes de chiffrement utilisés (ex. : AES-256, bcrypt pour les mots de passe).
  
### 5.2. **Gestion des Accès et Permissions**

- **Rôles et Permissions** : Décrire les rôles d'utilisateur et les permissions associées pour accéder aux différentes tables.
- **Contrôles d'Accès** : Expliquer comment les contrôles d'accès sont appliqués au niveau de la base de données.

## **6. Documentation et Justifications Techniques**

### 6.1. **Justifications des Choix Techniques**

- **Pourquoi ces structures ?** : Justifier les choix techniques faits pour la conception des tables et des relations.
- **Scalabilité et Performance** : Expliquer comment la conception de la base de données supporte la scalabilité et optimise les performances.

### 6.2. **Diagrammes et Exemples**

- **Diagrammes UML** : Inclure les diagrammes de classes et de séquence pertinents pour illustrer les concepts décrits.
- **Exemples de Requêtes SQL** : Fournir des exemples de requêtes SQL pour les opérations courantes (ex. : récupération des dernières sauvegardes, restauration d'une base de données).

## **7. Révision et Validation**

### 7.1. **Processus de Validation**

- **Révision technique** : Décrire comment et par qui le document sera révisé pour garantir que l'architecture répond aux exigences fonction

nelles et non fonctionnelles.

- **Validation finale** : Faire valider le document par les parties prenantes clés (ex. : DBA, architecte système).

### 7.2. **Signatures**

- **Parties prenantes** : Inclure une section pour les signatures des responsables validant le document.

---

### **Conseils pour la Rédaction :**

1. **Clarté et Précision** : Assurez-vous que toutes les sections sont rédigées de manière claire et précise, avec des détails techniques complets.
2. **Utilisation des Diagrammes UML** : Intégrez les diagrammes UML dans le document pour une meilleure visualisation de la structure et des interactions.
3. **Collaboration** : Utilisez des outils comme Confluence, Google Docs, ou Notion pour permettre aux équipes de contribuer et de réviser le document.
4. **Mise à jour continue** : Le document doit être mis à jour régulièrement pour refléter les changements dans la conception ou les exigences du projet.
