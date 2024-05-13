
const Role = require('./Role');
const Member = require('./Member');
const Contact = require('./Contact');

module.exports = { Role, Member, Contact };

//add foreign key associations
// Path: models/Role.js

const { Role } = require('./Role'); // Import 'Role' from the correct file

Role.associate = function(models) {
    Role.hasMany(models.Member, {
        foreignKey: 'roleId'
    });
}

module.exports = Role;



