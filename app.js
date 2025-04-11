const express = require("express")

const userRoutes = require("./routes/UserRoutes.js")
const itemRoutes = require("./routes/ItemRoutes.js")
const workspaceRoutes = require("./routes/WorkspaceRoutes.js")

const sequelize = require('./config/database.js');
const setupAssociations = require('./model/index.js')
setupAssociations()

const app = express()
app.use(express.json())

app.use("/user", userRoutes)
app.use("/item", itemRoutes)
app.use("/workspace", workspaceRoutes)

sequelize.sync({ force: false }) // force: true recria as tabelas
  .then(() => {
    app.listen(5000, () => {
        console.log("API Rodando na porta 5000!")
    })
    console.log('Banco sincronizado!');
  })
  .catch(err => console.error(err));
