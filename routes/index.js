var express = require('express');
var router = express.Router();

// Signup Route
router.get('/test', (req, res) => {
  res.send("hello")
})

module.exports = router;
