'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog_Post = sequelize.define('Blog_Post', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    meta: DataTypes.JSON,
    content: DataTypes.TEXT
  }, {});
  Blog_Post.associate = function(models) {
    // associations can be defined here
  };
  return Blog_Post;
};