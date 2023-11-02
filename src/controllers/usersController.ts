import User from "../database/models/user";
import { sequelize } from "../database/connection";
import { RPS } from "../routes";

interface IGetAllUsers {
  id: number;
  balance: number;
}

interface IUpdateBalance {
  result?: boolean;
  error?: string;
}

export async function getAllUsers(): Promise<Array<IGetAllUsers>> {
  console.log({RPS1: ++RPS.number1})
  return await User.findAll({
    attributes: ['id', 'balance']
  });
}

export async function updateBalance({ id, amount }: { id: number, amount: number }): Promise<IUpdateBalance> {
  console.log({RPS: ++RPS.number})
  const t = await sequelize.transaction();
  try {
    const user = await User.findOne({
      where: {
        id,
      },
      transaction: t,
    });

    if (!user) {
      await t.rollback();
      return { error: 'User not found' };
    }

    const newBalance = user.balance - amount;

    if (newBalance < 0) {
      await t.rollback();
      return { error: 'not enough money' };
    }

    const res = await user.update({
          balance: newBalance
        },
        {
          transaction: t
        },
    );

    await t.commit()
    return { result: !!res };
  } catch (e:any) {
    await t.rollback();
    console.log({e})
    throw new Error(e)
  }
}
