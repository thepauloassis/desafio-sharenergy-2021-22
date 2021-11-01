/* eslint-disable @typescript-eslint/no-var-requires */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const databaseConnection = async (): Promise<void> => {
  const connection = process.env.CONNECTION_STRING || '';

  await mongoose
    .connect(connection)
    .then(() => {
      console.log('Connected to MongoDB Database');
    })
    .catch((e) => console.log(e));
};

export default databaseConnection;
