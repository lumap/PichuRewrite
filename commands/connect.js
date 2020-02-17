module.exports = {
	name: 'connect',
  category: 'music',
  aliases: ['summon'],
	description: 'Connects to the VC',
	execute(client,message) {
		let voiceChannel = message.member.voice.channel
    if (!voiceChannel) return message.channel.Send('You\'re not connected to a voice channel!')
    voiceChannel.join()
    message.channel.send('Here we go! I\'m connected!')
	},
};