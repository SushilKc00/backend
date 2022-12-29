const express = require("express");
const app = express();
const router = require("./router/routes");
const connection = require("./connection/dataConnection");
const cors = require("cors");
const cookiParser = require("cookie-parser");
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use(cookiParser());
connection();

app.get("/", (req, res) => {
  res.send("welcome");
});
app.get("/testing", (req, res) => {
  res.send("testing");
});

app.listen(8080, () => {
  console.log("Server is listen");
});
