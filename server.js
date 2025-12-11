const express = require("express");
const cors = require('cors');
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Restaurant Backend" });
});
app.use("/search", require("./src/routes/searchRoutes"));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
