'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Enrollment', {
      studentId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      courseId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }
    }
  )},

  async down (queryInterface) {
    await queryInterface('Enrollment');
  }
};
