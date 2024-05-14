
const Role = require('./Role');
const Member = require('./Member');
const Contact = require('./Contact');

module.exports = { Role, Member, Contact };

//add foreign key associations
// Path: models/Role.js


Role.associate = function(models) {
    Role.hasMany(models.Member, {
        foreignKey: 'roleId'
    });
}




// Path: models/Member.js




Member.associate = function(models) {
    Member.belongsTo(models.Role, {
        foreignKey: 'roleId'
    });
}



// Path: models/Contact.js




Contact.associate = function(models) {
    Contact.belongsTo(models.Member, {
        foreignKey: 'memberId'
    });
}




// Create a new instance of a Role
// Path: controllers/role.js




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



// Create a new instance of a Contact
// Path: controllers/contact.js




exports.create = (req, res) => {
        
            const contact = {
                phone: req.body.propertyName // Replace 'propertyName' with the actual property name from the request body
            };

            Contact.create(contact)

            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Contact."
                });
            });
        
        };


// Create a new instance of a Role
// Path: routes/role.js
