const prisma = require("../db.js");

const RegionController = {
  /**
   * Get all regions
   */
  async getAllRegions(req, res) {
    try {
      const results = await prisma.region.findMany({
        include: { provinces: true },
      });
      res.status(200).json({
        success: true,
        message: results.length
          ? `Found ${results.length} regions.`
          : "No regions found.",
        data: results,
      });
    } catch (e) {
      console.error("Error fetching all regions:", e);
      res.status(500).json({
        success: false,
        error: "Failed to fetch regions. Please try again later.",
        details: e.message,
      });
    }
  },

  /**
   * Get a single region by ID
   */
  async getRegionById(req, res) {
    try {
      const id = Number(req.params.id);
      if (!id || isNaN(id)) {
        return res.status(400).json({
          success: false,
          error: "Invalid region ID. Please provide a valid numeric ID.",
        });
      }
      const region = await prisma.region.findUnique({
        where: { id },
        include: { provinces: true },
      });
      if (!region) {
        return res.status(404).json({
          success: false,
          error: `Region with ID ${id} not found.`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Region with ID ${id} found.`,
        data: region,
      });
    } catch (e) {
      console.error(`Error fetching region with ID ${req.params.id}:`, e);
      res.status(500).json({
        success: false,
        error: "Failed to fetch region. Please try again later.",
        details: e.message,
      });
    }
  },
};

module.exports = RegionController;
