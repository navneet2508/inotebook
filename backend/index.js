const connectToMongo = require("./db");

const express = require("express");

connectToMongo();
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello Navneet!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
