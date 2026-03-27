const express = require("express");
const ProvinceController = require("../controllers/ProvinceController");
const router = express.Router();

// GET /provinces?regionId
router.get("/", ProvinceController.getAllProvinces);
// GET /provinces/:id
router.get("/:id", ProvinceController.getProvinceById);

module.exports = router;
