const sequelize = require("../config/database.js")

class UserControllers {
    static async auth(req, res) {
        const { email, password } = req.body;
        try {
            const user = await sequelize.models.User.findOne({ where: { email } });
            if (!user || user.password !== password) {
                res.status(401).json({ error: "Invalid credentials." });
            } else {
                res.status(200).json({ message: "Authentication successful.", user });
            }
        } catch (error) {
            res.status(500).json({ error: "Authentication failed." });
        }
    }

    static async getUserById(req, res) {
        const { id } = req.params;
        try {
            const user = await sequelize.models.User.findByPk(id);
            if (!user) {
                return res.status(404).json({ error: "User not found." });
            }
            res.status(200).json({ user });
        } catch (error) {
            res.status(500).json({ error: "Failed to retrieve user." });
        }
    }

    static async addUser(req, res) {
        const { firstName, lastName, email, company, password } = req.body;
        try {
            const user = await sequelize.models.User.create({
                firstName,
                lastName,
                email,
                company,
                password,
            });
            res.status(201).json({ message: "User created successfully.", user });
        } catch (error) {
            res.status(500).json({ error: "Failed to create user." });
        }
    }

    static async editUser(req, res) {
        const { id } = req.params;
        const { firstName, lastName, email, company, password } = req.body;

        try {
            const user = await sequelize.models.User.findByPk(id);
            if (!user) {
                return res.status(404).json({ error: "User not found." });
            }

            user.firstName = firstName || user.firstName;
            user.lastName = lastName || user.lastName;
            user.email = email || user.email;
            user.company = company || user.company;
            user.password = password || user.password;

            await user.save();

            res.status(200).json({ message: "User updated successfully.", user });
        } catch (error) {
            res.status(500).json({ error: "Failed to update user." });
        }
    }
}

module.exports = UserControllers
