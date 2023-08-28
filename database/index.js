const Sequelize = require('sequelize');
const definitionModels = require('./models');
let sequelize = null;
let models = {};
const {
    DB_USER,
    DB_PASS,
    DB_NAME,
    DB_HOST,
    DB_PORT,
  } = process.env;


try {
  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  });
  models = definitionModels(sequelize);
  Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });
} catch (e) {
  logger.error('Error initializing Sequelize', e.message);
  throw e;
}

module.exports = {
  connection: sequelize,
  models,
};