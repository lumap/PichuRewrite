const Discord = require('discord.js')

  module.exports = {
	name: 'meme',
aliases: ['memes'], 
  category: 'fun',
  usage: 'pichu meme',
	description: "Shows a meme",
	async execute (client,message) {
    message.channel.startTyping()
  
          const { KSoftClient } = require('@ksoft/api');

          const ksoft = new KSoftClient(client.ksoftsi_token);
          
          /* I use a helper asnyc function called main here.
           * This would also work using a lambda function or class method,
           * as long as it's asynchronous.
           */
          async function main() {
              const { url } = await ksoft.images.meme();
              message.channel.send(new Discord.MessageEmbed()
              .setAuthor(client.user.tag, client.user.avatarURL({format: 'png', dynamic: true, size: 2048}))
      .setColor('RANDOM')
      .setDescription(`Image not showing? Click [here](${url}) !`)
      .setImage(url)
      .setTimestamp()
        .setFooter('Made by Lumap#0149')) // discord.js
        message.channel.stopTyping()
          }
          
          main();
        
        
	}
};
