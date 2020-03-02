const express = require("express");
const router = express.Router();
const { addMetric, getSum } = require("./../database/metrics");

router.post("/:key", (req, res) => {
  const key = req.params.key;
  const value = req.body.value;
  if (!value) {
    res.json({
      status: "fail",
      message: "The request body is missing the 'value' property."
    });
    return;
  }
  if (typeof value !== "number") {
    res.json({
      status: "fail",
      message: "The property 'value' only accepts numbers."
    });
    return;
  }
  addMetric(key, value);
  res.json({
    status: "success",
    message: `The value '${value}' was saved in the key '${key}'`
  });
});
router.get("/:key/sum", (req, res) => {
  const key = req.params.key;
  res.json({
    status: "success",
    data: {
      key: key,
      lastHourSum: getSum(key)
    }
  });
});
module.exports = router;
