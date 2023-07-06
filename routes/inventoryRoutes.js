const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { createInventory } = require("../controllers/inventoryController");
const router = express.Router();

// ROUTES
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventory);
module.exports = router;
