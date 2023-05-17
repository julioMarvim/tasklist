import { Router } from 'express';
import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';
import authMiddleaware from './app/middlewares/auth.js';
import TaskController from './app/controllers/TaskController.js';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Todas as rotas a partir precisam estar autenticadas.
routes.use(authMiddleaware);
routes.put('/users', UserController.update);

routes.post('/tasks', TaskController.store);
routes.get('/tasks', TaskController.index);

export default routes;
