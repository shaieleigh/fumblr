'use strict';



module.exports = (sequelize, DataTypes) => {
  const Blogs = sequelize.define('Blogs', {
    blog: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    blogType: {
      type: DataTypes.ENUM('text', 'quote', 'image', 'video', 'audio', 'giphy'),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mediaUrl: {
      type: DataTypes.STRING,
      validates: {
        isUrl: true,
      }
    },
    title: {   
      type: DataTypes.STRING,
      validates: {
        len: [3, 50]
      }
    },
    description: {
      type: DataTypes.STRING
    },
  }, {});
  Blogs.associate = function(models) {
    Blogs.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };
  return Blogs;
};
