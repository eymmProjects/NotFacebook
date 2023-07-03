const express = require("express");
const { home } = require("../contrllers/user");

const router = express.Router();

// router.get("/user", (req, res) => {
//   res.send("welcome from user home");
// });

router.get("/user", home);

module.exports = router;
