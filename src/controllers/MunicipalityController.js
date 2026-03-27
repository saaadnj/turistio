const prisma = require('../db.js');

const MunicipalityController = {
  async getAllMunicipalities(req, res) {
    try {
      const { provinceId, regionId } = req.query;
      let where = {};
      if (provinceId) where.provinceId = Number(provinceId);
      // If regionId, filter via province
      if (regionId) where.province = { regionId: Number(regionId) };

      const results = await prisma.municipality.findMany({
        where,
        include: {
          province: { include: { region: true } }
        }
      });
      res.json(results);
    } catch (e) {
      res.status(500).json({ error: 'Server error' });
    }
  },
  async getMunicipalityById(req, res) {
    try {
      const id = Number(req.params.id);
      const municipality = await prisma.municipality.findUnique({
        where: { id },
        include: {
          province: { include: { region: true } },
          attractions: true
        }
      });
      if (!municipality) return res.status(404).json({ error: 'Municipality not found' });
      res.json(municipality);
    } catch (e) {
      res.status(500).json({ error: 'Server error' });
    }
  }
};

module.exports = MunicipalityController;