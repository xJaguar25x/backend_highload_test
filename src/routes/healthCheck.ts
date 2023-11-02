import { Request, Response, Router } from 'express';

const router = Router();

/* GET health check listing. */
router.get('/', function(req: Request, res: Response) {
    res.send('it`s works');
});

export default router;
