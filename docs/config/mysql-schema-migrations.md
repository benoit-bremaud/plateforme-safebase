# Gestion des Migrations de Schéma MySQL

Ce document explique comment gérer les migrations de schéma dans SafeBase pour MySQL, à l’aide des outils **Flyway** ou **db-migrate**. Les migrations permettent d'appliquer, suivre et gérer les modifications du schéma de la base de données de manière contrôlée et organisée.

---

## Pourquoi utiliser des Migrations de Schéma ?

Les migrations de schéma permettent de :

1. Suivre et versionner les modifications du schéma de la base de données.
2. Appliquer ces changements de manière contrôlée dans différents environnements (développement, test, production).
3. Revenir à une version précédente en cas de problème.

---

## Outils Recommandés

Nous avons deux outils à disposition pour gérer les migrations dans SafeBase : **Flyway** et **db-migrate**. Chaque outil a ses propres avantages.

---

### Option 1 : Utilisation de **Flyway**

Flyway est un outil qui applique les migrations à l’aide de fichiers SQL directement. C’est une approche simple et flexible.

#### Installation et Configuration de Flyway

1. **Télécharger Flyway avec Docker** :

   ```bash
   docker pull flyway/flyway
   ```

2. **Créer le dossier pour stocker les migrations** :
   Dans le projet SafeBase, crée un dossier dédié aux migrations :

   ```
   safebase-backend/
   └── migrations/
   ```

3. **Exemple de script de migration (V1__initial_schema.sql)** :
   Dans ce fichier, on peut créer une table simple pour les utilisateurs :

   ```sql
   CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

4. **Exécution de Flyway** :
   Utilise Docker pour exécuter les migrations Flyway en te connectant à MySQL :

   ```bash
   docker run --rm -v $(pwd)/migrations:/flyway/sql flyway/flyway -url=jdbc:mysql://localhost:3306/safebase -user=root -password=secret_password migrate
   ```

Flyway détecte automatiquement les nouvelles migrations (par exemple, `V2`, `V3`, etc.) et les applique dans l'ordre.

---

### Option 2 : Utilisation de **db-migrate**

db-migrate est un outil orienté JavaScript/TypeScript qui permet de gérer les migrations à l’aide de fichiers `.js`.

#### Installation et Configuration de db-migrate

1. **Installer db-migrate** :
   Installe db-migrate et le plugin pour MySQL :

   ```bash
   npm install -g db-migrate
   npm install db-migrate-mysql
   ```

2. **Configurer db-migrate** :
   Crée un fichier **`database.json`** pour configurer la connexion à MySQL :

   ```json
   {
     "dev": {
       "driver": "mysql",
       "user": "root",
       "password": "secret_password",
       "host": "localhost",
       "database": "safebase"
     }
   }
   ```

3. **Créer une migration** :
   Crée une nouvelle migration pour ajouter une table d’utilisateurs :

   ```bash
   db-migrate create add-users-table
   ```

4. **Exemple de fichier de migration généré** :
   Le fichier de migration peut ressembler à ceci :

   ```javascript
   exports.up = function(db) {
     return db.createTable('users', {
       id: { type: 'int', primaryKey: true, autoIncrement: true },
       name: { type: 'string', length: 255, notNull: true },
       email: { type: 'string', length: 255, notNull: true },
       created_at: { type: 'timestamp', defaultValue: new String('CURRENT_TIMESTAMP') }
     });
   };

   exports.down = function(db) {
     return db.dropTable('users');
   };
   ```

5. **Exécuter les migrations** :
   Applique la migration avec cette commande :

   ```bash
   db-migrate up
   ```

   Pour annuler la dernière migration :

   ```bash
   db-migrate down
   ```

---

## Organisation des Migrations

Les fichiers de migration sont stockés dans un dossier **`migrations/`** du projet. Chaque migration est versionnée avec un numéro (V1, V2, etc.) et un nom descriptif.

**Exemple d'organisation des migrations :**

```
safebase-backend/
└── migrations/
    ├── V1__initial_schema.sql
    ├── V2__add_backups_table.sql
    └── V3__add_indexes.sql
```

---

## Stratégie de Gestion des Migrations

1. **Versionnement des Migrations** : Chaque modification de schéma doit être versionnée et représentée par un fichier de migration distinct (par exemple, V1, V2, etc.).

2. **Migrations incrémentales** : Applique les migrations de manière incrémentale sans modifier les données existantes.

3. **Exécution Contrôlée** : Utilise les outils (Flyway ou db-migrate) pour appliquer les migrations de manière contrôlée et traçable.

4. **Support multi-environnements** : Les migrations doivent être identiques dans tous les environnements (développement, test, production).

---

## Conclusion

La gestion des migrations de schéma est cruciale pour assurer la cohérence et la stabilité de la base de données dans SafeBase. Flyway et db-migrate offrent deux approches efficaces pour gérer les changements dans MySQL. Flyway est idéal pour ceux qui préfèrent utiliser directement des fichiers SQL, tandis que db-migrate est une bonne option pour ceux qui préfèrent travailler avec JavaScript/TypeScript.
