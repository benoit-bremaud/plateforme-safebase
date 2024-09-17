import { ResultSetHeader } from 'mysql2';
import connection from '../config/db';

// Importer la connexion à la base de données

// Type pour les données de la base de données
interface DatabaseInfo {
  name: string;
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
}

// Fonction pour insérer une nouvelle base de données
export const createDatabase = async (data: DatabaseInfo) => {
  const { name, type, host, port, username, password } = data;

  try {
    const query = `
      INSERT INTO bases_de_donnees (name, type, host, port, username, password_hash)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    // Exécuter la requête avec les données fournies
    const [result] = await connection.promise().execute<ResultSetHeader>(query, [name, type, host, port, username, password]);

    // Retourner les détails de la base de données créée
    return { id: result.insertId, name, type, host, port, username };
  } catch (error) {
    console.error('Erreur lors de l\'insertion de la base de données:', error);
    throw new Error('Échec de l\'insertion dans la base de données');
  }
};
