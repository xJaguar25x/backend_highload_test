import { Request, Response, NextFunction } from 'express';

export const checkBodyUsers = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const { userId: id, amount } = req.body;

    if (typeof id !== "number") {
        return res.status(400).json({error: 'id field  is required and must be type number'});
    }
    if (typeof amount !== "number") {
        return res.status(400).json({error: 'amount field  is required and must be type number'});
    }

    return next();
}

export const sleep = async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    function test(next: NextFunction) {
        return next();
    }

    setTimeout(() => {
          test(next)
      }
      , 50);
}
