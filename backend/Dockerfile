# Utilisation de Node.js version 18
FROM node:18

# Installer dockerize pour gérer l'attente de MySQL
ENV DOCKERIZE_VERSION v0.6.1
RUN apt-get update && apt-get install -y wget \
    && wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier le reste des fichiers dans le conteneur
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Utiliser dockerize pour attendre que MySQL soit prêt, puis démarrer l'application
CMD ["dockerize", "-wait", "tcp://db:3306", "-timeout", "60s", "npm", "start"]
