import { FastifyInstance } from 'fastify';
import { createDatabaseController } from '../controllers/databaseController';

// Le contrôleur pour la logique métier

// Schéma de validation du corps de la requête
const createDatabaseSchema = {
  body: {
    type: 'object',
    required: ['name', 'type', 'host', 'port', 'username', 'password'],
    properties: {
      name: { type: 'string' },
      type: { type: 'string', enum: ['mysql', 'postgres'] },
      host: { type: 'string' },
      port: { type: 'integer' },
      username: { type: 'string' },
      password: { type: 'string' }
    }
  }
};

// Route POST /databases
export default async function databaseRoutes(fastify: FastifyInstance) {
  fastify.post('/databases', { schema: createDatabaseSchema }, createDatabaseController);  // Assurez-vous que le chemin est correct
}
