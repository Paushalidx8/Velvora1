const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authroutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // <== VERY important
app.use("/api/auth", authRoutes);

// Connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected!");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error("DB Connection failed:", err));
