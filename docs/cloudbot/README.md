# Getting Started

## FAQ

### When does the bot enter my chat?

Currently only when you are online. Once you are offline, the bot will leave your chat after about 5 minutes.

In the future, we want to be permanently in your chat present, so that your viewers can also execute commands when you are offline. But before that we have to do some more testing.

### Does the chatbot have an API?

Yes, but it is currently not documented and is not officially supported. But in theory you as a developer can manage the chatbot via REST API.

## Why our Chatbot need's a Moderator Role

Our chatbot offers you features such as removing messages. For example, after executing a command or removing spam. The moderator role allows our bot to remove these messages and keep your chat clean.

## Giving our Chatbot a Moderator Role

To give our bot rights, just go to your Twitch Dashboard under [Settings > Roles](https://www.twitch.tv/dashboard/roles). There you will find the role management of your channel. In this area you can give our bot "StreamKit" the role "Moderator". This gives the bot all necessary rights.

## How We Are Trying to Reduce Chat Traffic

We only send messages when they have to. Additional messages such as user-defined scheduled messages should of course be kept as low as possible. We recommend setting the intervals higher for less active chats so that fewer messages are sent. If someone disregards this feature, we will adjust the intervals for this channel or exclude them from this feature if necessary.

We also try to display a lot of information in the extension itself. So that much information can be covered by it.
