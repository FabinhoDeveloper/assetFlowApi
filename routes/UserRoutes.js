const express = require("express");
const UserControllers = require("../controllers/UserControllers.js");

const router = express.Router();

router.get("/getById/:id", UserControllers.getUserById)
router.post("/auth", UserControllers.auth);
router.post("/addUser", UserControllers.addUser);
router.put("/editUser/:id", UserControllers.editUser);

module.exports = router;
