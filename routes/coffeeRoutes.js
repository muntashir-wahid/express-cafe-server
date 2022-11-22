const express = require("express");
const dbo = require("../db/conn");
const {
  createCoffee,
  readCoffees,
} = require("./../controllers/coffeeController");

const router = express.Router();

router.route("/").post(createCoffee).get(readCoffees);

module.exports = router;
