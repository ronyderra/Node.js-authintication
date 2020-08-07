const authLogic = require("../business-logic/auth-logic")
const express = require("express")
const { response } = require("express")
const User = require("../models/user")
const router = express.Router()


router.post("/register", async (request, response) => {
    try {
        const user = new User(
            0, request.body.firstName,
            request.body.lastName,
            request.body.userName,
            request.body.password, 0)
            
        const addedUser = await authLogic.register(user);
        response.status(201).json(addedUser);

    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.post("/login", async (request, response) => {
    try {
        const loginData = request.body;
        const response = await authLogic.register(loginData);
        if (!user) {
            response.status(401).send("illegal username or password");
        }
        response(201).json(response);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.post("/logout", async (request, response) => {
    try {
        response.end();
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;
