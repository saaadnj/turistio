const express = require('express');
const AttractionController = require('../controllers/AttractionController');
const router = express.Router();

router.get('/', AttractionController.getAllAttractions);
router.get('/:id', AttractionController.getAttractionById);

module.exports = router;