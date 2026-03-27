const prisma = require("../db.js");

const MunicipalityController = {
  /**
   * Get all municipalities, optionally filtered by provinceId or regionId
   */
  async getAllMunicipalities(req, res) {
    try {
      const { provinceId } = req.query;
      let page = Number(req.query.page) || 1;
      let pageSize = Number(req.query.pageSize);
      if (!pageSize || isNaN(pageSize) || pageSize < 1) pageSize = 50;
      let where = {};
      if (provinceId) where.provinceId = Number(provinceId);

      const skip = (page - 1) * pageSize;
      const take = pageSize;

      const [results, total] = await Promise.all([
        prisma.municipality.findMany({
          where,
          skip,
          take,
          include: {
            province: { include: { region: true } },
            attractions: { take: 10 },
          },
        }),
        prisma.municipality.count({ where }),
      ]);

      res.status(200).json({
        success: true,
        message: results.length
          ? `Found ${results.length} municipalities.`
          : "No municipalities found.",
        data: results,
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      });
    } catch (e) {
      console.error("Error fetching municipalities:", e);
      res.status(500).json({
        success: false,
        error: "Failed to fetch municipalities. Please try again later.",
        details: e.message,
      });
    }
  },

  /**
   * Get a single municipality by ID
   */
  async getMunicipalityById(req, res) {
    try {
      const id = Number(req.params.id);
      if (!id || isNaN(id)) {
        return res.status(400).json({
          success: false,
          error: "Invalid municipality ID. Please provide a valid numeric ID.",
        });
      }
      let attractionsLimit = Number(req.query.attractionsLimit);
      if (!attractionsLimit || isNaN(attractionsLimit) || attractionsLimit < 1)
        attractionsLimit = 10;
      const municipality = await prisma.municipality.findUnique({
        where: { id },
        include: {
          province: { include: { region: true } },
          attractions: { take: attractionsLimit },
        },
      });
      if (!municipality) {
        return res.status(404).json({
          success: false,
          error: `Municipality with ID ${id} not found.`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Municipality with ID ${id} found.`,
        data: municipality,
      });
    } catch (e) {
      console.error(`Error fetching municipality with ID ${req.params.id}:`, e);
      res.status(500).json({
        success: false,
        error: "Failed to fetch municipality. Please try again later.",
        details: e.message,
      });
    }
  },
};

module.exports = MunicipalityController;
