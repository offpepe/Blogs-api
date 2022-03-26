module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
    }, { tableName: 'Posts', createdAt: 'published', updatedAt: 'updated' });
  
    Post.associate = (models) => {
      Post.belongsTo(models.user, {
        foreignKey: 'userId', as: 'user',
      });
     };
    return Post;
};