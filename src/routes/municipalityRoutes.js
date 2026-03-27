const express = require('express');
const MunicipalityController = require('../controllers/MunicipalityController');
const router = express.Router();

router.get('/', MunicipalityController.getAllMunicipalities);
router.get('/:id', MunicipalityController.getMunicipalityById);

module.exports = router;