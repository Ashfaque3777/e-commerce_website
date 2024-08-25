const express = require("express");
const router = express.Router();
let clientController = require("../controller/clientController");
let upload = require("../multerConfig.js");

router.post("/saveClient", upload.single("image"), clientController.saveClient);
router.post("/loginClient", clientController.loginClient);
router.post("/verify", clientController.verify);

module.exports = router;
