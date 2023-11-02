import 'dotenv/config';
import express, { Express } from 'express';
import logger from 'morgan';
import router from "./routes";

const API_HOST = process.env.API_HOST || '127.0.0.1';
const API_PORT = Number(process.env.API_PORT) || 3000;
const app: Express = express();

app
    .use(logger('dev'))
    .use(express.json())
    .use(router);

app.listen({
  host: API_HOST,
  port: API_PORT,
}, () => {
  console.warn('listening on http://%s:%d.', API_HOST, API_PORT);
});

