const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const KEY = "dkfjdskljfdskjfkdsljf";

const { register, login, authUser } = require("../controlers/userControl");

const auth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    const userData = await jwt.verify(token, KEY);
    if (userData) {
      next();
    }
  } catch (error) {
    res.send({ message: error, success: false });
  }
};

router.post("/register", register);
router.post("/login", login);
router.post("/authuser", auth, authUser);

module.exports = router;
