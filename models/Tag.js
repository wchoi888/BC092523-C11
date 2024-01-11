// Import necessary modules from the Sequelize library
const { Model, DataTypes } = require("sequelize");
// Import the Sequelize instance for connecting to the database
const sequelize = require("../config/connection.js");
// Define a Tag class that extends the Sequelize Model class
class Tag extends Model {}
// Initialize the Tag model with the specified column definitions
Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);
// Export the Tag model for use in other parts of the application
module.exports = Tag;
