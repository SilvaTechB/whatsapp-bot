const { bot } = require('../lib')
bot(
	{
		pattern: 'caption ?(.*)',
		fromMe: true,
		desc: 'copy or add caption to video or image',
		type: 'whatsapp',
	},
	async (message, match) => {
		if ((message.reply_message.image || message.reply_message.video) && match)
			return await message.send(
				await message.reply_message.downloadMediaMessage(),
				{ quoted: message.quoted, caption: match },
				message.reply_message.image ? 'image' : 'video'
			)
		if (message.reply_message.text)
			await message.send(message.reply_message.text, {
				quoted: message.quoted,
			})
	}
)
