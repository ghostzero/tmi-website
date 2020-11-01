# Inspector

[[toc]]

:::warning
This feature is available in v2-develop, but the inspector is not public, however.
:::

## Introduction

With our `irc.tmi.dev` servers (build on-top of `fdgt`), we provide you a UI to trigger events and inspect the raw traffic of your client.

> fdgt is designed to make the life of Twitch Developers easier. From building Twitch bots, to designing overlays, to developing extensions, we provide the tools you need to build amazing things on Twitch — without breaking the bank.

## Getting Started

```php
use GhostZero\Tmi\Client;
use GhostZero\Tmi\ClientOptions;

$client = new Client(new ClientOptions([
    'connection' => [
        'secure' => true,
        'server' => 'irc.tmi.dev',
    ],
    'channels' => ['ghostzero']
]));

// :tmi_dev!tmi_dev@tmi_dev.tmi.twitch.tv PRIVMSG #tmi_dev :https://inspector.tmi.dev/524153cf-717f-4616-b1b7-8640ac144163

$client->on('inspector', function (string $url) {
    echo "Inspector ready! Visit {$url} for more details!";
});

$client->connect();
```