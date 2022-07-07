const router = require("express").Router();
const MailController = require("../controllers/MailController");

router.get("/mail", MailController.index);

module.exports = router;
