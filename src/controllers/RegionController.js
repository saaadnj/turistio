const prisma = require('../db.js');

const RegionController = {
  async getAllRegions(req, res) {
    try {
      const results = await prisma.region.findMany();
      res.json(results);
    } catch (e) {
      res.status(500).json({ error: 'Server error' });
    }
  },
  async getRegionById(req, res) {
    try {
      const id = Number(req.params.id);
      const region = await prisma.region.findUnique({
        where: { id },
        include: { provinces: true }
      });
      if (!region) return res.status(404).json({ error: 'Region not found' });
      res.json(region);
    } catch (e) {
      res.status(500).json({ error: 'Server error' });
    }
  }
};

module.exports = RegionController;