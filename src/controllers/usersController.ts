import User from "../database/models/user";

interface IGetAllUsers {
  id: number;
  balance: number;
}

interface IUpdateBalance {
  result?: boolean;
  error?: string;
}

export async function getAllUsers(): Promise<Array<IGetAllUsers>> {
  return await User.findAll({
    attributes: ['id', 'balance']
  });
}

export async function updateBalance({ id, amount }: { id: number, amount: number }): Promise<IUpdateBalance> {
  const user = await User.findOne({
    where: {
      id,
    },
  });

  if (!user) {
    return { error: 'User not found' };
  }

  const newBalance = user.balance - amount;
  if (newBalance < 0) {
    return { error: 'not enough money' };
  }

    const res = await user.update({
        balance: newBalance
    });

    return !!res;
}
