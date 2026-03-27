const express = require("express");
const AttractionController = require("../controllers/AttractionController");
const router = express.Router();

// GET /attractions?regionId&provinceId&municipalityId&category&minRating&page&pageSize
router.get("/", AttractionController.getAllAttractions);
// GET /attractions/:id
router.get("/:id", AttractionController.getAttractionById);

module.exports = router;
