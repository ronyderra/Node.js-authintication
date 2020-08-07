global.config = require("./config.json")
const express = require("express")
const cors = require("cors")
const authController = require("./controllers/auth-controller")

const server = express();

server.use(cors())
server.use(express.json())
server.use("/api/auth", authController)


server.listen(3000, () => console.log("listining on port http://localhost:3000"))