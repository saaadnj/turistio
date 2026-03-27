const prisma = require("../db.js");

const AttractionController = {
  /**
   * Get all attractions with filtering and pagination
   * Query params: regionId, provinceId, municipalityId, category, minRating, page, pageSize
   */
  async getAllAttractions(req, res) {
    try {
      const {
        regionId,
        provinceId,
        municipalityId,
        category,
        minRating,
        page = 1,
        pageSize = 20,
      } = req.query;
      let where = {};

      if (category) where.category = category;
      if (minRating) where.averageRating = { gte: Number(minRating) };
      if (municipalityId) where.municipalityId = Number(municipalityId);
      else if (provinceId)
        where.municipality = { provinceId: Number(provinceId) };
      else if (regionId)
        where.municipality = { province: { regionId: Number(regionId) } };

      const skip = (Number(page) - 1) * Number(pageSize);
      const take = Number(pageSize);

      const [results, total] = await Promise.all([
        prisma.attraction.findMany({
          where,
          skip,
          take,
          include: {
            municipality: {
              include: {
                province: { include: { region: true } },
              },
            },
          },
        }),
        prisma.attraction.count({ where }),
      ]);

      res.status(200).json({
        success: true,
        message: results.length
          ? `Found ${results.length} attractions.`
          : "No attractions found.",
        data: results,
        page: Number(page),
        pageSize: Number(pageSize),
        total,
        totalPages: Math.ceil(total / pageSize),
      });
    } catch (e) {
      console.error("Error fetching attractions:", e);
      res.status(500).json({
        success: false,
        error: "Failed to fetch attractions. Please try again later.",
        details: e.message,
      });
    }
  },

  /**
   * Get a single attraction by ID
   */
  async getAttractionById(req, res) {
    try {
      const id = Number(req.params.id);
      if (!id || isNaN(id)) {
        return res.status(400).json({
          success: false,
          error: "Invalid attraction ID. Please provide a valid numeric ID.",
        });
      }
      const attraction = await prisma.attraction.findUnique({
        where: { id },
        include: {
          municipality: {
            include: { province: { include: { region: true } } },
          },
        },
      });
      if (!attraction) {
        return res.status(404).json({
          success: false,
          error: `Attraction with ID ${id} not found.`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Attraction with ID ${id} found.`,
        data: attraction,
      });
    } catch (e) {
      console.error(`Error fetching attraction with ID ${req.params.id}:`, e);
      res.status(500).json({
        success: false,
        error: "Failed to fetch attraction. Please try again later.",
        details: e.message,
      });
    }
  },
};

module.exports = AttractionController;
