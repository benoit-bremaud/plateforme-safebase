## **Gestion des Secrets GitHub**

### **1. Introduction**

Les secrets GitHub stockent des informations sensibles (comme des identifiants de base de données ou des clés API). Ils sont cryptés et utilisés dans les workflows CI/CD pour éviter de les exposer dans le code source. Ces secrets sont essentiels pour sécuriser les configurations et gérer l'accès aux ressources sensibles lors des processus de déploiement et d'intégration continue.

### **2. Liste des Secrets Utilisés**

| Secret Name        | Description                                                              | Utilisation principale                                     |
|--------------------|--------------------------------------------------------------------------|------------------------------------------------------------|
| **PROD_DB_HOST**    | Hôte de la base de données en production.                                | Connexion à la base de données en production.               |
| **PROD_DB_USER**    | Utilisateur de la base de données en production.                         | Authentification du backend à la base de données.           |
| **PROD_DB_PASSWORD**| Mot de passe pour l'utilisateur de la base de données.                   | Sécurise l'accès à la base de données en production.         |
| **CI_API_KEY**      | Clé API pour les pipelines CI/CD.                                        | Utilisée pour des appels sécurisés dans les workflows CI.    |
| **CI_DB_PASSWORD**  | Mot de passe de la base de données pour les tests CI.                    | Authentifie le backend lors des tests dans CI.              |

### **3. Fonctionnement des Secrets**

- **Sécurité** : Les secrets sont cryptés et disponibles uniquement dans les workflows GitHub Actions. Ils ne sont jamais exposés dans les logs ni dans le dépôt Git.
- **Utilisation** : Les secrets sont injectés dans les workflows via `${{ secrets.SECRET_NAME }}` et peuvent être utilisés pour créer un fichier `.env` dans lequel sont stockées les variables d’environnement sensibles.

**Exemple d'injection dans un fichier `.env`** :

```yaml
- name: Set up environment variables
  run: |
    echo "DB_HOST=${{ secrets.PROD_DB_HOST }}" >> backend/.env
    echo "DB_USER=${{ secrets.PROD_DB_USER }}" >> backend/.env
    echo "DB_PASSWORD=${{ secrets.PROD_DB_PASSWORD }}" >> backend/.env
```

### **4. Gestion des Secrets dans GitHub**

- Les secrets sont configurés via **Settings** > **Secrets and variables** > **Actions** dans GitHub.
- Seuls les collaborateurs ayant accès au dépôt peuvent ajouter ou modifier les secrets.
- Chaque secret doit avoir un nom unique et descriptif (ex: `PROD_DB_HOST` pour l'hôte de la base de données en production).

### **5. Bonnes Pratiques**

1. **Limiter l’accès aux secrets** : Assurez-vous que seuls les membres ayant besoin d’y accéder disposent des permissions nécessaires.
2. **Renouvellement régulier** : Les clés sensibles comme les API et les mots de passe doivent être renouvelés régulièrement pour garantir la sécurité.
3. **Ne jamais exposer les secrets** : Les secrets ne doivent jamais être affichés en clair dans les logs ou dans le code source.
4. **Distinction des environnements** : Utilisez des secrets spécifiques à chaque environnement (ex: production, staging) pour éviter toute confusion entre les environnements.
5. **Tests en local** : Utilisez des valeurs de développement dans des fichiers `.env` locaux pour les tests, sans exposer de secrets.

### **6. Mise à Jour des Secrets**

- Lorsqu'un secret est modifié (comme un mot de passe ou une clé API), il doit être mis à jour dans **Settings** > **Secrets**. Assurez-vous de tester vos workflows après la mise à jour pour vérifier que tout fonctionne correctement.
