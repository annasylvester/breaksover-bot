module.exports = function(controller) {

    //command to bring up command options for the bot
    controller.hears(['help'], 'direct_message,direct_mention', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
            
            convo.say('Hey do you need help??\nThe list of commands you can use are:\nadduser, listuser, deleteuser, timerstart, timerstop');
            convo.next();
            
        });

    });

};
