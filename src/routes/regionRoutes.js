const express = require("express");
const RegionController = require("../controllers/RegionController");
const router = express.Router();

// GET /regions
router.get("/", RegionController.getAllRegions);
// GET /regions/:id
router.get("/:id", RegionController.getRegionById);

module.exports = router;
