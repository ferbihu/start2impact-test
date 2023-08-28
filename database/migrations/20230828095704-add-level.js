'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Course', 'level', {
      type: Sequelize.STRING,
      validate: {
        isIn: ['principiante', 'intermedio', 'avanzato']
      }
    });
  },
  async down (queryInterface) {
    await queryInterface.removeColumn('Course', 'level');
  }
};
