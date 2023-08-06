const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose.connect("mongodb://localhost:27017", () => {
    console.log("Mongo connected successfully");
  });
};

module.exports = connectToMongo;
