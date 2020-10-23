import mongoose, { ConnectionOptions } from 'mongoose';
import config from './config';

(async () => {
  try {
    const mongooseOptions: ConnectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
      /* user: config.MONGO_USER,
      pass: config.MONGO_PWD */
    };
    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DB}`, mongooseOptions);
    console.log('DB is connected to:', db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
