const express = require("express");
const ItemController = require("../controllers/ItemControllers.js")

const router = express.Router();

router.get("/getByWorkspace/:workspaceId", ItemController.getItemsByWorkspace);
router.post("/addItem", ItemController.addItem);
router.delete("/deleteItem/:id", ItemController.deleteItem);
router.put("/editItem/:id", ItemController.editItem);

module.exports = router;