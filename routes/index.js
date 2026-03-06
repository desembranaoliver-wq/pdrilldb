const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
//Route to get all products
router.get("/enrollment", productController.getAllGadgets);
//create
router.post("/enrollment", productController.createProducts);
module.exports = router;

