const express = require("express");
const database = require("./config/database");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
require("dotenv/config");

const app = express();

database();

app.use(cors());

app.use("/api/user", userRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
