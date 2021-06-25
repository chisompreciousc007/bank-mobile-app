const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
const path = require("path");
const userRouter = require("./routes/user");
//
const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI || process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
try {
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
} catch (error) {
  console.log("errrorrrr");
}
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
// app.use("/api/transactions", transactionRouter);
// app.use("/api/balance", balanceRouter);
app.use("/api/users", userRouter);
app.use(express.static("client/build"));
if ((process.env.NODE_ENV || "").trim() === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
