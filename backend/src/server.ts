import databaseRoutes from './routes/databaseRoutes';
import fastify from 'fastify';

// Chemin vers votre fichier routes

const app = fastify();

// Enregistrer les routes pour les bases de données
app.register(databaseRoutes);  // Enregistrement de la route

app.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Serveur démarré sur ${address}`);
});
