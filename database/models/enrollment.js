const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const Enrollment =  sequelize.define('Enrollment', {
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
    })
    return Enrollment;
};