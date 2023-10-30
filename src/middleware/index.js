export const checkBodyUsers = async (req, res, next) => {
    const { userId: id, amount } = req.body;

    if (typeof id !== "number") {
        return res.status(400).json({error: 'id field  is required and must be type number'});
    }
    if (typeof amount !== "number") {
        return res.status(400).json({error: 'amount field  is required and must be type number'});
    }

    return next();
}

export const sleep = async function (req, res, next) {
    function test(next) {
        return next();
    }

    setTimeout(() => {
          test(next)
      }
      , 5000);
}
