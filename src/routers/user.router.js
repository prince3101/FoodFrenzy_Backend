const express = require("express");
const { GenerateBill, getBills } = require("../controller/user.controller");
const router = express.Router()

router.post('/generate-bill', GenerateBill);
router.get('/getBill',getBills);

module.exports = router;