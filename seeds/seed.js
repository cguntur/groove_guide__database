const sequelize = require('../config/connection');
const { Role, Member, Contact } = require('../models');

const memberData = require('./memberData.json');
const roleData = require('./roleData.json');
const contactData = require('./contactData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const roles = await Role.bulkCreate(roleData, {
      individualHooks: true,
      returning: true,
    });
  
    for (const member of memberData) {
      await Member.create({
        ...member,
        role_id: roles[Math.floor(Math.random() * roles.length)].id,
      });
    }

    const members = await Member.findAll({
    });
  
    for (const contact of contactData) {
      await Contact.create({
       ...contact,
        member_id: members[Math.floor(Math.random() * members.length)].id,
      });
    }
  
    process.exit(0);
  };

  seedDatabase();
  