'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      blog: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      blogType: {
        allowNull: false,
        type: Sequelize.ENUM('text', 'quote', 'image', 'video', 'audio', 'giphy')
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      mediaUrl: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING(50)
      },
      description: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Blogs');
  }
};
