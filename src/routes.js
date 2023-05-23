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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               name: demo
 *               email: demo@yahoo.com.br
 *               password: "1234567"
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso.
 *       400:
 *         description: Falha na requisição.
 */
routes.post('/users', UserController.store);

/**
 * @swagger
 * /sessions:
 *   post:
 *     summary: Autentica um usuário
 *     responses:
 *       200:
 *         description: Usuário autenticado com sucesso.
 *       400:
 *         description: Falha na requisição.
 */
routes.post('/sessions', SessionController.store);

// Todas as rotas a partir daqui precisam estar autenticadas.
routes.use(authMiddleaware);

/**
 * @swagger
 * /users:
 *   put:
 *     summary: Atualiza um usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               oldPassword:
 *                 type: string
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *             example:
 *               name: cocozao grande
 *               email: cocozao@yahoo.com.br
 *               oldPassword: "1234567"
 *               password: cocozinho
 *               confirmPassword: cocozinho
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso.
 *       400:
 *         description: Falha na requisição.
 */
routes.put('/users', UserController.update);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Cria uma nova tarefa
 *     responses:
 *       200:
 *         description: Tarefa criada com sucesso.
 *       400:
 *         description: Falha na requisição.
 */
routes.post('/tasks', TaskController.store);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Retorna todas as tarefas
 *     responses:
 *       200:
 *         description: Requisição bem-sucedida.
 */
routes.get('/tasks', TaskController.index);

/**
 * @swagger
 * /tasks/{task_id}:
 *   put:
 *     summary: Atualiza uma tarefa
 *     parameters:
 *       - name: task_id
 *         in: path
 *         description: ID da tarefa a ser atualizada
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso.
 *       400:
 *         description: Falha na requisição.
 */
routes.put('/tasks/:task_id', TaskController.update);

/**
 * @swagger
 * /tasks/{task_id}:
 *   delete:
 *     summary: Deleta uma tarefa
 *     parameters:
 *       - name: task_id
 *         in: path
 *         description: ID da tarefa a ser deletada
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarefa deletada com sucesso.
 *       400:
 *         description: Falha na requisição.
 */
routes.delete('/tasks/:task_id', TaskController.delete);

export default routes;
