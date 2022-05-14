# Events

Some events will only be fired if you are logged in with an OAuth Token.

[[toc]]

## Register a Event

After our v2.0 release all events will be registered with their fully qualified class name. In comparison to v1.0 and tmi.js there is a type security and you can see directly from the object which properties are given.

```php
use GhostZero\Tmi\Events\Twitch\MessageEvent;

$client->on(MessageEvent::class, function (MessageEvent $event) {
    // handle your event
});
``` 

## List of all Events

You can find all events under the namespace `GhostZero\Tmi\Events`.

### Inspector

Triggered when the inspector receives data from the server.
        
```php
use GhostZero\Tmi\Events\Inspector\InspectorEvent;

$client->on(InspectorEvent::class, function (InspectorEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **payload** | `stdClass` |    Contains the session. |
| **client** | `Client` | Client object |

> Since:

### InspectorReady

Triggers when an inspector.tmi.dev session was recognized.
        
```php
use GhostZero\Tmi\Events\Inspector\InspectorReadyEvent;

$client->on(InspectorReadyEvent::class, function (InspectorReadyEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **url** | `string` | URL of the Inspector session. |
| **client** | `Client` | Client object |

> Since:

### Join

This event is triggered when a viewer enters the chat.
        
```php
use GhostZero\Tmi\Events\Irc\JoinEvent;

$client->on(JoinEvent::class, function (JoinEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **tags** | `Tags` | Twitch Tags object |
| **message** | `string` | Message content |
| **user** | `string` | Username of the viewer |
| **client** | `Client` | Client object |

> Since:

### Kick

This event is triggered when a viewer has been kicked by the channel moderator.
        
```php
use GhostZero\Tmi\Events\Irc\KickEvent;

$client->on(KickEvent::class, function (KickEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **user** | `string` | Username of the viewer |
| **message** | `string` | Message content |
| **client** | `Client` | Client object |

> Since:

### Motd

This event is triggered when the IRC client enters a IRC server.
        
```php
use GhostZero\Tmi\Events\Irc\MotdEvent;

$client->on(MotdEvent::class, function (MotdEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **message** | `string` | Message content |
| **client** | `Client` | Client object |

> Since:

### NameReply


        
```php
use GhostZero\Tmi\Events\Irc\NameReplyEvent;

$client->on(NameReplyEvent::class, function (NameReplyEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **names** | `array` | List of usernames that are visible |
| **client** | `Client` | Client object |

> Since:

### Part

This event is triggered when a viewer leaves the chat.
        
```php
use GhostZero\Tmi\Events\Irc\PartEvent;

$client->on(PartEvent::class, function (PartEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **tags** | `Tags` | Twitch Tags object |
| **message** | `string` | Message content |
| **user** | `string` | Username of the viewer |
| **client** | `Client` | Client object |

> Since:

### Ping

About once every five minutes, the IRC server will send a ping.
To ensure that your connection to the server is not prematurely
terminated, the TMI.php client will automatically reply with
a ping. No further actions are required.
        
```php
use GhostZero\Tmi\Events\Irc\PingEvent;

$client->on(PingEvent::class, function (PingEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **client** | `Client` | Client object |

> Since:

### Privmsg

PRIVMSG is used to send private messages between users.
        
```php
use GhostZero\Tmi\Events\Irc\PrivmsgEvent;

$client->on(PrivmsgEvent::class, function (PrivmsgEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **target** | `Channel|string` | IRC Channel state object or username |
| **tags** | `Tags` | Twitch Tags object |
| **user** | `string` | Username of the viewer |
| **message** | `string` | Message content |
| **self** | `bool` | Indicates if the message is from ourselves. |
| **client** | `Client` | Client object |

> Since:

### TopicChange

This is an IRC event when the topic of the channel has changed. Not supported by Twitch.
        
```php
use GhostZero\Tmi\Events\Irc\TopicChangeEvent;

$client->on(TopicChangeEvent::class, function (TopicChangeEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **topic** | `string` | The  new topic of the channel. |
| **client** | `Client` | Client object |

> Since:

### Welcome


        
```php
use GhostZero\Tmi\Events\Irc\WelcomeEvent;

$client->on(WelcomeEvent::class, function (WelcomeEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **client** | `Client` | Client object |

> Since:

### AnonGiftPaidUpgrade


        
```php
use GhostZero\Tmi\Events\Twitch\AnonGiftPaidUpgradeEvent;

$client->on(AnonGiftPaidUpgradeEvent::class, function (AnonGiftPaidUpgradeEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **user** | `string` | Username of the viewer |
| **tags** | `Tags` | Twitch Tags object |
| **client** | `Client` | Client object |

> Since:

### AnonSubGift


        
```php
use GhostZero\Tmi\Events\Twitch\AnonSubGiftEvent;

$client->on(AnonSubGiftEvent::class, function (AnonSubGiftEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **streakMonths** | `int` | The number of consecutive months the user has subscribed. |
| **recipient** | `string` | Username of the recipient |
| **plan** | `Tags` | Subscription Plan object |
| **tags** | `Tags` | Twitch Tags object |
| **client** | `Client` | Client object |

> Since:

### AnonSubMysteryGift


        
```php
use GhostZero\Tmi\Events\Twitch\AnonSubMysteryGiftEvent;

$client->on(AnonSubMysteryGiftEvent::class, function (AnonSubMysteryGiftEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **giftSubCount** | `int` | Count of given gifts |
| **plan** | `Tags` | Subscription Plan object |
| **tags** | `Tags` | Twitch Tags object |
| **client** | `Client` | Client object |

> Since:

### Cheer


        
```php
use GhostZero\Tmi\Events\Twitch\CheerEvent;

$client->on(CheerEvent::class, function (CheerEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **tags** | `Tags` | Twitch Tags object |
| **user** | `string` | Username of the viewer |
| **message** | `string` | Message content |
| **self** | `bool` | Indicates if the message is from ourselves. |
| **client** | `Client` | Client object |

> Since:

### EmoteOnlyMode


        
```php
use GhostZero\Tmi\Events\Twitch\EmoteOnlyModeEvent;

$client->on(EmoteOnlyModeEvent::class, function (EmoteOnlyModeEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **enabled** | `bool` | Indicates whether the mode is active |
| **client** | `Client` | Client object |

> Since:

### FollowersOnlyMode


        
```php
use GhostZero\Tmi\Events\Twitch\FollowersOnlyModeEvent;

$client->on(FollowersOnlyModeEvent::class, function (FollowersOnlyModeEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **enabled** | `bool` | Indicates whether the mode is active |
| **minutes** | `int` | The number of seconds a chatter without moderator privileges must wait between sending messages |
| **client** | `Client` | Client object |

> Since:

### GiftPaidUpgrade


        
```php
use GhostZero\Tmi\Events\Twitch\GiftPaidUpgradeEvent;

$client->on(GiftPaidUpgradeEvent::class, function (GiftPaidUpgradeEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **user** | `string` | Username of the viewer |
| **sender** | `string` | Username of the gifter |
| **tags** | `Tags` | Twitch Tags object |
| **client** | `Client` | Client object |

> Since:

### Hosted


        
```php
use GhostZero\Tmi\Events\Twitch\HostedEvent;

$client->on(HostedEvent::class, function (HostedEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **user** | `string` | Username of the streamer |
| **viewers** | `int` | Number of viewers |
| **autoHost** | `bool` | Indicates whether the host is automatically |
| **client** | `Client` | Client object |

> Since:

### Hosting


        
```php
use GhostZero\Tmi\Events\Twitch\HostingEvent;

$client->on(HostingEvent::class, function (HostingEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **target** | `string` | Username of the steamer |
| **viewers** | `int` | Number of viewers |
| **client** | `Client` | Client object |

> Since:

### Message


        
```php
use GhostZero\Tmi\Events\Twitch\MessageEvent;

$client->on(MessageEvent::class, function (MessageEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **tags** | `Tags` | Twitch Tags object |
| **user** | `string` | Username of the viewer |
| **message** | `string` | Message content |
| **self** | `bool` | Indicates if the message is from ourselves. |
| **client** | `Client` | Client object |

> Since:

### Mods


        
```php
use GhostZero\Tmi\Events\Twitch\ModsEvent;

$client->on(ModsEvent::class, function (ModsEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **users** | `array` | List of usernames |
| **client** | `Client` | Client object |

> Since:

### Notice


        
```php
use GhostZero\Tmi\Events\Twitch\NoticeEvent;

$client->on(NoticeEvent::class, function (NoticeEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **messageId** | `string` | Unique message identifier |
| **client** | `Client` | Client object |

> Since:

### PrimePaidUpgrade


        
```php
use GhostZero\Tmi\Events\Twitch\PrimePaidUpgradeEvent;

$client->on(PrimePaidUpgradeEvent::class, function (PrimePaidUpgradeEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **user** | `string` | Username of the viewer |
| **plan** | `Tags` | Subscription Plan object |
| **tags** | `Tags` | Twitch Tags object |
| **client** | `Client` | Client object |

> Since:

### R9kMode


        
```php
use GhostZero\Tmi\Events\Twitch\R9kModeEvent;

$client->on(R9kModeEvent::class, function (R9kModeEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **enabled** | `bool` | Indicates whether the mode is active |
| **client** | `Client` | Client object |

> Since:

### Raid


        
```php
use GhostZero\Tmi\Events\Twitch\RaidEvent;

$client->on(RaidEvent::class, function (RaidEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **user** | `string` | Username of the streamer |
| **viewers** | `int` | Number of viewers |
| **client** | `Client` | Client object |

> Since:

### Resub


        
```php
use GhostZero\Tmi\Events\Twitch\ResubEvent;

$client->on(ResubEvent::class, function (ResubEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **user** | `string` | Username of the viewer |
| **streakMonths** | `int` | The number of consecutive months the user has subscribed. |
| **message** | `string` | Message content |
| **tags** | `Tags` | Twitch Tags object |
| **plan** | `Tags` | Subscription Plan object |
| **client** | `Client` | Client object |

> Since:

### Ritual


        
```php
use GhostZero\Tmi\Events\Twitch\RitualEvent;

$client->on(RitualEvent::class, function (RitualEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **ritual** | `string` | Name of the ritual |
| **user** | `string` | Username of the viewer |
| **tags** | `Tags` | Twitch Tags object |
| **message** | `string` | Message content |
| **client** | `Client` | Client object |

> Since:

### RoomState


        
```php
use GhostZero\Tmi\Events\Twitch\RoomStateEvent;

$client->on(RoomStateEvent::class, function (RoomStateEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **tags** | `Tags` | Twitch Tags object |
| **client** | `Client` | Client object |

> Since:

### SlowMode


        
```php
use GhostZero\Tmi\Events\Twitch\SlowModeEvent;

$client->on(SlowModeEvent::class, function (SlowModeEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **enabled** | `bool` | Indicates whether the mode is active |
| **minutes** | `int` | The number of seconds a chatter without moderator privileges must wait between sending messages |
| **client** | `Client` | Client object |

> Since:

### Sub


        
```php
use GhostZero\Tmi\Events\Twitch\SubEvent;

$client->on(SubEvent::class, function (SubEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **user** | `string` | Username of the viewer |
| **plan** | `Tags` | Subscription Plan object |
| **message** | `string` | Message content |
| **tags** | `Tags` | Twitch Tags object |
| **client** | `Client` | Client object |

> Since:

### SubGift


        
```php
use GhostZero\Tmi\Events\Twitch\SubGiftEvent;

$client->on(SubGiftEvent::class, function (SubGiftEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **user** | `string` | Username of the viewer |
| **streakMonths** | `int` | The number of consecutive months the user has subscribed. |
| **recipient** | `string` | Username of the recipient |
| **plan** | `Tags` | Subscription Plan object |
| **tags** | `Tags` | Twitch Tags object |
| **client** | `Client` | Client object |

> Since:

### SubMysteryGift


        
```php
use GhostZero\Tmi\Events\Twitch\SubMysteryGiftEvent;

$client->on(SubMysteryGiftEvent::class, function (SubMysteryGiftEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **user** | `string` | Username of the viewer |
| **giftSubCount** | `int` | Count of given gifts |
| **plan** | `Tags` | Subscription Plan object |
| **tags** | `Tags` | Twitch Tags object |
| **client** | `Client` | Client object |

> Since:

### SubsOnlyMode


        
```php
use GhostZero\Tmi\Events\Twitch\SubsOnlyModeEvent;

$client->on(SubsOnlyModeEvent::class, function (SubsOnlyModeEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **enabled** | `bool` | Indicates whether the mode is active |
| **client** | `Client` | Client object |

> Since:

### Unhost


        
```php
use GhostZero\Tmi\Events\Twitch\UnhostEvent;

$client->on(UnhostEvent::class, function (UnhostEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **viewers** | `int` | Number of viewers |
| **client** | `Client` | Client object |

> Since:

### UserNotice


        
```php
use GhostZero\Tmi\Events\Twitch\UserNoticeEvent;

$client->on(UserNoticeEvent::class, function (UserNoticeEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **messageId** | `string` | Unique message identifier |
| **client** | `Client` | Client object |

> Since:

### Vips


        
```php
use GhostZero\Tmi\Events\Twitch\VipsEvent;

$client->on(VipsEvent::class, function (VipsEvent $event) {
    // handle your event
});
```

| Property | Type(s) | Description |
|----------|---------|-------------|
| **channel** | `Channel` | IRC Channel state object |
| **users** | `array` | List of usernames |
| **client** | `Client` | Client object |

> Since: