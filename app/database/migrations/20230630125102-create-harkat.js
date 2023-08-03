'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Harkats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      huruf_id: {
        type: Sequelize.INTEGER
      },
      harkat: {
        type: Sequelize.STRING
      },
      tulisan_arab: {
        type: Sequelize.STRING
      },
      tulisan_latin: {
        type: Sequelize.STRING
      },
      audio: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Harkats');
  }
};