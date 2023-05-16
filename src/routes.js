import { Router } from 'express';
import User from './app/models/User.js'

const routes = new Router();

routes.get('/teste', async (req, res) => {
  const user = await User.create({
    name: 'Julio',
    email: 'juliomarvim@yahoo.com',
    password_hash: '12121212',
  });
  
  return res.json(user);
});

export default routes;
