# Inspector

[[toc]]

:::warning
The package is a draft.
:::

## Introduction

With our server `irc.inspector.tmi.dev` (build on-top of `fdgt`), we provide you a UI to trigger events and inspect the raw traffic of your client.

> fdgt is designed to make the life of Twitch Developers easier. From building Twitch bots, to designing overlays, to developing extensions, we provide the tools you need to build amazing things on Twitch — without breaking the bank.

## Getting Started

To start you have to change your server address to `irc.inspector.tmi.dev`. After that you only have to join the channel `tmi_inspector`, then you get your URL through the inspector event.

```php
use GhostZero\Tmi\Client;
use GhostZero\Tmi\ClientOptions;

$client = new Client(new ClientOptions([
    'connection' => [
        'server' => 'irc.inspector.tmi.dev',
    ],
    'channels' => [
        'tmi_inspector',
        'ghostzero',
    ]
]));

$client->on('inspector', function (string $url) {
    echo "Inspector ready! Visit: {$url}\n";
});

$client->connect();
```
