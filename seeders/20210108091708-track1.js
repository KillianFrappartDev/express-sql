'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Tracks',
      [
        {
          title: 'Track One',
          youtube_url: 'www.youtube.com',
          id_album: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Track Two',
          youtube_url: 'www.youtube.com',
          id_album: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Track Three',
          youtube_url: 'www.youtube.com',
          id_album: '2',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tracks', null, {});
  }
};
