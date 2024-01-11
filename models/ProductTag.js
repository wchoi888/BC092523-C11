// Import necessary modules from the Sequelize library
const { Model, DataTypes } = require("sequelize");
// Import the Sequelize instance for connecting to the database
const sequelize = require("../config/connection");
// Define a ProductTag class that extends the Sequelize Model class
class ProductTag extends Model {}
// Initialize the ProductTag model with the specified column definitions
ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);
// Export the ProductTag model for use in other parts of the application
module.exports = ProductTag;
