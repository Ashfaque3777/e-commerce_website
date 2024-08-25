const express = require("express");
let cartController = require("../controller/cartController.js");

const router = express.Router();

router.post("/saveCart/:userName", cartController.saveCart);
router.get("/getCart/:userName", cartController.getCart);
router.delete("/deleteCart/:userName/:id", cartController.deleteCart);

module.exports = router;
