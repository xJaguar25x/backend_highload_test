import {Router} from 'express';
import {getAllUsers, updateBalance} from "../controllers/usersController.js";

const router = Router();

/* GET users listing. */
router.get('/',
  async function (req, res, next) {
      function test(next) {
          return next();
      }

      setTimeout(
        () => {
            test(next)
        }
        , 5000);
  },
  async function (req, res, next) {
      res.json(await getAllUsers());
  });

/* UPDATE users balance. */
router.put('/', async function (req, res, next) {
    const {userId: id, amount} = req.body;
    console.log({id, amount})
    if (!id || typeof id !== "number") {
        return res.status(400).json({error: 'id field  is required and must be type number'});
    }
    if (!amount || typeof amount !== "number") {
        return res.status(400).json({error: 'amount field  is required and must be type number'});
    }
    const data = await updateBalance({id, amount});
    if (data.error) {
        return res.status(400).send(data);
    }

    return res.json(data);
});

export default router;
