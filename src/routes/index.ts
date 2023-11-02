import { Router } from 'express';
import usersRouter from './users';
import healthCheckRouter from './healthCheck';

const router = Router();
export const RPS = {number: 0, number1: 0 }
router.use('/', healthCheckRouter);
router.use('/users', usersRouter);

export default router;
