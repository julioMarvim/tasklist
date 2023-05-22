import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import routes from './routes.js';
import swaggerOptions from '../swagger.js';

// Importando nossa database.
import './database/index.js';

dotenv.config();
const swaggerSpec = swaggerJSDoc(swaggerOptions);

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
