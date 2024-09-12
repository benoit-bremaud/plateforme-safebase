const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  return { message: 'SafeBase API is running!' };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.log.info(`Server running at http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();