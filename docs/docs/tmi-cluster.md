# TMI Cluster

[[toc]]

## Introduction

![](../images/tmi_cluster.png)

TMI Cluster is a Laravel package that smoothly enables a highly scalable IRC client cluster for Twitch. TMI Cluster consists of multiple supervisors that can be deployed on multiple hosts. The core is inspired by Horizon, which handles the complex IRC process management.

The cluster stores its data in the database and has a Redis Command Queue to send IRC commands and receive messages.

## Installation

You may use Composer to install TMI Cluster into your Laravel project:

```bash
composer require ghostzero/tmi-cluster
```

After installing TMI Cluster, publish its assets using the `tmi-cluster:install` and `migrate` Artisan command:

```bash
php artisan tmi-cluster:install

php artisan migrate
```

### Register Frontend Routes

To make your frontend accessible under `/tmi-cluster` you have to add the following route declaration in your `web.php`:

```php
use GhostZero\TmiCluster;

TmiCluster::routes();
```

### Keeping TMI Cluster Assets Updated

In addition, when upgrading to any new TMI Cluster version, you should re-publish TMI Cluster's assets:

```bash
php artisan tmi-cluster:publish
```

To ensure TMI Cluster's assets are updated when a new version is downloaded, you may add a Composer hook inside your project's composer.json file to automatically publish TMI Cluster's latest assets:

```json
"scripts": {
    "post-update-cmd": [
        "@php artisan tmi-cluster:publish --ansi"
    ]
}
```

## Configuration

After publishing TMI Cluster's assets, its primary configuration file will be located at `config/tmi-cluster.php`. This configuration file allows you to configure your process options and each configuration option includes a description of its purpose, so be sure to thoroughly explore this file.

### Redis Connection

A Redis Cache is required for the TMI Cluster. The configuration is already pre-configured. If you have more than one TMI Cluster running on your Redis, then you should adjust the cluster prefix.

### TMI Client Configuration

::: tip
We ourselves use the TMI Cluster only with Verified Bot credentials. We do not recommend this cluster for normal accounts. We also have no experience with Known Bot accounts so far. 
::: 

### Auto Scaling

TMI Cluster comes directly with Auto-Scaling, since we initially developed this cluster for applications with over 10,000 joined channels. It will scale out by one instance if average channel usage is above 70%, and scale in by one instance if channel usage falls below 50%.

The flapping situation can be controlled by choosing an adequate margin between the scale-out and scale-in thresholds.

You can also limit the minimum and maximum processes.

```php
'auto_scale' => [
    'restore' => true,
    'processes' => [
        'min' => 2,
        'max' => 25
    ],
    'thresholds' => [
        'channels' => 50,
        'scale_in' => 50,
        'scale_out' => 70,
    ],
]
```

## Running TMI Cluster

Once you have configured your TMI Cluster in the `config/tmi-cluster.php` configuration file, you may start the cluster by using the `tmi-cluster` Artisan command. This single command will start one singe supervisor with all of your configured processes:

```bash
php artisan tmi-cluster
```

You can also run this command multiple times to spawn multiple supervisors.

You may check the current status of your TMI Cluster by using the `tmi-cluster:list` Artisan command:

```bash
php artisan tmi-cluster:list
```

### Deploying TMI Cluster

If you are deploying TMI Cluster to a live server, you should configure a process monitor to monitor the `php artisan tmi-cluster` command and restart it if it quits unexpectedly. When deploying fresh code to your server, you will need to instruct the master TMI Cluster process to terminate so it can be restarted by your process monitor and receive your code changes.

#### Installing Supervisor

Supervisor is a process monitor for the Linux operating system, and will automatically restart your `tmi-cluster` process if it fails. To install Supervisor on Ubuntu, you may use the following command:

```bash
sudo apt-get install supervisor
```

#### Supervisor Configuration

Supervisor configuration files are typically stored in the `/etc/supervisor/conf.d` directory. Within this directory, you may create any number of configuration files that instruct supervisor how your processes should be monitored. For example, let's create a `tmi-cluster.conf` file that starts and monitors a `tmi-cluster` process:

```text
[program:tmi-cluster]
process_name=%(program_name)s
command=php /home/ghostzero/tmi-app/artisan tmi-cluster
autostart=true
autorestart=true
user=ghostzero
redirect_stderr=true
stdout_logfile=/home/ghostzero/tmi-app/tmi-cluster.log
stopwaitsecs=3600
```

#### Starting Supervisor

Once the configuration file has been created, you may update the Supervisor configuration and start the processes using the following commands:

```bash
sudo supervisorctl reread

sudo supervisorctl update

sudo supervisorctl start tmi-cluster
```

