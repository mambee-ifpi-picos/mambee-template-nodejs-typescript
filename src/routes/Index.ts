import { Router, Request, Response } from 'express';
import usersRoutes from './Users';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('Hello!');
});

routes.use('/users', usersRoutes);

export default routes;
