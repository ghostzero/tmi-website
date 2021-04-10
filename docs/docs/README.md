# Getting Started

## Installation

To install TMI, you need to be using Composer in your project. For more details about Composer, see the [Composer documentation](https://getcomposer.org/doc/).

```bash
composer require ghostzero/tmi
```

## Usage

After installation you are ready to start using the TMI Client in your PHP application. You can use TMI without or with an OAuth Token. Just follow the examples below:

### Without OAuth Token

:::tip
Please note that you cannot send any messages without OAuth Token. You can get an OAuth Token with the [Twitch Chat OAuth Password Generator](https://twitchapps.com/tmi/) (which is one of the best known generators to generate a Twitch OAuth Token).
:::

```php
use GhostZero\Tmi\Client;
use GhostZero\Tmi\ClientOptions;
use GhostZero\Tmi\Events\Twitch\MessageEvent;

$client = new Client(new ClientOptions([
    'connection' => [
        'secure' => true,
        'reconnect' => true,
        'rejoin' => true,
    ],
    'channels' => ['ghostzero']
]));

$client->on(MessageEvent::class, function (MessageEvent $e) {
    print "{$e->tags['display-name']}: {$e->message}";
});

$client->connect();
```

### With OAuth Token

```php
use GhostZero\Tmi\Client;
use GhostZero\Tmi\ClientOptions;
use GhostZero\Tmi\Events\Twitch\MessageEvent;

$client = new Client(new ClientOptions([
    'options' => ['debug' => true],
    'connection' => [
        'secure' => true,
        'reconnect' => true,
        'rejoin' => true,
    ],
    'identity' => [
        'username' => 'ghostzero',
        'password' => 'oauth:...',
    ],
    'channels' => ['ghostzero']
]));

$client->on(MessageEvent::class, function (MessageEvent $e) use ($client) {
    if ($e->self) return;

    if (strtolower($e->message) === '!hello') {
        $client->say($e->channel->getName(), "@{$e->user}, heya!");
    }
});

$client->connect();
```
