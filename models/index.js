
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

// Path: models/Contact.js


const { Contact } = require('./Contact'); // Import 'Contact' from the correct file

Contact.associate = function(models) {
    Contact.belongsTo(models.Member, {
        foreignKey: 'memberId'
    });
}

module.exports = Contact;


// Create a new instance of a Role
// Path: controllers/role.js

const db = require('../models');
const Role = db.Role;

exports.create = (req, res) => {

    const role = {
        title: req.body.title // Replace 'req.body.' with the actual property name from the request body
    };

    Role.create(role)

    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Role."
        });
    });

};

// Create a new instance of a Member
// Path: controllers/member.js

const db = require('../models');
const Member = db.Member;

exports.create = (req, res) => {
    
        const member = {
            name: req.body.propertyName // Replace 'propertyName' with the actual property name from the request body
        };
    
        Member.create(member)
    
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Member."
            });
        });
    
    };


