'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Albums',
      [
        {
          title: 'Album One',
          genre: 'Pop',
          artist: 'John Doe',
          picture: 'xxx',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Album Two',
          genre: 'Tap',
          artist: 'Max B.',
          picture: 'yyy',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Albums', null, {});
  }
};
