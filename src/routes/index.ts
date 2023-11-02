import { Router } from 'express';
import usersRouter from './users';
import healthCheckRouter from './healthCheck';

const router = Router();

router.use('/', healthCheckRouter);
router.use('/users', usersRouter);

export default router;
