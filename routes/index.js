const express = require('express');

// Local Imports
const controllers = require('../controllers');

const router = express.Router();

router.get('/albums/:aid', controllers.readAlbumById);
router.get('/tracks/:aid', controllers.readAlbumTracks);
router.post('/albums', controllers.createAlbum);
router.post('/tracks', controllers.createTrack);
router.delete('/albums/:aid', controllers.deleteAlbum);

module.exports = router;
