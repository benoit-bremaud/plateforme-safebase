import { Connection, createConnection } from 'mysql2';

import { dbConfig } from './env.config';

// Import des configurations de la base de données

const connection: Connection = createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    console.error('Erreur de connexion à la base de données MySQL:', err.message);
    process.exit(1); // Quitter si la connexion échoue
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

export default connection;
