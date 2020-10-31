# Getting Started

## Without OAuth Token

```php
use GhostZero\Tmi\Channel;
use GhostZero\Tmi\Client;
use GhostZero\Tmi\ClientOptions;
use GhostZero\Tmi\Tags;

$client = new Client(new ClientOptions([
    'connection' => [
        'secure' => true,
        'reconnect' => true,
        'rejoin' => true,
    ],
    'channels' => ['ghostzero']
]));

$client->on('message', function (Channel $channel, Tags $tags, string $user, string $message, bool $self) use ($client) {
    print "{$tags['display-name']}: {$message}";
});

$client->connect();
```

## With OAuth Token

```php
use GhostZero\Tmi\Channel;
use GhostZero\Tmi\Client;
use GhostZero\Tmi\ClientOptions;
use GhostZero\Tmi\Tags;

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

$client->on('message', function (Channel $channel, Tags $tags, string $user, string $message, bool $self) use ($client) {
    if ($self) return;

    if (strtolower($message) === '!hello') {
        $client->say($channel->getName(), "@{$user}, heya!");
    }
});

$client->connect();
```
