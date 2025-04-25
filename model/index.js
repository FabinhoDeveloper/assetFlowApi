const Item = require('./Item.js')
const User = require('./User.js')
const Workspace = require('./Workspace.js')

function setupAssociations() {
    User.hasMany(Workspace, {
        foreignKey: 'userId',
        as: 'workspaces'
    })

    Workspace.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user',
      });
    
      Workspace.hasMany(Item, {
        foreignKey: 'workspaceId',
        as: 'items',
        onDelete: 'CASCADE'
      });
    
      Item.belongsTo(Workspace, {
        foreignKey: 'workspaceId',
        as: 'workspace',
      });
}

module.exports = setupAssociations
