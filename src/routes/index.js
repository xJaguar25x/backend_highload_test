import { Router } from 'express';
import usersRouter from './users.js';
import healthCheckRouter from './healthCheck.js';

// function applyRoutes(app) {
const router = Router();

router.use('/', healthCheckRouter);
router.use('/users', usersRouter);
// }

export default router;
