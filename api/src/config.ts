import dotenv from 'dotenv';
dotenv.config();

export default {
  MONGO_DB: process.env.MONGO_DB || 'videos-db',
  MONGO_USER: process.env.MONGO_USER || 'admin',
  MONGO_PWD: process.env.MONGO_PWD || 'admin',
  MONGO_HOST: process.env.MONGO_HOST || 'localhost',
  PORT: process.env.PORT || 4000
};
