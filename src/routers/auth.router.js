const express = require("express");
const { SignUp, LoginUser } = require("../controller/auth.controller");
const router = express.Router()

router.post('/sign-up', SignUp);
router.post('/login', LoginUser);

module.exports = router;