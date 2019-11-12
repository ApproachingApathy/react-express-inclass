'use strict';
module.exports = (sequelize, DataTypes) => {
  const blog_post = sequelize.define('blog_post', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    meta: DataTypes.JSON
  }, {});
  blog_post.associate = function(models) {
    // associations can be defined here
  };
  return blog_post;
};