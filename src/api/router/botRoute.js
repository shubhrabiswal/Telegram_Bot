const express = require('express');
const router = express.Router();
const botController = require('../controller/botController')


// router.post('/',botController.addquestion)
router.get('/',botController.getanswer)



module.exports = router;