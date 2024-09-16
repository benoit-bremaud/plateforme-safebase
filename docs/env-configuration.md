# Configuration des fichiers `.env`

Ce document fournit des instructions détaillées sur la manière de configurer et d'utiliser les fichiers `.env` pour le projet **SafeBase** en environnement local. Ces fichiers permettent de définir des **variables d'environnement** qui facilitent la configuration des services, sans avoir à les hardcoder dans le code source.

## Pourquoi utiliser un fichier `.env` ?

Un fichier `.env` est utilisé pour définir des variables d'environnement spécifiques à l'application sans les inclure dans le code source. Cela permet de garder les informations sensibles (comme les identifiants de base de données, les clés API, etc.) **sécurisées** et **configurables** pour chaque environnement (développement, production, CI, etc.).

### Les avantages de l'utilisation d'un fichier `.env`

- **Sécurise les informations sensibles** : Ces fichiers ne sont pas committés dans le dépôt Git.
- **Facilite la gestion des environnements** : Il est possible de définir des valeurs différentes pour chaque environnement (développement, production, CI).
- **Flexibilité** : Facile à modifier sans toucher au code source.

---

## 1. Fichier `.env` pour le Backend

Le backend de **SafeBase** utilise **Fastify** et se connecte à une base de données **MySQL**. Le fichier `.env` pour le backend doit contenir les informations de connexion à la base de données et d'autres paramètres de configuration essentiels au bon fonctionnement du serveur.

### Exemple de fichier `.env` pour le Backend

Voici un exemple de fichier `.env` à placer dans le dossier **`backend/`**. Ce fichier doit être **personnalisé** selon votre environnement de développement.

**Chemin relatif** : `backend/.env`

```plaintext
# Configuration de la base de données MySQL
MYSQL_HOST=localhost
MYSQL_USER=safebase_user
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=safebase_db

# Port utilisé par le serveur Fastify
PORT=3000

# Autres variables si nécessaires (par exemple pour un service tiers)
# EXAMPLE_API_KEY=some_api_key
```

### Explications des variables

- **`MYSQL_HOST`** : L'hôte de la base de données MySQL. En développement local, cela pourrait être `localhost`. En production, cela pourrait être l'IP ou le nom de domaine du serveur de base de données.
- **`MYSQL_USER`** : Le nom d'utilisateur MySQL utilisé pour se connecter à la base de données.
- **`MYSQL_PASSWORD`** : Le mot de passe associé à l'utilisateur MySQL.
- **`MYSQL_DATABASE`** : Le nom de la base de données à laquelle l'application se connecte.
- **`PORT`** : Le port sur lequel le serveur Fastify sera exécuté. Par défaut, Fastify utilise le port `3000`.

### Création du fichier `.env`

1. À partir de l'exemple ci-dessus, **copiez le contenu** dans un fichier que vous nommerez `.env`.
2. Placez ce fichier dans le répertoire **backend** de votre projet.
3. **Modifiez les valeurs** selon votre configuration locale ou les exigences de votre environnement de production.

---

## 2. Fichier `.env` pour le Frontend

Le frontend de **SafeBase** est développé avec **Angular** et doit être capable de communiquer avec le backend via une API. Le fichier `.env` pour le frontend est utilisé pour configurer l'URL de l'API.

Bien qu'Angular ne prenne pas en charge les fichiers `.env` de manière native, nous pouvons utiliser les fichiers d'environnement comme `environment.ts` pour définir l'URL de l'API.

### Exemple de fichier `environment.ts` pour le Frontend

**Chemin relatif** : `frontend/src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'  // URL de l'API en développement
};
```

### Exemple de fichier `environment.prod.ts` pour le Frontend (Production)

**Chemin relatif** : `frontend/src/environments/environment.prod.ts`

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.yourproductiondomain.com/api'  // URL de l'API en production
};
```

### Explications des variables

- **`production`** : Un booléen qui indique si l'application tourne en mode production (`true`) ou en mode développement (`false`).
- **`apiUrl`** : L'URL de l'API backend que l'application Angular doit appeler. En mode développement, l'URL pointe généralement vers `localhost`. En production, l'URL sera l'adresse réelle de l'API.

---

## 3. Ajouter `.env` à `.gitignore`

Il est essentiel que les fichiers `.env` contenant des informations sensibles ne soient **pas** ajoutés au dépôt Git. Pour cela, vous devez vous assurer que les fichiers `.env` sont bien ignorés par Git.

### Ajoutez cette ligne à votre fichier **`.gitignore`** dans le répertoire **backend** et **frontend**

**Chemin relatif** : `backend/.gitignore` et `frontend/.gitignore`

```plaintext
# Ignorer les fichiers .env
.env
```

---

## 4. Bonnes pratiques

### Séparation des environnements

- **Développement** : Utilisez un fichier `.env` adapté à l'environnement de développement. Vous pouvez avoir des variables moins sécurisées (comme des mots de passe simples) pour simplifier les tests locaux.
- **Production** : Assurez-vous que vos fichiers `.env` en production ne sont jamais exposés publiquement. Utilisez des variables sécurisées pour éviter les vulnérabilités.

### Ne jamais committer les fichiers `.env`

- Ne commitez **jamais** votre fichier `.env` dans votre dépôt Git. Cela pourrait exposer des informations sensibles à des tiers.

### Sauvegarde des secrets

- Si vous travaillez en équipe, assurez-vous de partager les secrets d'une manière **sécurisée** avec les membres de l'équipe (via un gestionnaire de secrets ou un outil comme Vault).

---

## 5. En savoir plus

Pour en savoir plus sur la gestion des variables d'environnement dans Angular et Node.js, vous pouvez consulter la [documentation officielle de dotenv](https://www.npmjs.com/package/dotenv) pour le backend et les [environnements Angular](https://angular.io/guide/build) pour le frontend.

Pour plus d'informations sur la gestion des secrets et des environnements dans GitHub, veuillez consulter le document [GitHub Secrets](github-secrets.md).

---

Ce fichier donne une vue d'ensemble claire sur la manière de configurer les fichiers `.env` pour le projet SafeBase, en fournissant des exemples et des conseils pour chaque partie (backend et frontend). Si vous avez des questions, n'hésitez pas à consulter les sections supplémentaires pour plus de détails.
