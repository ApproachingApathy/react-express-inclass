'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return Promise.all([
      queryInterface.renameTable('blog_posts', 'Blog_Posts'),
      queryInterface.addColumn('Blog_Posts', 'content', {
          type: Sequelize.TEXT
        })
    ])
   
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return Promise.all([
     queryInterface.renameTable('Blog_Posts', 'blog_posts'),
     queryInterface.removeColumn('blog_posts', 'content'),
    ])
  }
};
