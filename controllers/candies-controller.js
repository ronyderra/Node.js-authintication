const express = require("express")
const candiesLogic = require("../business-logic/candies-logic");
const { request, response } = require("express");
const router = express.Router();


router.get("/desc", (request, response) => {
    try {
        const desc = candiesLogic.getCandyShopDescription()
        response.send(desc)
    }
    catch (err) {
        response.status(500).send(err.message)
    }
})


