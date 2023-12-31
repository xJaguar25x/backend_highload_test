import { Router, Request, Response, NextFunction } from 'express';
import { getAllUsers, updateBalance } from "../controllers/usersController";
import { checkBodyUsers, sleep } from "../middleware";

const router = Router();

/* GET users listing. */
router.get('/', sleep, async function (req: Request, res: Response, next: NextFunction) {
    res.json(await getAllUsers());
});

/* UPDATE users balance. */
router.patch('/', checkBodyUsers, async function (req: Request, res: Response, next: NextFunction) {
    const { userId: id, amount } = req.body;
    const data = await updateBalance({id, amount});

    if (data.error) {
        return res.status(400).send(data);
    }

    return res.json(data);
});

export default router;
