const { DataTypes } = require('sequelize');
const instructor = require('./instructor');

module.exports = function(sequelize) {
    const Course =  sequelize.define('Course', {
        courseId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        startDate: { type: DataTypes.DATE },
        endDate: { type: DataTypes.DATE },
        level: { type: DataTypes.STRING}
    })
    Course.associate = models => {
        Course.belongsTo(models.instructor)
    }
    return Course;
};

