const monggose = require("mongoose");

const schema = new monggose.Schema({
  name: {
    type: String,
    required: [true, "name is require"],
  },
  gmail: {
    type: String,
    unique: true,
    required: [true, "gmail is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
});

const model = monggose.model("userdata", schema);
module.exports = model;
