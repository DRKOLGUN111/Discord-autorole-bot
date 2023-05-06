const { MessageButton, MessageActionRow, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({
  intents: [ 
    Discord.Intents.FLAGS.GUILDS, 
    Discord.Intents.FLAGS.GUILD_MESSAGES 
  ] 
});

//Bot active message
client.on('ready', () => {
  console.log('Nnairobi Kölesi Aktif!');
});

// Bot prefix
const prefix = '!';

// Commands
 
client.on('message', message => {
  if (!message.guild || message.author.bot) return;
  if (!message.member.permissions.has('MANAGE_ROLES')) return;

  if (message.content.startsWith('COMMAND')) {
    const targetUser = message.mentions.members.first();
    if (!targetUser) return message.reply('Please tag a user.');

    const removedRole = 'ROLE_İD'; // ID of the role to be deleted
    const addedRole = 'ROLE_İD'; // ID of the role to be added

    targetUser.roles.remove(removedRole)
      .then(() => {
        targetUser.roles.add(addedRole)
          .then(() => {
            message.author.send(`${targetUser.user.tag} The user's role has been successfully updated.`);
          })
          .catch(error => {
            console.error(error);
            message.author.send(`An error occurred while adding the role: ${error.message}`);
          });
      })
      .catch(error => {
        console.error(error);
        message.author.send(`An error occurred while deleting the role: ${error.message}`);
      });
  }
});

client.on('message', message => {
  if (!message.guild || message.author.bot) return;
  if (!message.member.permissions.has('MANAGE_ROLES')) return;

  if (message.content.startsWith('COMMAND')) {
    const targetUser = message.mentions.members.first();
    if (!targetUser) return message.reply('Please tag a user.');

    const addedRole = 'ROLE_İD'; // ID of the role to be added

    targetUser.roles.add(addedRole)
      .then(() => {
        message.author.send(`${targetUser.user.tag} The user's role has been successfully updated.`);
      })
      .catch(error => {
        console.error(error);
        message.author.send(`An error occurred while adding the role: ${error.message}`);
      });
  }
});

client.on('message', message => {
  if (!message.guild || message.author.bot) return;
  if (!message.member.permissions.has('MANAGE_ROLES')) return;

  if (message.content.startsWith('COMMAND')) {
    const targetUser = message.mentions.members.first();
    if (!targetUser) return message.reply('Please tag a user.');

    const removedRole = 'ROLE_İD';
    const addedRole = 'ROLE_İD';
    
    targetUser.roles.remove(removedRole)
      .then(() => {
        targetUser.roles.add(addedRole)
          .then(() => {
            message.author.send(`${targetUser.user.tag} The user role named has been successfully updated.`);
          })
          .catch(error => {
            console.error(error);
            message.author.send(`An error occurred while adding the role: ${error.message}`);
          });
      })
      .catch(error => {
        console.error(error);
        message.author.send(`An error occurred while deleting the role: ${error.message}`);
      });
  }
});

client.login("BOT_TOKEN");