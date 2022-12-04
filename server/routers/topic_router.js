const router = require('express').Router();
const controller = require('../controllers/topic_controller');

router.route("/popular").get(controller.getMostPopular);
router.route("/").post(controller.createTopic);

module.exports = router;