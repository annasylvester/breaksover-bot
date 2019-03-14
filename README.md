# Break's Over Bot

## 


Break's Over Bot is a Slack Bot made alert students when break time is over.  Students often don't know when the break time was started.  While devouring lunch, time might slip on by...  Break's Over Bot will alert the student so they will never be late again.

### What's Used
* [Botkit core](https://botkit.ai/docs/core.html) - a complete programming system for building conversational software
* [Pre-configured Express.js webserver](https://expressjs.com/) including:
   * A customizable "Install my Bot" homepage
   * Login and oauth endpoints that allow teams to install your bot
   * Webhook endpoints for communicating with platforms
* Sample skill modules that demonstrate various features of Botkit

### Getting Started

Break's Over is Open Source so if you ever want to 

#### Install Botkit

[Remix this project on Glitch](https://glitch.com/~botkit-slack)

[Deploy to Heroku](https://heroku.com/deploy?template=https://github.com/howdyai/botkit-starter-slack/master)

Clone this repository using Git:

`git clone https://github.com/howdyai/botkit-starter-slack.git`

Install dependencies, including [Botkit](https://github.com/howdyai/botkit):

```
cd botkit-starter-slack
npm install
```

#### Set up your Slack Application 
Once you have setup your Botkit development enviroment, the next thing you will want to do is set up a new Slack application via the [Slack developer portal](https://api.slack.com/). This is a multi-step process, but only takes a few minutes. 

* [Read this step-by-step guide](https://botkit.ai/docs/provisioning/slack-events-api.html) to make sure everything is set up. 

* We also have this [handy video walkthrough](https://youtu.be/us2zdf0vRz0) for setting up this project with Glitch.

Update the `.env` file with your newly acquired tokens.

Launch your bot application by typing:

`node .`

Now, visit your new bot's login page: http://localhost:3000/login

Now comes the fun part of [making your bot!](https://botkit.ai/docs/#build-your-bot)


### Extend This Starter kit

This starter kit is designed to provide developers a robust starting point for building a custom bot. Included in the code are a set of sample bot "skills" that illustrate various aspects of the Botkit SDK features.  Once you are familiar with how Botkit works, you may safely delete all of the files in the `skills/` subfolder.

Developers will build custom features as modules that live in the `skills/` folder. The main bot application will automatically include any files placed there.

A skill module should be in the format:

```
module.exports = function(controller) {

    // add event handlers to controller
    // such as hears handlers that match triggers defined in code
    // or controller.studio.before, validate, and after which tie into triggers
    // defined in the Botkit CMS UI.

}
```

### Customize Storage

By default, the starter kit uses a simple file-system based storage mechanism to record information about the teams and users that interact with the bot. While this is fine for development, or use by a single team, most developers will want to customize the code to use a real database system.

There are [Botkit plugins for all the major database systems](https://botkit.ai/readme-middlewares.html#storage-modules) which can be enabled with just a few lines of code.

We have enabled our [Mongo middleware]() for starters in this project. To use your own Mongo database, just fill out `MONGO_URI` in your `.env` file with the appropriate information. For tips on reading and writing to storage, [check out these medium posts](https://botkit.groovehq.com/knowledge_base/categories/build-a-bot)

# Developer & Support Community

You can find full documentation for Botkit on [our website](https://botkit.ai/docs).

###  Need more help?
* Glitch allows users to ask the community for help directly from the editor! For more information on raising your hand, [read this blog post.](https://medium.com/glitch/just-raise-your-hand-how-glitch-helps-aa6564cb1685)

* Join our thriving community of Botkit developers and bot enthusiasts at large. Over 4500 members strong, [our open Slack group](http://community.botkit.ai) is _the place_ for people interested in the art and science of making bots. 

 Come to ask questions, share your progress, and commune with your peers!

* We also host a [regular meetup and annual conference called TALKABOT.](http://talkabot.ai) Come meet and learn from other bot developers! 
 
 [Full video of our 2016 event is available on Youtube.](https://www.youtube.com/playlist?list=PLD3JNfKLDs7WsEHSal2cfwG0Fex7A6aok)



# About Botkit

Botkit is a product of [Howdy](https://howdy.ai) and made in Austin, TX with the help of a worldwide community of botheads.
