module.exports = (sequelize, DataTypes) => sequelize.define('User', {
        displayName: DataTypes.STRING,
        email: { type: DataTypes.STRING, unique: true },
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, { tableName: 'Users', timestamps: false });