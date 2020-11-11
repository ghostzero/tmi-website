# Template Reference

## Command

| Field                   | Type   | Description                                                               |
|-------------------------|--------|---------------------------------------------------------------------------|
| command.command         | string | The command.                                                              |
| command.commands        | array  | List of all aliases including base command.                               |
| command.command_aliases | array  | List of all aliases without base command.                                 |
| command.response        | mixed  | User defined response or template script.                                 |
| command.command_regex   | string | Not used. Regex that will be evaluated when a user enters a command.      |
| command.permissions     | int    | Limit who can execute the command.                                        |
| command.price           | int    | Price paid for each call.                                                 |
| command.send_as         | string | The way the response is sent.                                             |
| command.enable_when     | string | Commands can only be triggered offline/online/both.                       |
| command.user_cooldown   | int    | User Cooldown in seconds during which the command may not be executed.    |
| command.global_cooldown | int    | Channel Cooldown in seconds during which the command may not be executed. |
| command.is_visible      | bool   | Indicating whether the command is displayed in the command overview.      |

## IRC

| Field       | Type   | Description                                                                                                                                                                    |
|-------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| irc.tags    | mixed  | Twitch IRC user state object. Please checkout [`USERSTATE` (Twitch Tags)](https://dev.twitch.tv/docs/irc/tags#userstate-twitch-tags) for more information about existing tags. |
| irc.channel | string | Raw channel username.                                                                                                                                                          |
| irc.message | string | Raw message.                                                                                                                                                                   |

## Functions <Badge text="beta" type="warning"/>

### Database

You have access to a basic set of Database functions, this is almost a key value store ordered by the key and value combined.

We lazy-load the data from the database. This means that if you use `set` and then make a `db`, you may still have cached data.

| Function                           | Description                                           |
|------------------------------------|-------------------------------------------------------|
| `db('channel').name`               | Fetch the `name` from the `channel` table.            |
| `inc('membership', 'currency', 1)` | Increment the `currency` from the `membership` table. |
| `dec('membership', 'currency', 1)` | Decrement the `currency` from the `membership` table. |
| `set('membership', 'currency', 1)` | Set the `currency` from the `membership` table.       |

### Cache

You also have access to a basic set of Cache functions, this is almost a key value store ordered by the key and value combined.

Data is stored in the cache for a maximum of one day. Always assume that data could not exist in a cache.

| Function                  | Description                                                                                          |
|---------------------------|------------------------------------------------------------------------------------------------------|
| `cache('timely')`         | Fetch the value for the specified `key`.                                                             |
| `cache('timely', 1, 300)` | Sets the value for the specified `key` to the specified value. With Expiration in seconds.           |
| `cache('timely', 1)`      | Sets the value for the specified `key` to the specified value. With a default expiration of one day. |

### HTTP JSON Requests

With the `json` function you can download data from a JSON API. The response can be an `array`, or `null` if the api returns an error.

```twig
Random Quote: {{ json('GET', 'https://api.quotable.io/random').content }}
```

:::tip
Cache your json responses. Requests that take longer than 5 seconds are automatically aborted. Furthermore this method has a rate limit of 15 requests per minute.
::: 
