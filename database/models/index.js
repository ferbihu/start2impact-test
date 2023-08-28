const Course = require('./course');
const Enrollment = require('./enrollment');
const Instructor = require('./instructor');
const Student = require('./student');

module.exports = sequelize => ({
    Course: Course(sequelize),
    Enrollment: Enrollment(sequelize),
    Instructor: Instructor(sequelize),
    Student: Student(sequelize)
});
