"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Harkat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Harkat.belongsTo(models.Hijaiyah, { foreignKey: "huruf_id" });
    }
  }
  Harkat.init(
    {
      huruf_id: DataTypes.INTEGER,
      harkat: DataTypes.STRING,
      tulisan_arab: DataTypes.STRING,
      tulisan_latin: DataTypes.STRING,
      audio: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Harkat",
    }
  );
  return Harkat;
};
