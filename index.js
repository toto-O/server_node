const express = require("express");
var app = express();

app.get("/hello", (req, res) => {
  res.set({ "Access-Control-Allow-Origin": "*" });
  res.json({ message: "hello" });
  res.send("response Express.js");
});

const port_number = 3000;
app.listen(port_number, () => {
  console.log("start server port:3000");
});
