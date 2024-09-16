# Validation et Tests des Variables d'Environnement et des Secrets

Ce document détaille les étapes pour valider et tester que les variables d'environnement et les secrets sont bien configurés et utilisés correctement dans les différents environnements (développement, production, et CI) pour le projet **SafeBase**.

---

## 1. Validation des Variables d'Environnement en Local (Développement)

### Objectif

L'objectif est de s'assurer que les **variables d'environnement** définies dans le fichier `.env` pour le backend et dans les fichiers `environment.ts` pour le frontend sont correctement lues et utilisées lors de l'exécution de l'application.

### Étapes de Validation pour le Backend

1. **Vérifiez que le fichier `.env` existe** dans le répertoire **backend** :
   - **Chemin** : `backend/.env`
   - Contient des informations comme l'hôte de la base de données, l'utilisateur, le mot de passe, et le port du serveur.

   **Exemple de contenu** :

   ```bash
   MYSQL_HOST=localhost
   MYSQL_USER=safebase_user
   MYSQL_PASSWORD=your_password
   MYSQL_DATABASE=safebase_db
   PORT=3000
   ```

2. **Lancez le backend en développement** :
   - Exécutez la commande suivante dans le répertoire **backend** :

     ```bash
     npm run start:dev
     ```

3. **Validation** :
   - Accédez à [http://localhost:3000](http://localhost:3000) et assurez-vous que le serveur démarre correctement.
   - Si les variables d'environnement sont bien configurées, le serveur devrait se connecter à la base de données MySQL et afficher le message de succès dans la console :

     ```
     Connecté à la base de données MySQL
     ```

4. **Erreur de configuration** :
   - Si le fichier `.env` est manquant ou mal configuré, vous verrez une erreur dans la console. Exemple :

     ```
     Erreur de connexion à la base de données MySQL: Unknown database 'safebase_db'
     ```

### Étapes de Validation pour le Frontend

1. **Vérifiez les fichiers d'environnement** :
   - **Chemin** : `frontend/src/environments/environment.ts`
   - Contient l'URL de l'API à laquelle le frontend doit se connecter.

   **Exemple de contenu** :

   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:3000/api',
   };
   ```

2. **Lancez le frontend en développement** :
   - Exécutez la commande suivante dans le répertoire **frontend** :

     ```bash
     npm run start:dev
     ```

3. **Validation** :
   - Accédez à [http://localhost:4200](http://localhost:4200) et assurez-vous que l'application Angular communique correctement avec le backend. Par exemple, vérifiez que les appels à l'API sont effectués à l'URL définie dans `environment.ts`.

---

## 2. Validation des Secrets GitHub en Environnement CI

### Objectif

L'objectif est de vérifier que les secrets GitHub sont correctement utilisés lors de l'exécution des **workflows CI/CD** (intégration continue). Les secrets doivent permettre au pipeline de s'exécuter correctement, par exemple pour accéder à une base de données ou une API sécurisée.

### Étapes de Validation dans GitHub Actions

1. **Configurer les secrets dans GitHub** :
   - Vérifiez que tous les secrets nécessaires sont configurés dans GitHub. Allez dans **Settings** > **Secrets and variables** > **Actions** et assurez-vous que les secrets comme `PROD_DB_HOST`, `PROD_DB_USER`, `PROD_DB_PASSWORD`, etc., sont présents.

2. **Lancer un workflow CI** :
   - Exécutez manuellement un workflow CI ou poussez une modification dans une branche pour déclencher le pipeline CI. Cela peut inclure des tests de l'API backend, des vérifications de style et d'autres étapes.

   **Exemple de commande** :

   ```bash
   git push origin feature/branch-name
   ```

3. **Validation** :
   - Vérifiez l'onglet **Actions** sur GitHub pour voir l'exécution du pipeline.
   - Si les secrets sont correctement utilisés, les étapes du pipeline qui nécessitent des secrets (par exemple, la connexion à une base de données) doivent réussir.

   Exemple de log :

   ```
   [INFO] Connecting to MySQL database at ${PROD_DB_HOST}
   [INFO] Database connection successful
   ```

4. **Erreur liée aux secrets** :
   - Si les secrets ne sont pas correctement configurés, vous verrez des erreurs dans les logs des actions GitHub, telles que :

     ```
     Error: Access denied for user 'safebase_user'@'localhost' (using password: YES)
     ```

---

## 3. Validation des Variables d'Environnement en Production

### Objectif

L'objectif est de vérifier que les variables d'environnement sont correctement configurées dans l'environnement de production via des secrets ou des configurations d'environnement.

### Étapes de Validation en Production

1. **Vérifiez la configuration du fichier `environment.prod.ts`** :
   - Assurez-vous que le fichier de configuration en production est correctement configuré.

   **Exemple** :

   ```typescript
   export const environment = {
     production: true,
     apiUrl: 'https://api.yourproductiondomain.com/api',
   };
   ```

2. **Vérifiez l'utilisation des secrets en production** :
   - Les secrets tels que les informations de connexion à la base de données doivent être correctement configurés dans GitHub pour l'environnement **production**.

3. **Déployer l'application en production** :
   - Déployez l'application en production et vérifiez que les variables d'environnement sont correctement utilisées pour connecter l'application au backend et aux autres services.

4. **Validation** :
   - Accédez à l'application déployée en production et testez les principales fonctionnalités. Assurez-vous que les appels à l'API utilisent l'URL définie dans `environment.prod.ts` et que les services tels que la base de données sont correctement connectés.

---

## 4. Tests Unitaires et End-to-End (E2E)

### Objectif

L'objectif est de s'assurer que les variables d'environnement et les secrets sont bien pris en charge lors de l'exécution des tests unitaires et des tests end-to-end (E2E).

### Étapes de Validation pour les Tests Unitaires

1. **Exécuter les tests unitaires du backend** :
   - Assurez-vous que les tests unitaires vérifiant les fonctionnalités du backend (Fastify) utilisent correctement les variables d'environnement pour se connecter aux services.

   **Exemple de commande** :

   ```bash
   npm run test
   ```

2. **Exécuter les tests unitaires du frontend** :
   - Assurez-vous que les tests unitaires vérifiant les appels à l'API backend sont exécutés avec les bonnes configurations d'environnement.

   **Exemple de commande** :

   ```bash
   npm run test
   ```

### Étapes de Validation pour les Tests E2E

1. **Configurer Cypress (ou tout autre outil E2E)** :
   - Configurez Cypress ou un autre outil de tests end-to-end pour tester les fonctionnalités critiques de l'application. Assurez-vous que les variables d'environnement sont correctement utilisées pour simuler les appels aux API et les interactions avec la base de données.

2. **Exécuter les tests E2E** :
   - Lancez les tests E2E pour valider que toutes les fonctionnalités principales fonctionnent correctement en environnement de développement et de production.

---

## 5. Ressources supplémentaires

- [Documentation officielle de GitHub sur les secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Documentation sur les tests unitaires dans Node.js](https://jestjs.io/docs/en/getting-started)
- [Documentation sur les tests end-to-end avec Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

---

Ce document vous guide à travers les étapes nécessaires pour valider et tester les variables d'environnement et les secrets dans les différents environnements de développement, de production et CI. Si des erreurs surviennent, utilisez les logs pour diagnostiquer les problèmes de configuration.
