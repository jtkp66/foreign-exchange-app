const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// @route   GET api/surveys/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Surveys Works" }));

module.exports = router;
