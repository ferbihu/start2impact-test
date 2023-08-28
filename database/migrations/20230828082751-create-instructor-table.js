'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Instructor', {
      instructorId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: { type: Sequelize.STRING },
      lastName: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING, unique: true }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('Instructor');
  }
};
