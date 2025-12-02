const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db")
require('dotenv').config()
const apiRoutes = require("./Routes/deataisRoutes");

const app = express();
connectDb()

app.use(express.json());
app.use(cors())

// Use Routes
app.use("/api", apiRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));