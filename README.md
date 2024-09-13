# SafeBase

SafeBase est une solution complète de gestion de bases de données, de sauvegardes automatisées, de gestion des versions, et de surveillance en temps réel, présentée sous forme d'une API REST. Ce projet utilise des technologies modernes telles que **Fastify** pour le backend, **Angular** pour le frontend, et **MySQL** comme base de données, le tout orchestré avec **Docker Compose**.

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Démarrage du projet](#démarrage-du-projet)
- [Commandes Docker Compose courantes](#commandes-docker-compose-courantes)
- [Structure du projet](#structure-du-projet)
- [Contribution](#contribution)
- [Licence](#licence)

## Fonctionnalités

- Gestion automatisée des sauvegardes de bases de données.
- API REST avec **Fastify** pour la gestion des sauvegardes et de la surveillance.
- Interface utilisateur en **Angular** pour la gestion en temps réel.
- Utilisation de **MySQL** pour la gestion des données.
- Intégration de **Docker Compose** pour faciliter le déploiement et l'exécution en local.
  
## Technologies utilisées

- **Fastify** : Backend performant pour les API REST.
- **Angular** : Frontend moderne pour une gestion en temps réel.
- **MySQL** : Base de données relationnelle pour stocker les données.
- **Docker Compose** : Orchestration des services de l'application.
- **TypeScript** : Utilisé à la fois dans le frontend et le backend pour améliorer la maintenabilité et la sécurité du code.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- **Git** : Pour cloner le projet.
- **Node.js** (version 18 ou supérieure) et **npm**.
- **Docker** et **Docker Compose** : Pour exécuter les services de l'application dans des conteneurs.

## Installation

1. Clonez le repository :

   ```bash
   git clone https://github.com/votre-utilisateur/plateforme-safebase.git
   cd plateforme-safebase
   ```

2. Installez les dépendances pour le frontend et le backend :

   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

## Démarrage du projet

Utilisez Docker Compose pour démarrer tous les services nécessaires à l'application SafeBase.

1. Pour démarrer les services (backend, frontend, et MySQL), exécutez la commande suivante dans le répertoire racine du projet :

   ```bash
   docker-compose up --build
   ```

   Cela démarrera le frontend, le backend, et le service MySQL. Vous pouvez accéder aux différents services via les ports suivants :

   - **Frontend (Angular)** : [http://localhost:4200](http://localhost:4200)
   - **Backend (Fastify)** : [http://localhost:3000](http://localhost:3000)
   - **MySQL** est disponible sur le port `3306`.

2. Si vous apportez des modifications au code, redémarrez Docker Compose avec la commande suivante pour appliquer les changements :

   ```bash
   docker-compose up --build
   ```

## Commandes Docker Compose courantes

- **Démarrer les services** :
  
  ```bash
  docker-compose up
  ```

  Cette commande démarre tous les services définis dans le fichier `docker-compose.yml`.

- **Arrêter les services** :

  ```bash
  docker-compose down
  ```

  Cela arrête tous les services et supprime les conteneurs, les réseaux et les volumes créés.

- **Voir les logs** :

  ```bash
  docker-compose logs
  ```

  Vous pouvez aussi voir les logs d'un service spécifique :

  ```bash
  docker-compose logs backend
  ```

- **Vérifier l'état des conteneurs** :

  ```bash
  docker-compose ps
  ```

## Structure du projet

Voici un aperçu de la structure du projet :

```
/plateforme-safebase
├── backend/                # Code backend avec Fastify
│   ├── src/                # Code source du backend (routes, services)
│   ├── Dockerfile          # Dockerfile pour le backend
│   └── package.json        # Fichier de configuration des dépendances
├── frontend/               # Code frontend avec Angular
│   ├── src/                # Code source du frontend
│   ├── Dockerfile          # Dockerfile pour le frontend
│   └── package.json        # Fichier de configuration des dépendances
├── docker-compose.yml      # Fichier Docker Compose pour orchestrer les services
└── README.md               # Ce fichier
```

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez contribuer, veuillez suivre ces étapes :

1. Forkez le projet.
2. Créez une nouvelle branche (`git checkout -b feature/nom-de-la-fonctionnalité`).
3. Commitez vos modifications (`git commit -m 'Ajout de la fonctionnalité XYZ'`).
4. Poussez vers la branche (`git push origin feature/nom-de-la-fonctionnalité`).
5. Ouvrez une **Pull Request**.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
