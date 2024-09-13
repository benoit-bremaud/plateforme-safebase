import { Connection, createConnection } from 'mysql2';

const connection: Connection = createConnection({
  host: process.env.MYSQL_HOST ?? 'db',
  user: process.env.MYSQL_USER ?? 'safebase_user',
  password: process.env.MYSQL_PASSWORD ?? 'your_password',
  database: process.env.MYSQL_DATABASE ?? 'safebase_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données MySQL:', err.message);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

export default connection;
