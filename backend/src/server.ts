import Fastify from 'fastify';
import { RowDataPacket } from 'mysql2';
import db from './config/db';

const fastify = Fastify({ logger: true });

fastify.get('/', async (request, reply) => {
  try {
    const [results] = await db.promise().query<RowDataPacket[]>('SELECT 1 + 1 AS solution');
    
    reply.send({ solution: results[0].solution });
  } catch (error) {
    fastify.log.error(error);
    reply.code(500).send('Erreur lors de la requête MySQL');
  }
});

fastify.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening on ${address}`);
});
