const express = require("express");
const router = express.Router();
let productController = require("../controller/productController.js");
let upload = require("../multerConfig.js");

router.post("/saveProduct", upload.single("image"), productController.saveProduct);
router.get("/getProduct", productController.getProduct);
router.delete("/deleteProduct/:id", productController.deleteProduct);
router.get("/getProductById/:id", productController.getProductById);
router.put("/updateProduct/:id", productController.updateProduct);
router.get("/searchProduct/:inp", productController.searchProduct);

module.exports = router;
