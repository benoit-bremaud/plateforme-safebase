import { FastifyReply, FastifyRequest } from 'fastify';

import { createDatabase } from '../models/Database';

export const createDatabaseController = async (
  request: FastifyRequest<{ Body: { name: string, type: string, host: string, port: number, username: string, password: string } }>,
  reply: FastifyReply
) => {
  try {
    const { name, type, host, port, username, password } = request.body;
    
    // Appel du modèle pour créer la base de données
    const result = await createDatabase({ name, type, host, port, username, password });

    // Si succès, retourner un statut 201
    reply.code(201).send(result);
  } catch (error) {
    // Caster l'erreur en `Error` pour accéder aux propriétés de l'erreur
    const err = error as Error;

    // Enregistrer plus de détails sur l'erreur
    request.log.error('Erreur lors de la création de la base de données:', err.message);

    // Envoyer un message d'erreur plus détaillé avec le message de l'erreur
    reply.code(500).send({
      message: 'Erreur lors de la création de la base de données',
      error: err.message,
    });
  }
};
