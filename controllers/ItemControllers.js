const sequelize = require("../config/database.js");

class ItemController {
    static async getItemsByWorkspace(req, res) {
        const { workspaceId } = req.params;
        try {
            const items = await sequelize.models.Item.findAll({ where: { workspaceId } });
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch items by workspace." });
        }
    }

    static async addItem(req, res) {
        const { itemName, category, serialNumber, value, assignedTo, location, description, purchaseDate, workspaceId } = req.body;
        try {
            const newItem = await sequelize.models.Item.create({
                itemName,
                category,
                serialNumber,
                value,
                assignedTo,
                location,
                description,
                purchaseDate,
                workspaceId,
            });
            res.status(201).json({success: true, newItem});
        } catch (error) {
            res.status(500).json({ error: "Failed to add item." });
        }
    }

    static async editItem(req, res) {
        const { id } = req.params;
        const { itemName, category, serialNumber, value, assignedTo, location, description, purchaseDate } = req.body;
        
        console.log(purchaseDate)

        try {
            const updatedItem = await sequelize.models.Item.update(
                { itemName, category, serialNumber, value, assignedTo, location, description, purchaseDate },
                { where: { id } }
            );
            if (updatedItem[0] === 0) {
                res.json({ error: "Item not found." });
            } else {
                res.status(200).json({ success: true, message: "Item updated successfully." });
            }
        } catch (error) {
            res.status(500).json({ error: "Failed to update item." });
        }
    }

    static async deleteItem(req, res) {
        const { id } = req.params;
        try {
            const deletedItem = await sequelize.models.Item.destroy({ where: { id } });
            if (deletedItem === 0) {
                res.json({ error: "Item não encontrado." });
            } else {
                res.status(200).json({ success: true, message: "Item deletado com sucesso." });
            }
        } catch (error) {
            res.status(500).json({ error: "Failed to delete item." });
        }
    }
}

module.exports = ItemController
