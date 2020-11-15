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

:::tip
This part is not yet completely documented, because some of the events are not yet final.
:::

### Anon Gift Paid Upgrade

### Anon Sub Gift

### Anon Sub Mystery Gift

### Cheer

### Followers Only Mode

### Gift Paid Upgrade

### Hosted

### Hosting

### Kick

### MOTD

### Message

### Names

### Ping

### Prime Paid Upgrade

### Privmsg

### Raid

### Registered

### Resub

### Ritual

### Roomstate

### Slow Mode

### Sub

### Sub Gift

### Sub Mystery Gift

### Topic Changed

### Unhost

### Usernotice
