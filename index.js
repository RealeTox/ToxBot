const Discord = require('discord.js');
const bot = new Discord.Client();

const token = '';

const PREFIX ='!';

bot.on('ready', () => {

    console.log('This bot is online!');
})

bot.on("guildMemberAdd", (member) => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "general");
    if(!channel) return;

    channel.send(`Welcome to our Server STFU, noob ${member}!`)
});


bot.on('message', msg=>{

    if(msg.content === "who is toxbot?" ) { 
        msg.channel.send('Hi, Im ToxBot, a bot built by our powerful god JRPToxic');    
    }
    if(msg.content === "insult nick" ) { 
        msg.channel.send('#BlackMagic is a Scrub');
    }
    if(msg.content === "ToxBot doesn't Stu need to shut up?"){ 
        msg.channel.send('Stu needs to SHUT THE FUCK UP');
    }
    if(msg.content === "hail satan" ) { 
        msg.channel.send('Be Gay, Do Crime');
    }
    if(msg.content === "stoooop" && msg.member.hasPermission("ADMINISTRATOR")) {
        msg.channel.send("If you don't shut the fuck up, I will end you");
    }
    if (msg.content === "suck my ass") {
        msg.channel.send("What are you? Fucking gay?");
        msg.channel.awaitMessages(m => m.author.id == msg.author.id, {
            max: 1, time: 30000}).then(collected => {
                if (collected.first().content.toLowerCase() == 'yes') {
                    msg.channel.send("*ToxBot takes deep breath*\n... that is okay, love is love, gay or straight, or even when looking at that curvy piece of driftwood");
                    console.log('Message Recieved');
                } else
                if (collected.first().content.toLowerCase() == 'no') {
                    msg.channel.send('faggot');
                    console.log('Message Recieved');
                } 
                bot.destroy;
                console.log('client closed...');
            }).catch(() => {
                msg.reply('No answer after 30 seconds, initiate new conversation');
        });
    }
    if (msg.content === "I like cheese") {
            msg.channel.send("And wine!");
    }
    if (msg.content === "I like wine") {
        msg.channel.send("And cheese!");
    }
})

bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'Marco':
            msg.channel.send('Polo!')
            break;
        case 'insultToxBot':
            msg.channel.send('What the fuck did you just fucking say about me, you little bitch? Ill have you know I graduated top of my class in the Navy Seals, and Ive been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and Im the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. Youre fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and thats just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little clever comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldnt, you didnt, and now youre paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. Youre fucking dead, kiddo.')
            break;
        case 'info':
            if(args[1] === 'version') {
                msg.channel.send('Version: 1.0.4');
            }else{
                msg.channel.send('STFU is a discord community provided for anyone that can handle high immaturity\nIf you need anything, please @ JRPToxic')
            }
        break;
        case 'delete':
            if(!args[1]) return msg.reply ('Error: Please define the amount of message you wish to delete')
            msg.channel.bulkDelete(args[1]);
        break;
        case 'insult':
            if(msg.content.startsWith('!insult')) {
                if(msg.mentions.users.size) {
                    const tagged = msg.mentions.users.first();
                    msg.channel.send(`You think a maggot like you deserves to live? ${tagged.username}`);
                }else{
                    msg.reply('Error: Please tag a valid user.');
                }
            }
        break;
    }
})

function getRandom() {
    return Math.random() * (10 - 0) + 0;
  }

bot.on('message', msg=>{
    if(msg.content === "random" ) { 
        var x = getRandom().toFixed(0);
        msg.channel.send(x);
    }
});

bot.on('message', message => {

    if (message.content.startsWith("Hey ToxBot!")) {
  //  console.log('Magic 8 Started') 
        
        var replies = [
            'Yes',
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes definitely',
            'You may rely on it',
            'As I see it, yes',
            'Most likely',
            'Outlook good',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            'Don\'t count on it',
            'My reply is no',
            'My sources say no',
            'Outlook not so good',
            'Very doubtful',

  //      ]
  //      var repliesSarcastic = [
            'Signs point to yes. Except that you were born an idiot, you will die an idiot, and nothing will change in-between.',
            'Without a doubt. Nah, I’m just messing with you, go shoot yourself.',
            'My sources say no. They also tell me they hate you and hope you burn in hell.',
            'Yes, definitely. Unless it doesn’t happen. Listen it’s not my fault your father didn’t love you. Get off my back!',
            'Outlook not so good. Especially since you’re so goddamn ugly.',
            'All signs point to yes. But on second thought, go fuck yourself.',
            'As If', 
            'Ask Me If I Care', 
            'Dumb Question Ask Another', 
            'Forget About It', 
            'Get A Clue', 
            'In Your Dreams',  
            'Not A Chance', 
            'Obviously', 
            'Oh Please', 
            'Sure',
            'That\'s Ridiculous', 
            'Well Maybe', 
            'What Do You Think?', 
            'Yes... You Prick',
            'Who Cares?', 
            'Yeah And I\'m The Fucking Pope',
            'Yeah Right', 
            'You Wish', 
            'You\'ve Got To Be Kidding...'

        ]
        var randomReply = replies[
            Math.floor(Math.random()*replies.length)
        // var randomReply = repliesSarcastic[
        // Math.floor(Math.random()*repliesSarcastic.length)
        ];

        message.channel.send(randomReply);
        //  console.log('8 Ball Answered');
    };
});

bot.login(token);