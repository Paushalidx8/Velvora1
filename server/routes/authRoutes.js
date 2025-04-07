const express = require("express");
const router = express.Router();
const { signin } = require("../controllers/authControllers");

// POST or GET request to test signin route
router.get("/signin", signin);  // you can change to .post if frontend is using POST

module.exports = router;