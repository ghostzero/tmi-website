# Events

Some events will only be fired if you are logged in with an OAuth Token.

[[toc]]

## Anon Gift Paid Upgrade

```php
$client->on('anongiftpaidupgrade', function (string $channel, string $user, Tags $tags) {
    //
});
```

## Anon Sub Gift

```php
$client->on('anonsubgift', function (string $channel, int $streakMonths, string $recipient, string $methods, Tags $tags) {
    //
});
```

## Anon Sub Mystery Gift

```php
$client->on('anonsubmysterygift', function (string $channel, int $giftSubCount, string $methods, Tags $tags) {
    //
});
```

## Cheer

```php
$client->on('cheer', function (string $channel, Tags $tags, string $user, string $message, bool $self) {
    //
});
```

## Followers Only Mode

```php
$client->on('followers-only', function (string $channel, bool $enabled, int $minutes) {
    //
});
```

## Gift Paid Upgrade

```php
$client->on('giftpaidupgrade', function (string $channel, string $user, $sender, Tags $tags) {
    //
});
```

## Hosted

```php
$client->on('hosted', function (string $channel, string $user, int $viewers, bool $autohost) {
    //
});
```

## Hosting

```php
$client->on('hosting', function (string $channel, string $target, int $viewers) {
    //
});
```

## Kick

```php
$client->on('kick', function (string $channel, string $user, string $message) {
    //
});
```

## MOTD

```php
$client->on('motd', function (string $message) {
    //
});
```

## Message

```php
$client->on('message', function (Channel $channel, Tags $tags, string $user, string $message, bool $self) {
    //
});
```

## Names

```php
$client->on('names', function (string $channel, string $names) {
    //
});
```

## Ping

```php
$client->on('ping', function (string $channel) {
    //
});
```

## Prime Paid Upgrade

```php
$client->on('primepaidupgrade', function (string $channel, string $user, string $methods, Tags $tags) {
    //
});
```

## Privmsg

```php
$client->on('message', function (string $user, Tags $tags, string $target, string $message, bool $self) {
    //
});
```

## Raid

```php
$client->on('raid', function (string $channel, string $raidedChannel, int $viewers) {
    //
});
```

## Registered

```php
$client->on('registered', function () {
    //
});
```

## Resub

```php
$client->on('resub', function (string $channel, string $user, int $streakMonths, string $message, Tags $tags, string $methods) {
    //
});
```

## Ritual

```php
$client->on('ritual', function (string $channel, $ritual, string $user) {
    //
});
```

## Roomstate

```php
$client->on('roomstate', function (string $channel, Tags $tags) {
    //
});
```

## Slow Mode

```php
$client->on('slow', function (string $channel, bool $enabled, int $minutes) {
    //
});
```

## Sub

```php
$client->on('sub', function (string $channel, string $user, string $methods, string $message, Tags $tags) {
    //
});
```

## Sub Gift

```php
$client->on('subgift', function (string $channel, string $user, int $streakMonths, string $recipient, string $methods, Tags $tags) {
    //
});
```

## Sub Mystery Gift

```php
$client->on('submysterygift', function (string $channel, string $user, int $giftSubCount, string $methods, Tags $tags) {
    //
});
```

## Topic Changed

```php
$client->on('topic', function (string $channel, string $topic) {
    //
});
```

## Unhost

```php
$client->on('unhost', function (string $channel, int $viewers) {
    //
});
```

## Usernotice

```php
$client->on('usernotice', function (string $channel, string $messageId) {
    //
});
```
