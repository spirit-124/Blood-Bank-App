const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

// ADD INVENTORY
const createInventory = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    if (inventoryType === "in" && user.role !== "Donor") {
      throw new Error("Not a Donor account");
    }
    if (inventoryType === "out" && user.role !== "hospital") {
      throw new Error("Not a hospital account");
    }
    // SAVE INVENTORY
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    response.status(200).json({
      success: true,
      message: "Blood Record saved successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error creating inventory",
      error,
    });
  }
};

module.exports = { createInventory };
