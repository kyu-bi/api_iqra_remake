const express = require("express");
const router = express.Router();
const controller = require("./controller");

// Get List Hijaiyah
router.get("/hijaiyah", controller.getAll);
router.get("/hijaiyah/:id", controller.getOne);

module.exports = router;
