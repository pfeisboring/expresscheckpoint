const express = require("express");

const app = express();

const port = 5000;

var today = new Date();
var t = new Date(
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
);
var t = new Date(); //why
console.log(t.getHours());
console.log(t.getDay());

const workinghours = function (req, res, next) {
  var fileName =
    "C:/Users/Walid Boulima/Desktop/GMCBACKK/Express/express checkpoint/public/Error.html";
  if (
    t.getHours() < 9 ||
    t.getHours() > 19 ||
    t.getDay() == 6 ||
    t.getDay() == 7
  ) {
    console.log("error 1");
    // res.sendFile(__dirname + "/public/Error.html");
    res.sendFile(fileName);
  } else {
    next();
  }
};

app.use(workinghours);

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/Service.html");
});

app.listen(port, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
