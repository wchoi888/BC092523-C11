// Import necessary modules from the Sequelize library
const { Model, DataTypes } = require("sequelize");
// Import the Sequelize instance for connecting to the database
const sequelize = require("../config/connection.js");
// Define a Category class that extends the Sequelize Model class
class Category extends Model {}
// Initialize the Category model with the specified column definitions
Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);
// Export the Category model for use in other parts of the application
module.exports = Category;
