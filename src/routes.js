import { Router } from 'express';
import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';
import TaskController from './app/controllers/TaskController.js';
import authMiddleaware from './app/middlewares/auth.js';

const routes = new Router();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso.
 *       400:
 *         description: Falha na requisição.
 */
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Todas as rotas a partir precisam estar autenticadas.
routes.use(authMiddleaware);
routes.put('/users', UserController.update);

routes.post('/tasks', TaskController.store);
routes.get('/tasks', TaskController.index);
routes.put('/tasks/:task_id', TaskController.update);
routes.delete('/tasks/:task_id', TaskController.delete);

export default routes;
