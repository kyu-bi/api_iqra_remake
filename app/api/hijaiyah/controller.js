const { Hijaiyah } = require("../../database/models");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const hijaiyahs = await Hijaiyah.findAll();

      res.status(200).json({
        success: true,
        message: "Data successfully loaded",
        data: hijaiyahs,
      });
    } catch (error) {
      next(error);
    }
  },

  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;

      const hijaiyah = await Hijaiyah.findOne({
        where: { id: id },
        include: "harkats",
      });

      res.status(200).json({
        success: true,
        message: "Data successfully loaded",
        data: hijaiyah,
      });
    } catch (error) {
      next(error);
    }
  },
};
