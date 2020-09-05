'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Blogs', [
        { title: 'Wah Wah Wah', blog: 'wah wah wah wah wah wah', description: 'wah wah wah', userId: 2, blogType: 'text', createdAt: new Date(), updatedAt: new Date() },
        { title: 'Blah Blah', blog: 'blah blah blah blah blah blah', userId: 1, blogType: 'text', createdAt: new Date(), updatedAt: new Date() },
        { blog: 'wah blah wah blah wah blah', description: 'blah blah wah', userId: 1, blogType: 'quote', createdAt: new Date(), updatedAt: new Date() },
        { blog: 'quack quack quack quack quack quack', userId: 2, blogType: 'audio', mediaUrl: 'https://soundcloud.com/djdiamondkuts/dj-diamond-kuts-club-mix', createdAt: new Date(), updatedAt: new Date() },
       ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Blogs', null, {});
  }
};
