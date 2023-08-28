const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const Instructor = sequelize.define('Instructor', {
        instructorId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: { type: DataTypes.STRING },
        lastName: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING, unique: true }
    })
    Instructor.associate = models => {
        Instructor.hasMany(models.Course)
    }
    return Instructor;
};