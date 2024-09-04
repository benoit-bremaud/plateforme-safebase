# **Document de Conception de l'Architecture Backend - SafeBase**

## **1. Introduction**

### 1.1. **Objectif du Document**

- Décrire l'objectif de ce document, qui est de définir l'architecture backend du projet SafeBase. Le document servira de référence pour l'équipe de développement tout au long du projet.

### 1.2. **Portée**

- Expliquer la portée de ce document, qui couvre la structure des dossiers et fichiers du backend, la conception des endpoints de l'API REST, et l'intégration des bases de données.

### 1.3. **Références**

- Lister les documents de référence, tels que le **Technical Requirements Document (TRD)** et le **Functional Requirements Document (FRD)**.

### 1.4. **Glossaire**

- Inclure un glossaire des termes techniques utilisés dans le document.

## **2. Structure des Dossiers et Fichiers du Backend**

### 2.1. **Organisation Générale**

- **Arborescence des dossiers** : Présenter une vue d'ensemble de l'arborescence des dossiers du backend.
- **Description des dossiers** :
  - **Routes** : Contient les fichiers définissant les endpoints de l'API.
  - **Contrôleurs** : Contient la logique métier associée aux routes.
  - **Modèles** : Contient les schémas de données et les ORM (si applicable).
  - **Services** : Contient les services réutilisables, comme les interactions avec les bases de données ou les API externes.
  - **Middlewares** : Contient les middlewares pour la gestion des authentifications, des erreurs, etc.
  - **Configurations** : Contient les fichiers de configuration pour l'application, tels que les variables d'environnement.

### 2.2. **Exemple de Structure**

- **Exemple de structure de dossiers** :

  ```
  backend/
  ├── src/
  │   ├── routes/
  │   ├── controllers/
  │   ├── models/
  │   ├── services/
  │   ├── middlewares/
  │   └── config/
  ├── tests/
  ├── package.json
  ├── .env
  └── README.md
  ```

## **3. Conception des Endpoints de l'API REST**

### 3.1. **Liste des Endpoints**

- **Gestion des bases de données** :
  - **POST /databases** : Ajouter une nouvelle base de données.
  - **GET /databases** : Lister toutes les bases de données.
  - **PUT /databases/{id}** : Mettre à jour les informations d'une base de données.
  - **DELETE /databases/{id}** : Supprimer une base de données.

- **Gestion des sauvegardes** :
  - **POST /backups** : Déclencher une sauvegarde pour une base de données.
  - **GET /backups** : Lister toutes les sauvegardes disponibles.
  - **GET /backups/{id}** : Obtenir les détails d'une sauvegarde spécifique.
  - **DELETE /backups/{id}** : Supprimer une sauvegarde.

- **Gestion des restaurations** :
  - **POST /restores** : Restaurer une base de données à partir d'une sauvegarde.

### 3.2. **Détail des Endpoints**

- **Pour chaque endpoint** :
  - **Méthode HTTP** : Spécifier la méthode utilisée (GET, POST, PUT, DELETE).
  - **URL** : Spécifier le chemin de l'URL.
  - **Paramètres d'entrée** : Lister les paramètres requis (dans l'URL, le corps de la requête, ou les headers).
  - **Réponse** : Décrire la structure de la réponse (code HTTP, format JSON, etc.).
  - **Exemples** : Fournir des exemples de requêtes et de réponses.

### 3.3. **Schéma des Endpoints**

- Inclure un diagramme d'architecture pour visualiser les endpoints de l'API et leurs relations.

## **4. Intégration des Bases de Données**

### 4.1. **Connexion aux Bases de Données**

- **Stratégie de connexion** : Décrire comment les connexions aux bases de données MySQL et PostgreSQL sont gérées.
- **Gestion des connexions** :
  - **Pooling de connexions** : Expliquer comment les connexions sont regroupées pour améliorer les performances.
  - **Gestion des erreurs** : Décrire comment les erreurs de connexion sont traitées.

### 4.2. **Modélisation des Données**

- **Utilisation d'un ORM ou SQL brut** : Préciser si un ORM (ex. : Sequelize, TypeORM) est utilisé ou si les requêtes SQL sont écrites en SQL brut.
- **Mapping des modèles aux tables** : Décrire comment les modèles sont mappés aux tables des bases de données.

### 4.3. **Migrations de Schéma**

- **Stratégie de migration** : Expliquer comment les modifications du schéma des bases de données sont gérées.
- **Outils de migration** : Lister les outils utilisés (ex. : Sequelize migrations, Flyway).

### 4.4. **Sécurité des Données**

- **Chiffrement des données** : Décrire les méthodes de chiffrement des données sensibles au niveau de la base de données.
- **Gestion des permissions** : Expliquer comment les permissions d'accès aux données sont gérées.

## **5. Documentation et Justifications Techniques**

### 5.1. **Justifications des Choix Techniques**

- **Pourquoi ces technologies ?** : Justifier les choix technologiques faits pour le backend (framework, bases de données, outils de gestion de schéma, etc.).
- **Scalabilité et Performance** : Expliquer comment l'architecture backend supporte la scalabilité et les performances attendues.

### 5.2. **Diagrammes d'Architecture**

- **Diagramme de séquence** : Illustrer le flux de données entre les composants backend pour un cas d'utilisation critique (ex. : sauvegarde d'une base de données).
- **Diagramme de classes (optionnel)** : Si applicable, inclure un diagramme de classes pour montrer la relation entre les modèles et les tables de la base de données.

## **6. Révision et Validation**

### 6.1. **Processus de Validation**

- **Révision technique** : Décrire comment et par qui le document sera révisé pour garantir que l'architecture répond aux exigences techniques et fonctionnelles.
- **Validation finale** : Faire valider le document par les parties prenantes clés (ex. : lead developer, architecte système).

### 6.2. **Signatures**

- **Parties prenantes** : Inclure une section pour les signatures des responsables validant le document.

---

### **Conseils pour la Rédaction :**

1. **Utilisation d'outils collaboratifs** : Utilisez Confluence, Google Docs, ou Notion pour faciliter les contributions et révisions en équipe.
2. **Clarté et Cohérence** : Assurez-vous que toutes les sections sont rédigées de manière claire et cohérente, avec des exemples concrets lorsque nécessaire.
3. **Mise à jour continue** : Le document doit être mis à jour régulièrement pour refléter les changements dans l'architecture ou les exigences du projet.
