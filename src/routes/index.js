const express = require('express');
const rankingRouter = require('../routes/ranking');

const router = express.Router();

router.get('/health', (req, res) => {
  res.status(200).send('OK');
});

router.use('/api', rankingRouter);

module.exports = router;