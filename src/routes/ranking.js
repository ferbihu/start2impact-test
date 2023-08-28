const express = require('express');
const rankingController  = require('../controllers/ranking');



const router = express.Router();

router.get(
  '/v1/ranking', rankingController.getRanking
);

module.exports = router;