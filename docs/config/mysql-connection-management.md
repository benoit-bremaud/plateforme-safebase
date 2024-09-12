# Gestion des Connexions MySQL - Pooling et Gestion des Erreurs (Version TypeScript)

Ce document décrit la gestion des connexions MySQL dans SafeBase, utilisant TypeScript avec Fastify. Nous implémentons un pool de connexions et une gestion simple des erreurs.

---

## Pooling de Connexions

Nous utilisons `mysql2` et `@types/mysql` avec TypeScript pour configurer un **pool de connexions**. Cela permet de réutiliser les connexions après chaque requête, optimisant ainsi les performances.

### Fichier : `src/database/connection.ts`

```typescript
import mysql, { Pool } from 'mysql2/promise';
import { config } from 'dotenv';
config();

const pool: Pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  waitForConnections: true,
  connectionLimit: 10, // Limite de connexions simultanées
  queueLimit: 0        // Pas de limite sur la file d'attente
});

// Fonction pour obtenir une connexion et exécuter une requête
export const executeQuery = async (query: string, params?: any[]) => {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(query, params);
    return results;
  } catch (error) {
    throw error;
  } finally {
    connection.release();  // Libération de la connexion dans le pool
  }
};
```

### Explications

- Le **pool** est configuré avec un maximum de 10 connexions simultanées.
- La fonction `executeQuery` gère l'exécution des requêtes SQL tout en s'assurant que les connexions sont libérées une fois les requêtes terminées.

---

## Gestion des Erreurs

En TypeScript, nous assurons une gestion stricte des erreurs tout en capturant les erreurs spécifiques liées à MySQL.

### Fichier : `src/database/connection.ts`

```typescript
export const executeQuery = async (query: string, params?: any[]) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [results] = await connection.execute(query, params);
    return results;
  } catch (error: any) {
    console.error("Erreur lors de l'exécution de la requête :", error.message);
    if (error.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error("La connexion à la base de données a été perdue.");
    } else if (error.code === 'ER_PARSE_ERROR') {
      console.error("Erreur de syntaxe dans la requête SQL.");
    }
    throw error;
  } finally {
    if (connection) connection.release();  // Assure la libération de la connexion
  }
};
```

### Explications

- Le bloc `catch` capture les erreurs, et nous vérifions les erreurs spécifiques comme la **perte de connexion** ou les **erreurs SQL**.
- Nous assurons que la connexion est toujours libérée dans le bloc `finally` même en cas d'erreur.

---

## Compilation TypeScript

Le projet utilise TypeScript, donc les fichiers `.ts` sont compilés en `.js` pour exécution. Voici un extrait de `tsconfig.json` pour configurer le projet :

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Instructions pour compiler

```bash
tsc
```
