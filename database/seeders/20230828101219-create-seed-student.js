'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    queryInterface.bulkInsert('Student', [
      {
        firstName: 'fer',
        lastName: 'bihu',
        email: 'bihu@gmail.com',
        points: Math.floor(
          Math.random() * (970 - 30 + 1) + 30
        )
      },
      {
        firstName: 'ariel',
        lastName: 'klo',
        email: 'klo@gmail.com',
        points: Math.floor(
          Math.random() * (970 - 30 + 1) + 30
        )
      },
    ], {})
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Student', {[Op.or]: [{firstName: 'fer'}, {firstName: 'ariel'}]});
  }
};
