"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hijaiyah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hijaiyah.hasMany(models.Harkat, {
        foreignKey: "huruf_id",
        as: "harkats",
      });
    }
  }
  Hijaiyah.init(
    {
      huruf: DataTypes.STRING,
      tulisan_latin: DataTypes.STRING,
      pengucapan: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Hijaiyah",
    }
  );
  return Hijaiyah;
};
