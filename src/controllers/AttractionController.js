const prisma = require('../db.js')

const AttractionController = {
  async getAllAttractions(req, res) {
    try {
      const { regionId, provinceId, municipalityId, category, minRating } = req.query;
      let where = {};

      if (category) where.category = category;
      if (minRating) where.averageRating = { gte: Number(minRating) };
      if (municipalityId) where.municipalityId = Number(municipalityId);
      else if (provinceId) where.municipality = { provinceId: Number(provinceId) };
      else if (regionId) where.municipality = { province: { regionId: Number(regionId) } };

      const results = await prisma.attraction.findMany({
        where,
        include: {
          municipality: {
            include: {
              province: { include: { region: true } }
            }
          }
        }
      });
      res.json(results);
    } catch (e) {
      res.status(500).json({ error: 'Server error' });
    }
  },
  async getAttractionById(req, res) {
    try {
      const id = Number(req.params.id);
      const attraction = await prisma.attraction.findUnique({
        where: { id },
        include: {
          municipality: { include: { province: { include: { region: true } } } }
        }
      });
      if (!attraction) return res.status(404).json({ error: 'Attraction not found' });
      res.json(attraction);
    } catch (e) {
      res.status(500).json({ error: 'Server error' });
    }
  }
};

module.exports = AttractionController;