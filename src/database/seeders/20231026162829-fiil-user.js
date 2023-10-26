'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Users', [{
      balance: 10000
    }], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
