# Commander

[[toc]]

:::warning
The package is a draft.
:::

## Introduction

Since the TMI Client does not provide a command handler, this function must normally be implemented by the developer. The Commander Package offers this implementation with a very simple Command & Channel Manager.

The package also comes with the following system commands:

- !help
- !join
- !part

## Installation

You can install this package with Composer as follows:

```bash
composer require ghostzero/commander
```

## Usage

After installing the package you can easily create a new TMI Client and call `Commander::register(...)`. When registering you can specify all your commands that the Commander should handle.

```php
use GhostZero\Tmi\Client;
use GhostZero\Tmi\ClientOptions;
use GhostZero\Commander\Commander;

$client = new Client(new ClientOptions([
    // configure your client here
    'channels' => ['ghostzero']
]));

Commander::register($client, [
    // register your commands here
    'ping' => PongCommandExecutor::class,
]);

$client->connect();
```

## Create Commands

Commands can be easily created by extending the class `CommandExecutor`. This provides a `handle(CommandSender $sender)` method that is called once the command is triggered. In the `CommandSender` object you can find all the information about the sender of the message.

```php
use GhostZero\Commander\CommandExecutor;
use GhostZero\Commander\CommandSender;

class PongCommandExecutor extends CommandExecutor
{
    public function handle(CommandSender $sender)
    {
        $sender->reply('Test');
    }
}
```