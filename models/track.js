'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Track.belongsTo(models.Album);
    }
  }
  Track.init(
    {
      youtube_url: DataTypes.STRING,
      title: DataTypes.STRING,
      id_album: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'albums'
          },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    },
    {
      sequelize,
      modelName: 'Track'
    }
  );
  return Track;
};
