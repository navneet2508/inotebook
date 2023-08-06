const mongoose = require("mongoose");

const connectToMongo = async () => {
  await mongoose.connect(
    "mongodb+srv://navneetrao:rckVp4p5yZbvQxbd@personal.vgiveoi.mongodb.net/?retryWrites=true&w=majority",
    () => {
      console.log("Mongo connected successfully");
    }
  );
};

module.exports = connectToMongo;
