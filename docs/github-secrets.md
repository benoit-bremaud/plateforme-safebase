# Gestion des Secrets dans GitHub

Dans ce document, nous allons expliquer comment gérer les **secrets** dans GitHub pour les environnements de **production** et d'**intégration continue (CI)**. Les secrets incluent des informations sensibles telles que les identifiants de base de données, les clés API, et d'autres données confidentielles nécessaires au bon fonctionnement de l'application en production ou lors des pipelines CI/CD.

## Pourquoi utiliser GitHub Secrets ?

**GitHub Secrets** permet de stocker des données sensibles en toute sécurité et de les utiliser dans vos **workflows GitHub Actions**. Contrairement aux variables d'environnement locales ou aux fichiers `.env`, les secrets GitHub ne sont jamais visibles dans le code source et ne sont accessibles que lors de l'exécution des workflows GitHub Actions.

### Avantages :

- **Sécurisé** : Les secrets sont stockés de manière chiffrée et ne sont jamais exposés publiquement.
- **Contrôle d'accès** : Seuls les workflows GitHub et les administrateurs du dépôt peuvent accéder à ces secrets.
- **Simplification des déploiements CI/CD** : Les secrets peuvent être utilisés pour automatiser des tâches telles que le déploiement ou l'exécution de tests sans compromettre la sécurité des informations sensibles.

---

## 1. Accéder à la section "Secrets and Variables" sur GitHub

### Étapes pour accéder à la gestion des secrets :

1. **Accédez à votre dépôt GitHub** où se trouve le projet SafeBase.
2. Cliquez sur l'onglet **Settings** (Paramètres).
3. Dans le menu de gauche, cliquez sur **Secrets and variables** puis sur **Actions**.
4. Vous verrez deux onglets :
   - **Secrets** : Pour les informations sensibles (comme les identifiants de base de données).
   - **Variables** : Pour les informations non sensibles (comme des configurations spécifiques).

### Créer un secret GitHub :

1. Dans l'onglet **Secrets**, cliquez sur **New repository secret**.
2. Donnez un nom à votre secret. Utilisez des noms explicites et en majuscules, par exemple :
   - `PROD_DB_HOST`
   - `PROD_DB_USER`
   - `PROD_DB_PASSWORD`
   - `CI_API_KEY`
   - `CI_DB_PASSWORD`
3. Saisissez la valeur du secret (par exemple, le mot de passe de la base de données) dans le champ de saisie.
4. Cliquez sur **Add secret** pour enregistrer.

---

## 2. Exemples de secrets pour les environnements de production et CI

Voici une liste des secrets que vous devriez configurer pour les environnements **production** et **CI**.

| Secret Name           | Description                                      |
|-----------------------|--------------------------------------------------|
| `PROD_DB_HOST`        | Hôte de la base de données en production         |
| `PROD_DB_USER`        | Utilisateur de la base de données en production  |
| `PROD_DB_PASSWORD`    | Mot de passe de la base de données en production |
| `CI_API_KEY`          | Clé API utilisée pour l'intégration continue     |
| `CI_DB_PASSWORD`      | Mot de passe pour les tests de base de données   |

### Exemples d'utilisation des secrets :

- **Production** :
  - Utilisez `PROD_DB_HOST`, `PROD_DB_USER`, et `PROD_DB_PASSWORD` pour configurer les connexions à la base de données dans l'environnement de production.
  
- **CI/CD** :
  - Utilisez `CI_API_KEY` et `CI_DB_PASSWORD` pour configurer les tests automatiques et les déploiements sans exposer les informations sensibles.

---

## 3. Utilisation des Secrets dans les Workflows GitHub Actions

Une fois les secrets créés dans GitHub, vous pouvez les utiliser dans vos **workflows GitHub Actions**. Les secrets sont accessibles via la syntaxe **`${{ secrets.SECRET_NAME }}`**.

### Exemple d'utilisation dans un fichier Workflow CI

Voici un exemple de fichier **`ci.yml`** pour GitHub Actions qui utilise des secrets pour se connecter à une base de données et exécuter des tests.

**Chemin relatif** : `.github/workflows/ci.yml`

```yaml
name: Backend CI

on:
  push:
    branches:
      - main
      - develop
  pull_request:
    branches:
      - main
      - develop

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'

    - name: Install dependencies
      run: |
        cd backend
        npm install

    - name: Set up environment variables
      run: |
        echo "MYSQL_HOST=${{ secrets.PROD_DB_HOST }}" >> backend/.env
        echo "MYSQL_USER=${{ secrets.PROD_DB_USER }}" >> backend/.env
        echo "MYSQL_PASSWORD=${{ secrets.PROD_DB_PASSWORD }}" >> backend/.env

    - name: Run tests
      run: |
        cd backend
        npm test
```

### Explication de l'exemple :

1. **Checkout du code** : Le workflow commence par vérifier le code du dépôt avec `actions/checkout@v2`.
2. **Installation des dépendances** : Utilisation de `npm install` pour installer les packages Node.js du backend.
3. **Définition des variables d'environnement** : Les secrets `PROD_DB_HOST`, `PROD_DB_USER`, et `PROD_DB_PASSWORD` sont écrits dans un fichier `.env` dans le répertoire `backend/`.
4. **Exécution des tests** : Après la configuration des variables d'environnement, les tests sont exécutés avec `npm test`.

---

## 4. Gestion des secrets pour des environnements multiples

GitHub permet d'organiser des **environnements multiples** pour les secrets, comme **développement**, **production**, et **staging**. Vous pouvez créer des secrets spécifiques à chaque environnement pour les utiliser dans des workflows conditionnels.

### Création d'un secret pour un environnement spécifique :

1. Dans **Settings** > **Secrets and variables** > **Actions**, sélectionnez l'onglet **Environments**.
2. Cliquez sur **New environment** pour créer un environnement comme "Production" ou "Staging".
3. Ajoutez des secrets spécifiques à cet environnement.
4. Dans vos workflows, vous pouvez définir que certains secrets ne sont disponibles que dans des environnements spécifiques.

### Utilisation des environnements dans les workflows :

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production

    steps:
    - name: Deploy to Production
      run: |
        echo "Deploying to Production environment"
```

---

## 5. Bonnes pratiques pour la gestion des secrets

Voici quelques **bonnes pratiques** à suivre pour garantir une gestion sécurisée et efficace des secrets dans GitHub.

### Ne pas hardcoder d'informations sensibles

- **Ne jamais inclure** d'informations sensibles directement dans le code source ou les fichiers de configuration. Utilisez toujours des secrets GitHub pour cela.

### Limiter l'accès aux secrets

- Restreignez l'accès aux secrets uniquement aux **collaborateurs** qui en ont réellement besoin.
- Utilisez des **environnements GitHub** pour mieux contrôler l'accès aux secrets.

### Rotation régulière des secrets

- Mettez en place une politique de **rotation régulière des secrets** pour éviter que des clés ou des mots de passe ne soient compromis.

---

## 6. Ressources supplémentaires

- [Documentation officielle de GitHub sur les secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Bonnes pratiques de sécurité pour GitHub Actions](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)

---

Ce document explique de manière détaillée comment gérer les secrets dans GitHub pour garantir que les informations sensibles de votre projet SafeBase sont correctement protégées et utilisées dans vos workflows CI/CD.
