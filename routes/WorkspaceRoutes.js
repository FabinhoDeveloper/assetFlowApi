const express = require("express");
const workspaceControllers = require("../controllers/WorkspaceControllers.js");

const router = express.Router();

router.get("/getById/:id", workspaceControllers.getWorkspaceById);
router.get("/getByUser/:userId", workspaceControllers.getWorkspacesByUser);
router.post("/add", workspaceControllers.addWorkspace);
router.put("/edit/:id", workspaceControllers.editWorkspace);
router.delete("/delete/:id", workspaceControllers.deleteWorkspace);

module.exports = router;
