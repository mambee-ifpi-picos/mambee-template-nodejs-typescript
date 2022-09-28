import { Router, Request, Response } from 'express';
import { User } from '../repositories/ModelTypes';
import UserRepository from '../repositories/UserRespository';

const routes = Router();
const userRepository = new UserRepository();

routes.get('/', async (req: Request, res: Response) => {
  const users = await userRepository.getAll();
  res.json(users);
});

routes.post('/', async (req: Request, res: Response) => {
  const { name } = req.body;
  const { email } = req.body;
  const newUser: User = {
    name,
    email
  };
  try {
    const userSaved = await userRepository.add(newUser);
    res.status(201).json(userSaved);
  } catch (erro) {
    res.status(400).send(erro);
  }
});

export default routes;
