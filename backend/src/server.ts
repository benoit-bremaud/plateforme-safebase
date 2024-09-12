import fastify from 'fastify';

const app = fastify({ logger: true });

// Définir une route basique
app.get('/', async (request, reply) => {
  return { message: 'SafeBase API is running!' };
});

// Fonction pour démarrer le serveur
const start = async () => {
  try {
    await app.listen({ port: 3000 });
    app.log.info(`Server running at http://localhost:3000`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
