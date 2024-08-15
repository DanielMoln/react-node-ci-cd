const express = require("express");
const app = express();

app.get("/name", (req, res) => {
  res.send("Telmo!");
});

app.listen(8080, () => console.log("Hello world :)"));
