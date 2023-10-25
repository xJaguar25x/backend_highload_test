import { Router } from 'express';
import usersRouter from './users.js';
import healthCheckRouter from './healthCheck.js';

const router = Router();

router.use('/', healthCheckRouter);
router.use('/users', usersRouter);

export default router;
