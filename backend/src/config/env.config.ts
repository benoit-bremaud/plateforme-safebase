import * as dotenv from 'dotenv';

import { resolve } from 'path';

// Charger les variables d'environnement depuis le fichier .env
dotenv.config({ path: resolve(__dirname, '../../../.env') });

export const dbConfig = {
  host: process.env.MYSQL_HOST ?? 'localhost',
  user: process.env.MYSQL_USER ?? 'safebase_user',
  password: process.env.MYSQL_PASSWORD ?? 'your_password',
  database: process.env.MYSQL_DATABASE ?? 'safebase_db',
  rootPassword: process.env.MYSQL_ROOT_PASSWORD ?? 'toor'
};

export const serverPort = parseInt(process.env.PORT ?? '3000', 10);
