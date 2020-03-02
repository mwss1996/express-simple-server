const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/metric", require("./routes/metric"));
app.use(function(req, res) {
  res.status(404).json({
    status: "fail",
    message: "Page not Found."
  });
});

const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
