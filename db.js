const mongoose = require("mongoose");

const setupDB = () => {
  try {
    mongoose.connect(
      "mongodb+srv://samsepi0l:pa55word@cluster0.qjkt8fk.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to database successfully");
  } catch (err) {
    console.log(err);
    console.log("Could not connect to database");
  }
};

module.exports = setupDB;
