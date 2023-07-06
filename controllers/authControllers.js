const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

// *@desc Auth user
// route POST /app/v1/auth/register
// @access public
const registerController = async (req, res) => {
  try {
    const exisitingUser = await userModel.findOne({ email: req.body.email });
    //validation
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "User ALready exists",
      });
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    //rest data
    const user = new userModel(req.body);
    await user.save();
    return res.status(201).send({
      success: true,
      message: "User Registerd Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Register API",
      error,
    });
  }
};

//  *@desc Login user
// route POST /app/v1/auth/login
// @access public

const loginUser = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // check role
    if (user.role !== req.body.role) {
      res.status(500).send({
        success: false,
        message: "Role not found",
      });
    }
    // password comparing

    const comparingPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!comparingPassword) {
      res.status(500).send({
        success: false,
        message: "Invalid password",
      });
    }

    // Generating Token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      success: true,
      message: "LOGIN Successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Register API",
      error,
    });
  }
};

//  *@desc Login user
// route POST /app/v1/auth/profile
// @access private

const getProfile = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: request.body.userId });
    return res.status(200).send({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "unable to get profile",
      error,
    });
  }
};

module.exports = { registerController, loginUser, getProfile };
