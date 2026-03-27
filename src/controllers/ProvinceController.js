const prisma = require('../db.js');

const ProvinceController = {
  async getAllProvinces(req, res) {
    try {
      const { regionId } = req.query;
      let where = {};
      if (regionId) where.regionId = Number(regionId);

      const results = await prisma.province.findMany({
        where,
        include: { region: true }
      });
      res.json(results);
    } catch (e) {
      res.status(500).json({ error: 'Server error' });
    }
  },
  async getProvinceById(req, res) {
    try {
      const id = Number(req.params.id);
      const province = await prisma.province.findUnique({
        where: { id },
        include: {
          region: true,
          municipalities: true
        }
      });
      if (!province) return res.status(404).json({ error: 'Province not found' });
      res.json(province);
    } catch (e) {
      res.status(500).json({ error: 'Server error' });
    }
  }
};

module.exports = ProvinceController;