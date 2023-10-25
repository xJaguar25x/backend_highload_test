import { Router } from 'express';
const router = Router();

// function users() {
  /* GET users listing. */
router.put('/', function(req, res, next) {
    res.send('respond with a resource');
  });
// }


export default router;
