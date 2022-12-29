const monggose = require("mongoose");
monggose.set("strictQuery", false);
const connection = async () => {
  try {
    await monggose.connect(
      "mongodb+srv://sushilkc:kc12526688@cluster0.5khn2mb.mongodb.net/Mern?retryWrites=true&w=majority"
    );
    console.log("DataBaseConnect");
  } catch (error) {
    console.log(`Server ${error}`);
  }
};
module.exports = connection;
