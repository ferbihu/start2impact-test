const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const Student =  sequelize.define('Student', {
        studentId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          firstName: { type: DataTypes.STRING },
          lastName: { type: DataTypes.STRING },
          email: { type: DataTypes.STRING},
          points: {type: DataTypes.INTEGER}
    })
    return Student;
}