const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("/name", (req, res) => {
  res.send("Telmo!");
});

app.listen(8080, () => console.log("Hello world :)"));
