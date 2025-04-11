const Workspace = require("../model/Workspace")

class WorkspaceControllers {
    static async getWorkspacesByUser(req, res) {
        try {
            const { userId } = req.params;
            const workspaces = await Workspace.findAll({ where: { userId } });
            res.status(200).json(workspaces);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch workspaces" });
        }
    }

    static async addWorkspace(req, res) {
        try {
            const { workspaceName, description, color, userId } = req.body;
            const newWorkspace = await Workspace.create({ workspaceName, description, color, userId });
            res.status(201).json({newWorkspace});
        } catch (error) {
            res.status(500).json({ error: "Failed to add workspace" });
        }
    }

    static async editWorkspace(req, res) {
        try {
            const { id } = req.params;
            const { workspaceName, description, color } = req.body;
            const updatedWorkspace = await Workspace.update(
                { workspaceName, description, color },
                { where: { id } }
            );
            if (updatedWorkspace[0] === 0) {
                return res.status(404).json({ error: "Workspace not found" });
            }
            res.status(200).json({ message: "Workspace updated successfully" });
        } catch (error) {
            res.status(500).json({ error: "Failed to update workspace" });
        }
    }

    static async deleteWorkspace(req, res) {
        try {
            const { id } = req.params;
            const deleted = await Workspace.destroy({ where: { id } });
            if (!deleted) {
                return res.status(404).json({ error: "Workspace not found" });
            }
            res.status(200).json({ success: true, message: "Workspace deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: "Failed to delete workspace" });
        }
    }
}

module.exports = WorkspaceControllers;
