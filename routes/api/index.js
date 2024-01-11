// Create an Express router
const router = require("express").Router();
// Import route handlers for different resources
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const tagRoutes = require("./tag-routes");
// Mount route handlers to specific paths
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);
// Export the router for use in the main application
module.exports = router;
