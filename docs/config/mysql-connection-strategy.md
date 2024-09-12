# Stratégie de Connexion à MySQL

Ce document décrit la stratégie utilisée pour établir et gérer une connexion avec la base de données MySQL dans SafeBase.

---

## Utilisation de `mysql2`

Nous utilisons la bibliothèque `mysql2` pour gérer les connexions à la base de données MySQL dans notre projet Node.js. Ce package est simple à utiliser, performant, et supporte les Promises, ce qui est idéal pour la gestion asynchrone.

### Installation

Pour installer `mysql2`, exécutez la commande suivante :

```bash
npm install mysql2
```

---

## Paramètres de Connexion via le fichier `.env`

Les informations de connexion sont stockées de manière sécurisée dans un fichier `.env`. Cela permet de gérer différents environnements (développement, production) de manière flexible.

Exemple de contenu du fichier `.env` :

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=secret_password
DB_NAME=safebase
DB_PORT=3306
```

---

## Initialisation de la Connexion

Un module dédié est utilisé pour gérer la connexion à MySQL, en se basant sur un pool de connexions. Le pool permet de réutiliser les connexions et d'éviter des coûts de performance inutiles en créant de nouvelles connexions à chaque requête.

### Exemple de Code

```javascript
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10, // Limiter le nombre de connexions simultanées
  queueLimit: 0
});

module.exports = pool;
```

---

## Gestion des Erreurs de Connexion

Si la connexion échoue, une gestion basique des erreurs est mise en place pour fournir des informations sur l'échec et éviter que l'application ne se bloque.

### Exemple de Gestion des Erreurs

```javascript
pool.getConnection()
  .then((connection) => {
    console.log('Connexion réussie à la base de données MySQL');
    connection.release();
  })
  .catch((error) => {
    console.error('Erreur de connexion à MySQL:', error);
  });
```

---

## Pooling de Connexions

Nous utilisons un **pool de connexions** avec un nombre limité de connexions simultanées, défini par `connectionLimit`. Cela permet de limiter les ressources consommées et d'améliorer la performance de l'application.

---

## Stratégie de Reconnexion (à améliorer plus tard)

Pour le moment, une simple gestion des erreurs est en place. Une stratégie de reconnexion plus avancée pourra être ajoutée plus tard pour garantir une résilience maximale.

---

## Améliorations futures

Des fonctionnalités comme le **monitoring des connexions**, la **reconnexion automatique** après échec ou des outils de **gestion avancée des erreurs** pourront être implémentés dans les prochaines versions lorsque le projet sera plus mature.
