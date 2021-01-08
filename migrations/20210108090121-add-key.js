'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Tracks', 'id_album', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'albums'
        },
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Tracks', 'id_album');
  }
};
