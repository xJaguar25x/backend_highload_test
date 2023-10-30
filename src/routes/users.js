import { Router } from 'express';
import { getAllUsers, updateBalance } from "../controllers/usersController.js";
import { checkBodyUsers, sleep } from "../middleware/index.js";

const router = Router();

/* GET users listing. */
router.get('/', sleep, async function (req, res, next) {
    res.json(await getAllUsers());
});

/* UPDATE users balance. */
router.patch('/', checkBodyUsers, async function (req, res, next) {
    const { userId: id, amount } = req.body;
    const data = await updateBalance({id, amount});

    if (data.error) {
        return res.status(400).send(data);
    }

    return res.json(data);
});

export default router;
