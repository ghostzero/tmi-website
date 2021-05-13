# Commander

[[toc]]

:::warning
The public release candidate is now available. 
:::

## Introduction

Since the TMI Client does not provide a command handler, this function must normally be implemented by the developer. The Commander Package offers this implementation with a very simple Command Manager.

## Installation

You can install this package with Composer as follows:

```bash
composer require ghostzero/tmi-commander
```

## Usage

After installing the package you can easily create a new TMI Client and call `Commander::register(...)`. When registering you can specify all your commands that the Commander should handle.

```php
use GhostZero\Tmi\Client;
use GhostZero\Tmi\ClientOptions;
use GhostZero\Tmi\Commander\Commander;

$client = new Client(new ClientOptions([
    // configure your client here
    'channels' => ['ghostzero']
]));

$commander = Commander::register($client->getEventHandler(), [
    'bits' => new HelloWorldCommand()
]);

$client->connect();
```

## Create Commands

Commands can be easily created by extending the class `CommandExecutor`. This provides a `handle(CommandOrigins $origins)` method that is called once the command is triggered. In the `CommandOrigins` object you can find all the information about the sender of the message.

```php
use GhostZero\Tmi\Commander\CommandExecutor;
use GhostZero\Tmi\Commander\CommandOrigins;
use GhostZero\Tmi\Commander\Option;

class HelloWorldCommand extends CommandExecutor
{
    public function getOptions(): array
    {
        return [
            Option::create('a', null, Option::OPTIONAL_ARGUMENT),
            Option::create('b', 'beta', Option::REQUIRED_ARGUMENT),
            Option::create('v', 'verbose'),
        ];
    }

    public function handle(CommandOrigins $origins): bool
    {
        $origins->event->client->say('ghostzero', 'Hello World!');

        return true;
    }
}
```