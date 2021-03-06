'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Album.hasMany(models.Track, { foreignKey: 'id_album' });
    }
  }
  Album.init(
    {
      title: DataTypes.STRING,
      genre: DataTypes.STRING,
      picture: DataTypes.STRING,
      artist: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Album'
    }
  );
  return Album;
};
