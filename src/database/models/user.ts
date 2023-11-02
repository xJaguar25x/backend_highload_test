import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../connection";

class User extends Model {
  declare id: number; //for more information, see https://sequelize.org/docs/v6/core-concepts/model-basics/#extending-model
  public balance!: number;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
  timestamps: true,
  tableName: 'Users',
});

export default User;
