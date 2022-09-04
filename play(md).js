const { y2mate, bot, yts } = require('../lib/')

bot(
	{
		pattern: 'play ?(.*)',
		fromMe: true,
		desc: 'Download youtube audio',
		type: 'download',
	},
	async (message, match) => {
		match = match || message.reply_message.text
		if (!match) return await message.send('_Example : play ghost_')
		const result = await yts(match)
		const { title } = await y2mate.get(result[0].id)
		await message.send(`_Downloading ${title}_`)
		await message.sendFromUrl(await y2mate.dl(result[0].id, 'audio'))
	}
)