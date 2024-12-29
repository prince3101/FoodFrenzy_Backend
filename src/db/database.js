const mongoose = require("mongoose");

const connectionToDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("connect to db"))
    .catch((err) => console.log("error from db connection", err));
};

module.exports = connectionToDB;
