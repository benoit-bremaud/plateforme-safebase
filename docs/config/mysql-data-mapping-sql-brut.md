**Mapping des Modèles de Données aux Tables MySQL - SQL Brut**

Ce document décrit la manière dont les modèles de données sont mappés aux tables MySQL en utilisant des requêtes SQL brutes dans SafeBase. L'approche par SQL brut est directe, offrant un contrôle total sur les requêtes et les opérations sur la base de données.

---

**Approche SQL Brut**

L'utilisation de **requêtes SQL brutes** consiste à écrire directement les requêtes SQL dans le code pour manipuler les tables MySQL. Cela permet de gérer de manière simple et efficace les opérations CRUD (Create, Read, Update, Delete) sans avoir recours à un ORM.

---

**Organisation des fichiers**

Les requêtes SQL brutes sont organisées par entité (table) dans le projet. Chaque entité possède un fichier dédié qui regroupe les différentes fonctions SQL.

**Arborescence recommandée** :

```
safebase-backend/
├── src/
│   └── database/
│       ├── connection.ts          # Gestion du pool de connexions MySQL
│       ├── users.ts               # Requêtes SQL pour les utilisateurs
│       └── backups.ts             # Requêtes SQL pour les sauvegardes
```

---

**Exemple de Requêtes SQL Brutes pour l'entité `Users`**

1. **Récupérer toutes les lignes d'une table (Read)**

**Fichier** : `src/database/users.ts`

```typescript
import { executeQuery } from './connection';

// Récupérer tous les utilisateurs
export const getAllUsers = async () => {
  const query = 'SELECT * FROM users';  // Requête SQL brute
  const results = await executeQuery(query);
  return results;
};
```

---

2. **Ajouter une nouvelle entrée (Create)**

**Fichier** : `src/database/users.ts`

```typescript
// Créer un nouvel utilisateur
export const createUser = async (name: string, email: string) => {
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  const results = await executeQuery(query, [name, email]);  // Paramètres SQL
  return results;
};
```

---

3. **Mettre à jour une entrée existante (Update)**

**Fichier** : `src/database/users.ts`

```typescript
// Mettre à jour un utilisateur existant
export const updateUser = async (id: number, name: string) => {
  const query = 'UPDATE users SET name = ? WHERE id = ?';
  const results = await executeQuery(query, [name, id]);
  return results;
};
```

---

4. **Supprimer une entrée (Delete)**

**Fichier** : `src/database/users.ts`

```typescript
// Supprimer un utilisateur par son ID
export const deleteUser = async (id: number) => {
  const query = 'DELETE FROM users WHERE id = ?';
  const results = await executeQuery(query, [id]);
  return results;
};
```

---

**Explication des Concepts**

1. **Paramètres SQL**  
Les requêtes SQL utilisent des **paramètres** pour éviter les injections SQL et sécuriser les opérations. Dans les requêtes brutes, les paramètres sont définis par `?` et les valeurs correspondantes sont passées en second argument dans `executeQuery`.

2. **Requêtes simples et directes**  
Cette approche permet une écriture directe des requêtes SQL, ce qui offre un contrôle total sur les opérations de la base de données. Les requêtes sont flexibles et peuvent être optimisées selon les besoins du projet.

---

**Conclusion**

L'approche par SQL brut dans SafeBase est simple, efficace, et offre un contrôle maximal sur les interactions avec MySQL. Chaque fichier d'entité (par exemple, `users.ts`) gère les requêtes spécifiques à la table correspondante en utilisant la fonction de connexion centralisée `executeQuery`.

Cette méthode permet de démarrer rapidement avec les opérations CRUD et pourra évoluer au fur et à mesure que le projet grandit.
