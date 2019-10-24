const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => res.sendFile(__dirname + "/pages/index.html"));
app.use(express.static(__dirname));
app.listen(port, () =>
  console.log("The server is now listening on port 3000!")
);
