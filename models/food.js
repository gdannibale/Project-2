module.exports = function (sequelize, DataTypes) {
    let Food = sequelize.define("Food", {
        name: DataTypes.STRING,
        calories: DataTypes.STRING,
    });
    return Food;
};