For more information on Supervisor, consult the [Supervisor documentation](http://supervisord.org/index.html).

## Channel Management

The new Channel Managers available from version `^2.2` allow to automatically manage the channels within the TMI cluster. 

For compatibility reasons we have disabled this feature by default. This means that the Channel Manager is set to [Dummy](#dummy-channel-manager).

### List of Channel Managers

#### Dummy Channel Manager

This channel manager allows all joins and disables the invite screen, and the auto join & part feature. This is the default behavior of TMI-Cluster.

#### Database Channel Manager

The Database Channel Manager stores all channels and their authorizations and configurations in the database. If this channel manager is used, then all channels must give an authorization in advance. This can be done programmatically or by the invite screen.

```php
use GhostZero\TmiCluster\Contracts\ChannelManager;
use GhostZero\TmiCluster\Contracts\ChannelDistributor;

$channelManager = app(ChannelManager::class);

// allow our tmi cluster to join ghostzero's channel
$channelManager->authorize('ghostzero', [
    'reconnect' => true,
]);
```

### Invite Screen

For verified bots, Twitch expects that streamers themselves add the bot to their chat. This can be done by a `!join` command or by an invite screen (TMI-Cluster does not come with any commands out of the box). To reduce complexity, we provide an invite screen that allows the streamer to add the bot in a self-service manner.
The invite screen is accessible at `/tmi-cluster/invite`.

![](../images/invite_screen.png)

### Auto Join & Part

Normally you are responsible for your join/parts, because we want you to be in control. However, with the new channel manager, we have come up with a new concept of how we want to deal with channels in the long term. Our experience with larger installations of TMI Cluster is (with over 250,000 connected channels) that we want to part inactive channels after a short time.

```php
'channel_manager' => [
    'use' => \GhostZero\TmiCluster\Repositories\DatabaseChannelManager::class,

    'auto_cleanup' => [
        'enabled' => true,
        'interval' => 300,
        'max_delay' => 600,
    ],

    'channel' => [
        'restrict_messages' => false,
        'stale' => 168,
    ],
],
```

If this feature is enabled (by setting the `channel_manager.auto_cleanup.enabled` to `true`), the TMI-Cluster parts all channels after 168 hours (7 days), where the last join statement was received. This can be modified by setting the `channel_manager.channel.stale` value.

The part can be delayed by executing an `acknowledged` statement with the `ChannelManager`. Alternatively, you can simply call the `join` method in `ChannelDistributor`.
This shows the channel manager that there is still some interest in this channel to join it further.

In larger installations this makes sense in connection with the `stream.online` event through the [Twitch EventSub](https://dev.twitch.tv/docs/eventsub).


:::tip
Don't forget that you need an authorization from the channel in advance, if there is no authorization, or it has been revoked, then you can't join the channel.
:::

```php
use GhostZero\TmiCluster\Contracts\ChannelDistributor;
use GhostZero\TmiCluster\Contracts\ChannelManager;

// our recommended way, with joining the irc cluster (if not present)

$channelManager = app(ChannelDistributor::class);
$channelManager->join(['ghostzero']);

// alternative, without joining the irc cluster (if not present)

$channelManager = app(ChannelManager::class);
$channelManager->acknowledged(['ghostzero']);
```

### Restrict Sending Messages

TMI Cluster allows you to send IRC messages only to channels that have been pre-authorized. This feature is disabled by default and can be enabled by setting the config `channel_mananger.channel.restrict_messages` to `true`.

## Events

### Handle IRC Messages

To handle irc messages like, chat messages and commands, you need to register an event subscriber into your Laravel application. Event subscribers are classes that may subscribe to multiple events from within the class itself, allowing you to define several event handlers within a single class. The TMI Cluster emits all [TMI events](events.md).

```php
<?php

namespace App\Listeners;

use GhostZero\Tmi\Events\Twitch\CheerEvent;
use GhostZero\Tmi\Events\Twitch\MessageEvent;
use GhostZero\Tmi\Events\Twitch\SubEvent;

class TmiEventSubscriber
{
    public function handleMessageEvent(MessageEvent $event): void
    {
        // handle your message event
    }

    public function handleCheerEvent(CheerEvent $event): void
    {
        // handle your cheer event
    }

    public function handleSubEvent(SubEvent $event): void
    {
        // handle your sub event
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @return array
     */
    public function subscribe(): array
    {
        return [
            MessageEvent::class => [
                [__CLASS__, 'handleMessageEvent']
            ],
            CheerEvent::class => [
                [__CLASS__, 'handleMessageEvent']
            ],
            SubEvent::class => [
                [__CLASS__, 'handleMessageEvent']
            ],
        ];
    }
}
```

After writing the subscriber, you are ready to register it with the event dispatcher. You may register subscribers using the `$subscribe` property on the `EventServiceProvider`. For example, let's add the `TmiEventSubscriber` to the list:

```php
<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        //
    ];

    /**
     * The subscriber classes to register.
     *
     * @var array
     */
    protected $subscribe = [
        'App\Listeners\TmiEventSubscriber',
    ];
}
```

### List of all TMI Cluster

You will find all TMI Cluster Events within the `GhostZero\TmiCluster\Events` namespace:

- `ClusterClientRegistered`
- `ClusterClientTerminated`
- `IrcCommandEvent`
- `IrcMessageEvent`
- `PeriodicTimerCalled`
- `SupervisorLooped`
- `UnableToLaunchProcess`
- `WorkerProcessRestarting`

## Notifications

Notifications are planned in the next major version of the TMI Cluster. It will send messages, if for example complete instances have failed and have been cleaned up by the purge command.
