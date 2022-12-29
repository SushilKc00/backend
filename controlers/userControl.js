const model = require("../models/dbSchema");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const KEY = "dkfjdskljfdskjfkdsljf";
const register = async (req, res) => {
  try {
    const userExist = await model.findOne({ gmail: req.body.gmail });
    if (!userExist) {
      const { gmail, password, name } = req.body;
      const hashPass = await bcrypt.hash(password, 10);
      const user = {
        name,
        gmail,
        password: hashPass,
      };
      await model.create(user);
      res.send({ mes: "success", success: true });
    } else {
      res.send({ mes: "user already exists ", success: false });
    }
  } catch (error) {
    res.status(400).send({ mes: error, success: false });
  }
};

const login = async (req, res) => {
  try {
    const userExist = await model.findOne({ gmail: req.body.gmail });
    if (!userExist) {
      res.send({ mes: "invalid user", success: false });
    } else {
      const token = await jsonwebtoken.sign({ _id: userExist._id }, KEY);
      const isMatch = await bcrypt.compare(
        req.body.password,
        userExist.password
      );
      if (isMatch) {
        res.send({ mes: "login successfull", success: true, token });
      } else {
        res.send({ mes: "invalid details", success: false });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const authUser = (req, res) => {};

module.exports = { register, login, authUser };
