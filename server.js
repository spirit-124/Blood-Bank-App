const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDb = require("./config/db");
// const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes.js");
const { notFound, errHandler } = require("./middlewares/errorMiddleware");

// dot config
dotenv.config();

// Database Connection
connectDb();

// express object
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// /Routes
app.use("/app/v1/auth", authRoutes);
app.use("/app/v1/inventory", require("./routes/inventoryRoutes"));
app.use(notFound);
app.use(errHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("listening on port => " + PORT);
});
