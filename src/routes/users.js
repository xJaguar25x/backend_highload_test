import { Router } from 'express';
const router = Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
/* UPDATE user. */
router.put('/', function(req, res, next) {
    res.send('respond with a resource');
  });

export default router;
