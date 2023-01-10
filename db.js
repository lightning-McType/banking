const mongoose = require("mongoose");

const setupDB = () => {
  try {
    mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database successfully");
  } catch (err) {
    console.log(err);
    console.log("Could not connect to database");
  }
};

module.exports = setupDB;