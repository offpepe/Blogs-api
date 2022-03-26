module.exports = (sequelize, _DataTypes) => {
    const PostCategory = sequelize.define('PostCategory',
      {},
      { 
        timestamps: false,
        tableName: 'PostsCategories',
      });
  
    PostCategory.associate = (models) => {
      models.Post.belongsToMany(models.Category, {
        as: 'categories', through: PostCategory, foreignKey: 'categoryId', otherKey: 'postId',
      });
      models.Category.belongsToMany(models.Post, {
        as: 'posts', through: PostCategory, foreignKey: 'postId', otherKey: 'categoryId',
      });
    };
  
    return PostCategory;
  };