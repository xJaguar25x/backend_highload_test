// import * as User from '../controllers/usersController.js'
// import { db as db1 } from '../database/models/index.js'
// import { default as db1 } from '../database/models/index.js'
// import * as db1 from '../database/models/index.js'
import db from '../database/models/index.js'
import {Op} from "sequelize";
// console.log(db.sequelize.models.User, db.User)
// console.log(db)
export async function getAllUsers() {
    return await db.User.findAll({
        attributes: ['id', 'balance']
    });
}

export async function updateBalance({id, amount}) {
    const user = await db.User.findOne({
        where: {
            id,
        },
    });
    if (!user) {
        return {error: 'User not found'};
    }

    console.log(user.balance, amount)

    const newBalance = user.balance - amount;
    if (newBalance <= 0) {
        return {error: 'not enough money'};
    }

    const res = await user.update({
        balance: newBalance
    });

    return !!res;
}
