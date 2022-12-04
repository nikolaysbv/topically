const router = require('express').Router();
const controller = require('../controllers/topic_controller');

router.route("/popular").get(controller.getMostPopular);

module.exports = router;