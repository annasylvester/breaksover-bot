const db = require("../models");

module.exports = function (controller) {

    let timerId;

    controller.hears(['timerstart'], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            convo.ask('How many minutes for the timer? I will send message 10 minutes before time is up.', function (response, convo) {

                if (parseInt(response.text) > 10) {

                    let timerTime = (parseInt(response.text) - 10) * 60 * 1000;
                    let members = [];

                    db.User.findAll({
                        where: { userChannel: response.channel }
                    }).then(function (userData) {
                        
                        for (let i = 0; i < userData.length; i++) {
                            members.push(userData[i].userId);
                        };

                    });

                    timerId = setTimeout(function () {

                        for (var index = 0; index < members.length; index++) {

                            let member = members[index];

                            bot.startPrivateConversation({
                                user: member
                            }, function (err, convo) {
                                if (!err && convo) {

                                    convo.say('Only 10 minutes left! Quit monkeying around and get back to class!');

                                };

                            });

                        };

                    }, timerTime);

                    convo.say("Timer Started");
                    convo.next();

                } else {

                    convo.say("Must enter integer greater then 10");
                    convo.next();

                };

            });

        });

    });

    controller.hears(['timerstop'], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            clearTimeout(timerId);
            convo.say("Timer has been cancelled")
            convo.next();

        });

    });

};