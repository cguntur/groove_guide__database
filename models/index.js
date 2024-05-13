
const Role = require('./Role');
const Member = require('./Member');
const Contact = require('./Contact');

module.exports = { Role, Member, Contact };

//add foreign key associations
// Path: models/Role.js

const { Role } = require('./Role');

Role.associate = function(models) {
    Role.hasMany(models.Member, {
        foreignKey: 'roleId'
    });
}

module.exports = Role;


// Path: models/Member.js


const Member = require('./Member');

Member.associate = function(models) {
    Member.belongsTo(models.Role, {
        foreignKey: 'roleId'
    });
}

module.exports = Member;


