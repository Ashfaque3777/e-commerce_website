const express = require("express");
let upload = require("../multerConfig.js");
let productController = require("../controller/productController.js");

const router = express.Router();

router.post(
  "/saveProduct",
  upload.single("image"),
  productController.saveProduct
);
router.get("/getProduct", productController.getProduct);
router.delete("/deleteProduct/:id", productController.deleteProduct);
router.get("/getProductById/:id", productController.getProductById);
router.put("/updateProduct/:id", productController.updateProduct);
router.get("/searchProduct/:inp", productController.searchProduct);

module.exports = router;
