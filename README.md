# SafeBase

SafeBase est une solution complète de gestion de sauvegardes et de restaurations de bases de données sous forme d'une API REST. Le projet vise à automatiser les sauvegardes régulières, gérer les versions, et surveiller les bases de données en temps réel.

## Introduction

SafeBase permet aux entreprises de sécuriser et de gérer facilement leurs bases de données grâce à une API REST. L'application prend en charge la gestion des bases MySQL et PostgreSQL, l'automatisation des sauvegardes, ainsi que la restauration de versions spécifiques.

Les principales fonctionnalités incluent :

- Gestion des bases de données (ajout, modification, suppression)
- Sauvegardes automatiques programmées avec des tâches CRON
- Gestion des versions de sauvegardes
- Surveillance des bases de données et alertes en temps réel

## Installation

### Prérequis

- **Node.js** (version >= 14)
- **Docker** et **Docker Compose**
- **Git**

### Étapes d'installation

1. Clonez le repository GitHub :

    ```bash
    git clone https://github.com/username/SafeBase.git
    cd SafeBase
    ```

2. Installez les dépendances backend :

    ```bash
    cd backend
    npm install
    ```

3. Installez les dépendances frontend (si applicable) :

    ```bash
    cd frontend
    npm install
    ```

4. Démarrez l'application avec Docker Compose :

    ```bash
    docker-compose up
    ```

L'application sera accessible sur `http://localhost:3000` pour le backend et `http://localhost:4200` pour le frontend.

## Usage

### Démarrer le projet en local

1. Démarrez les services backend et frontend avec Docker Compose :

    ```bash
    docker-compose up
    ```

2. Vous pouvez accéder aux services suivants :
   - API REST : `http://localhost:3000`
   - Interface utilisateur : `http://localhost:4200`

### Endpoints API

- `GET /databases` : Liste toutes les bases de données.
- `POST /databases` : Ajoute une nouvelle base de données.
- `DELETE /databases/:id` : Supprime une base de données.
- `POST /backup` : Lance une sauvegarde manuelle.
- `GET /backups` : Liste toutes les sauvegardes.

## Contributing

Les contributions sont les bienvenues ! Pour contribuer au projet, veuillez suivre ces étapes :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalité`)
3. Commitez vos modifications (`git commit -m 'Ajout de ma fonctionnalité'`)
4. Poussez la branche (`git push origin feature/ma-fonctionnalité`)
5. Créez une pull request

Veuillez vous assurer que votre code suit les standards de style du projet (vérifié par ESLint et Prettier).

## License

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
