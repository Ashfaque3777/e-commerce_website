const express = require("express");
const router = express.Router();
let cartController = require("../controller/cartController.js");

router.post("/saveCart/:userName", cartController.saveCart);
router.get("/getCart/:userName", cartController.getCart);
router.delete("/deleteCart/:userName/:id", cartController.deleteCart);

module.exports = router;
