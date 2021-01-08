// Local Imports
const { Album, Track } = require('../models');

const createAlbum = async (req, res, next) => {
  const { title, genre, picture, artist } = req.body;

  const album = await Album.create({ title, genre, picture, artist });
  try {
    await album.save();
  } catch (error) {
    console.log(error);
    return next(new Error('Could not save album.'));
  }

  res.json({ album });
};

const createTrack = async (req, res, next) => {
  const { youtube_url, title, id_album } = req.body;

  const track = await Track.create({ title, youtube_url, id_album });

  try {
    await track.save();
  } catch (error) {
    console.log(error);
    return next(new Error('Could not save track.'));
  }

  res.json({ track });
};

const readAlbumById = async (req, res, next) => {
  const aid = req.params.aid;

  let album;
  try {
    album = await Album.findByPk(aid);
  } catch (error) {
    console.log(error);
    return next(new Error('Could not find album by id.'));
  }

  res.json({ album });
};

const readAlbumTracks = async (req, res, next) => {
  const aid = req.params.aid;

  let album;
  try {
    album = await Album.findByPk(aid);
  } catch (error) {
    console.log(error);
    return next(new Error('Could not find album by id.'));
  }

  const tracks = await album.getTracks();

  res.json({ tracks });
};

const deleteAlbum = async (req, res, next) => {
  const aid = req.params.aid;

  try {
    await Album.destroy({
      where: {
        id: aid
      }
    });
  } catch (error) {
    console.log(error);
    return next(new Error('Could not delete album by id.'));
  }

  res.json({ message: 'Deleted' });
};

module.exports = { createAlbum, readAlbumById, createTrack, readAlbumTracks, deleteAlbum };
