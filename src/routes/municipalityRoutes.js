const express = require("express");
const MunicipalityController = require("../controllers/MunicipalityController");
const router = express.Router();

// GET /municipalities?provinceId&regionId
router.get("/", MunicipalityController.getAllMunicipalities);
// GET /municipalities/:id
router.get("/:id", MunicipalityController.getMunicipalityById);

module.exports = router;
