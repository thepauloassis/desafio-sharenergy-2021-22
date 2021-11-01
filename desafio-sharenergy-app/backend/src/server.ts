import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import databaseConnection from './config/databaseConnection';

dotenv.config();

const app = express();

app.use(cors()); // all domains (dev environment)

/* app.use(
  cors({
    origin: ['domain.com.br', 'pauloassis.com', 'localhost'],
  }),
); */ // restrict domains (prod environment)

const host = process.env.HOST || 'http://localhost';
const port = process.env.PORT || 3000;

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
app.use(
  '/uploads',
  express.static(path.resolve(__dirname, 'uploads', 'factory-data')),
);

app.listen(port, async () => {
  await databaseConnection();
  console.log(`listening on ${host}:${port} ✅`);
});
