const db = require("../models");

module.exports = function (controller) {

    controller.hears(['listuser'], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            convo.ask('Your Name?', function (response, convo) {

                db.User.findAll({
                    where: { userChannel: response.channel }
                }).then(function (userData) {
                    convo.say('Here is a list of all the BreakBot users in your channel:\n' + generateUserList(userData));
                    convo.next();
                });

            });

        });

    });

    controller.hears(['adduser'], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            let userData = {};

            convo.ask('What is the User Name? (Max 10 Charactors)', function (response, convo) {

                if (response.text.length < 11) {

                    userData.userName = response.text;
                    userData.userId = response.user;
                    userData.userChannel = response.channel;
                    db.User.create(userData).then(function (response) {
                        convo.say('User Added as ID: ' + response.dataValues.id);
                        convo.next();
                    });

                } else {

                    convo.say("Name must be below 10 characters");
                    convo.next();

                };

            });

        });

    });

    controller.hears(['deleteuser'], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            let userId;

            convo.ask('What is the ID number of the user you are trying to delete?', function (response, convo) {

                userId = parseInt(response.text);

                db.User.destroy({
                    where: { id: userId }
                }).then(function (affectedRows) {

                    if (affectedRows == 0) {
                        convo.say("There were no users with that ID");
                        convo.next();
                    } else {
                        convo.say('User Deleted!');
                        convo.next();
                    };

                });

            });

        });

    });

    function generateUserList(userData) {

        let text = '';

        for (let t = 0; t < userData.length; t++) {
            text += "<User ID: " + userData[t].id;
            text += "> <User Name: " + userData[t].userName + ">" + '\n';
        };

        return text;
    };
};
