const prisma = require("../db.js");

const ProvinceController = {
  /**
   * Get all provinces, optionally filtered by regionId
   */
  async getAllProvinces(req, res) {
    try {
      const { regionId } = req.query;
      let where = {};
      if (regionId) where.regionId = Number(regionId);

      const results = await prisma.province.findMany({
        where,
        include: { region: true, municipalities: true },
      });
      res.status(200).json({
        success: true,
        message: results.length
          ? `Found ${results.length} provinces.`
          : "No provinces found.",
        data: results,
      });
    } catch (e) {
      console.error("Error fetching all provinces:", e);
      res.status(500).json({
        success: false,
        error: "Failed to fetch provinces. Please try again later.",
        details: e.message,
      });
    }
  },

  /**
   * Get a single province by ID
   */
  async getProvinceById(req, res) {
    try {
      const id = Number(req.params.id);
      if (!id || isNaN(id)) {
        return res.status(400).json({
          success: false,
          error: "Invalid province ID. Please provide a valid numeric ID.",
        });
      }
      const province = await prisma.province.findUnique({
        where: { id },
        include: {
          region: true,
          municipalities: true,
        },
      });
      if (!province) {
        return res.status(404).json({
          success: false,
          error: `Province with ID ${id} not found.`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Province with ID ${id} found.`,
        data: province,
      });
    } catch (e) {
      console.error(`Error fetching province with ID ${req.params.id}:`, e);
      res.status(500).json({
        success: false,
        error: "Failed to fetch province. Please try again later.",
        details: e.message,
      });
    }
  },
};

module.exports = ProvinceController;
