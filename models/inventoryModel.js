const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema(
  {
    inventoryType: {
      type: String,
      enum: ["in", "out"],
      required: [true, "inventory type required"],
    },
    bloodGroup: {
      type: String,
      enum: ["o+", "o-", "A+", "A-", "B+", "B-", "Ab+", "Ab-"],
      required: [true, "BloodGroup type required"],
    },
    quantity: {
      type: Number,
      required: [true, "Blood Quantity is required"],
    },
    email: {
      type: String,
      required: [true, "Donar Email is Required"],
    },
    organisation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "organisation is required"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "out";
      },
    },
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "in";
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Inventory", InventorySchema);
