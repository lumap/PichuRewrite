 
const Discord = require('discord.js')

module.exports = {
  name: 'eval',
  usage: 'pichu eval <js code>',
  description: 'Eval something',
  category: 'owner',
  async execute(client,message,args,dbl,queue) {
   try {
      const code = args.join(" ");
      let evaled = await eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      const successembed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription('Pichu eval command results :')
      .addFields(
        {name: 'Input :', value: `\`\`\`js\n${args.join(' ')}\`\`\``},
        {name: 'Output', value: `\`\`\`js\n${evaled}\`\`\``}
      )
      .setFooter('Made by Lumap#0149')
      message.react('✅').then(message.channel.send(successembed));
    } catch (err) {
      const failureembed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription('Pichu eval command results :')
      .addFields(
        {name: 'Input :', value: `\`\`\`js\n${args.join(' ')}\`\`\``},
        {name: 'Error :', value: `\`\`\`js\n${err}\`\`\``}
        )
        .setFooter('Made by Lumap#0149')
      message.react('✖️').then(message.channel.send(failureembed));
    }
  },
};
