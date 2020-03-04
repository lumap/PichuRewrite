const Discord = require('discord.js')
module.exports = {
    name: 'volume',
    category: 'music',
      description: 'Changes the volume',
      async execute(client,message,args,dbl,queue) {

        if (!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('You are not in a voice channel!')
        .setFooter('Made by Lumap#0149'))

  const serverQueue = queue.get(message.guild.id)
  if (!serverQueue) return message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('Nothing is playing right now :(')
  .setFooter('Made by Lumap#0149'))

  if (!args[0]) return message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`The current volume is **${serverQueue.volume}**`)
  .setFooter('Made by Lumap#0149'));

  const volume = parseInt(args[0])
  if (!volume || volume > 100) return message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('Invalid volume! Please provide a number between 1 and 100')
  .setFooter('Made by Lumap#0149'))

  serverQueue.volume = volume;
  serverQueue.connection.dispatcher.setVolumeLogarithmic(volume / 250);
  return message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`The volume is now **${volume}**!`)
  .setFooter('Made by Lumap#0149'))
          
  
      },
  };
