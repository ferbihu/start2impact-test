const express = require('express');
require('dotenv');

const router = require('./routes');

const PORT = process.env.PORT || 3001
const app = express();
app.use(express.json());
app.use(router);
const server = app.listen(PORT, () => console.log(`listening on port ${PORT}`));

module.exports = { server };