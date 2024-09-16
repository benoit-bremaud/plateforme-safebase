# SafeBase

SafeBase est une solution complète de gestion de bases de données, de sauvegardes automatisées, de gestion des versions, et de surveillance en temps réel, présentée sous forme d'une API REST. Ce projet utilise des technologies modernes telles que **Fastify** pour le backend, **Angular** pour le frontend, et **MySQL** comme base de données, le tout orchestré avec **Docker Compose**.

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Démarrage du projet](#démarrage-du-projet)
- [Commandes Docker Compose courantes](#commandes-docker-compose-courantes)
- [Intégration continue (CI)](#intégration-continue-ci)
- [Structure du projet](#structure-du-projet)
- [Gestion des variables d'environnement et des secrets](#gestion-des-variables-denvironnement-et-des-secrets)
- [Contribution](#contribution)
- [Licence](#licence)

## Fonctionnalités

- Gestion automatisée des sauvegardes de bases de données.
- API REST avec **Fastify** pour la gestion des sauvegardes et de la surveillance.
- Interface utilisateur en **Angular** pour la gestion en temps réel.
- Utilisation de **MySQL** pour la gestion des données.
- Intégration de **Docker Compose** pour faciliter le déploiement et l'exécution en local.
- **Intégration continue (CI)** pour automatiser les tests et vérifier la qualité du code.

## Technologies utilisées

- **Fastify** : Backend performant pour les API REST.
- **Angular** : Frontend moderne pour une gestion en temps réel.
- **MySQL** : Base de données relationnelle pour stocker les données.
- **Docker Compose** : Orchestration des services de l'application.
- **GitHub Actions** : Pour l'intégration continue et les tests automatisés.
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

- **Arrêter les services** :

  ```bash
  docker-compose down
  ```

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

## Intégration continue (CI)

Le projet SafeBase utilise **GitHub Actions** pour l'intégration continue, afin d'assurer que chaque modification du code est automatiquement testée et validée avant d'être fusionnée dans les branches principales.

### Workflows CI

Le workflow CI est défini dans le fichier `.github/workflows/ci.yml`. Voici un résumé des jobs inclus :

1. **backend-tests**
   - Exécution des tests unitaires et des vérifications de style pour le backend (API Fastify).
   - Utilise Node.js 18 pour garantir la compatibilité avec l'environnement Docker de production.

2. **frontend-tests**
   - Exécution des tests unitaires pour le frontend (Angular) ainsi que des tests end-to-end avec **Cypress**.
   - Vérification de la qualité du code avec ESLint.

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

## Gestion des variables d'environnement et des secrets

### Configuration des fichiers `.env`

Pour configurer les variables d'environnement en local, vous devez créer un fichier `.env` dans les répertoires **backend** et **frontend**.

- Exemple pour **backend** : 

```bash
MYSQL_HOST=localhost
MYSQL_USER=safebase_user
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=safebase_db
PORT=3000
```

- Exemple pour **frontend** :

```bash
API_URL=http://localhost:3000/api
```

Pour plus de détails, consultez la documentation sur [la configuration des fichiers `.env`](docs/env-configuration.md).

### Gestion des secrets dans GitHub

Pour les environnements de production et CI, les secrets doivent être stockés en toute sécurité dans **GitHub Secrets**. Cela inclut des informations comme les identifiants de base de données et les clés API.

Pour plus d'informations sur la gestion des secrets, consultez [la documentation sur GitHub Secrets](docs/github-secrets.md).

### Validation et tests

Après avoir configuré les variables d'environnement ou les secrets, assurez-vous de valider leur bon fonctionnement via des tests.

Pour en savoir plus sur la validation et les tests, consultez [la documentation sur la validation des variables et secrets](docs/validation-tests.md).

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez contribuer, veuillez suivre ces étapes :

1. Forkez le projet.
2. Créez une nouvelle branche (`git checkout -b feature/nom-de-la-fonctionnalité`).
3. Commitez vos modifications (`git commit -m 'Ajout de la fonctionnalité XYZ'`).
4. Poussez vers la branche (`git push origin feature/nom-de-la-fonctionnalité`).
5. Ouvrez une **Pull Request**.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
