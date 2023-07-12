const express = require("express");
const {
  registerController,
  loginUser,
  getProfile,
} = require("../controllers/authControllers");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// @desc Auth user
// route POST /app/v1/auth
// @access public
// ROUTES
// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginUser);

// GET CURRENT USER || GETUSER
router.get("/current-user", authMiddleware, getProfile);
module.exports = router;
