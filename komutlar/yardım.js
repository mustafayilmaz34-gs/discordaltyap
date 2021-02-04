const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const NARCOSEMBED = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » Mustafa Beta  **")
.setThumbnail("")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/G78Tj4Ex9C)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=806506910022369280&scope=bot&permissions=8)** **•** **[]()**
Bir komut hakkında detaylı __yardım için__: **!yardım**`)

.addField('**• Komutlar**')
.addField('> !kullanıcı ',' Kullanıcı komutları(YAKINDA)')
.addField('> !moderasyon ',' → Moderasyon komutları(YAKINDA)')
.addField('> !aboneyardım ',' → Ayarlamalı Abone Rol Sistemi(YAKINDA)')
.addField('> !eğlence','  → Eğlence Komutları(YAKINDA)')
.addField('> !logo ',' → Logo Komutları(YAKINDA)')
return message.channel.send(NARCOSEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-eğlence'
};