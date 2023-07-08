const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventory,
  getInventoryController,
} = require("../controllers/inventoryController");
const router = express.Router();

// ROUTES
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventory);

// GET ALL BLOOD RECORDS || GET
router.get("/get-inventory", authMiddleware, getInventoryController);
module.exports = router;
