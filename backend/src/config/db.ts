import mysql from 'mysql2';

export const dbConfig = {
  host: process.env.MYSQL_HOST ?? 'localhost',
  user: process.env.MYSQL_USER ?? 'root',
  password: process.env.MYSQL_PASSWORD ?? 'your_password',
  database: process.env.MYSQL_DATABASE ?? 'safebase_db',
};

const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à MySQL:', err.message);
    process.exit(1);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

export default connection;
