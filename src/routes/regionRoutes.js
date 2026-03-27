const express = require('express');
const RegionController = require('../controllers/RegionController');
const router = express.Router();

router.get('/', RegionController.getAllRegions);
router.get('/:id', RegionController.getRegionById);

module.exports = router;