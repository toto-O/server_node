const express = require("express");
var app = express();

app.get("/hello", (req, res) => {
  res.json({ message: "hello" });
  res.send("response Express.js");
});

app.listen(3000, () => {
  console.log("start server port:3000");
});
