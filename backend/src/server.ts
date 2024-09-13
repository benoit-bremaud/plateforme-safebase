import Fastify from 'fastify';
import db from './config/db'; // Importer la connexion MySQL

const fastify = Fastify({ logger: true });

fastify.get('/', async (request, reply) => {
  db.query('SELECT 1 + 1 AS solution', (error, results) => {
    if (error) {
      reply.code(500).send('Erreur lors de la requête MySQL');
    } else {
      reply.send({ solution: results[0].solution });
    }
  });
});

// Démarrage du serveur
fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Serveur en écoute sur ${address}`);
});
