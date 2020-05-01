const express = require("express");
const ingredientsModel = require("./recipes-model");
const db = require("../data/config");

const router = express.Router({
    mergeParams: true,
});
