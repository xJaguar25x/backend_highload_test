import { Router } from 'express';
const router = Router();

/* GET health check listing. */
router.get('/', function(req, res, next) {
    res.send('it`s works');
});

export default router;
