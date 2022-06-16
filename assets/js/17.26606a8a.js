(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{378:function(t,e,a){"use strict";a.r(e);var s=a(46),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"template-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template-reference"}},[t._v("#")]),t._v(" Template Reference")]),t._v(" "),a("p",[t._v("Each command has a context, which describes where the command was called and which command it is.")]),t._v(" "),a("h2",{attrs:{id:"command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[t._v("#")]),t._v(" Command")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("command.command")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("The command.")])]),t._v(" "),a("tr",[a("td",[t._v("command.commands")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("List of all aliases including base command.")])]),t._v(" "),a("tr",[a("td",[t._v("command.command_aliases")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("List of all aliases without base command.")])]),t._v(" "),a("tr",[a("td",[t._v("command.response")]),t._v(" "),a("td",[t._v("mixed")]),t._v(" "),a("td",[t._v("User defined response or template script.")])]),t._v(" "),a("tr",[a("td",[t._v("command.command_regex")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Not used. Regex that will be evaluated when a user enters a command.")])]),t._v(" "),a("tr",[a("td",[t._v("command.permissions")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("Limit who can execute the command.")])]),t._v(" "),a("tr",[a("td",[t._v("command.price")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("Price paid for each call.")])]),t._v(" "),a("tr",[a("td",[t._v("command.send_as")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("The way the response is sent.")])]),t._v(" "),a("tr",[a("td",[t._v("command.enable_when")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Commands can only be triggered offline/online/both.")])]),t._v(" "),a("tr",[a("td",[t._v("command.user_cooldown")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("User Cooldown in seconds during which the command may not be executed.")])]),t._v(" "),a("tr",[a("td",[t._v("command.global_cooldown")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("Channel Cooldown in seconds during which the command may not be executed.")])]),t._v(" "),a("tr",[a("td",[t._v("command.is_visible")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("Indicating whether the command is displayed in the command overview.")])])])]),t._v(" "),a("h2",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("args")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("List of all arguments including base command.")])])])]),t._v(" "),a("h2",{attrs:{id:"irc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#irc"}},[t._v("#")]),t._v(" IRC")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("irc.tags")]),t._v(" "),a("td",[t._v("mixed")]),t._v(" "),a("td",[t._v("Twitch IRC user state object. Please checkout "),a("a",{attrs:{href:"https://dev.twitch.tv/docs/irc/tags#userstate-twitch-tags",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("USERSTATE")]),t._v(" (Twitch Tags)"),a("OutboundLink")],1),t._v(" for more information about existing tags.")])]),t._v(" "),a("tr",[a("td",[t._v("irc.channel")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Raw channel username.")])]),t._v(" "),a("tr",[a("td",[t._v("irc.message")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Raw message.")])])])]),t._v(" "),a("h2",{attrs:{id:"object-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-reference"}},[t._v("#")]),t._v(" Object Reference")]),t._v(" "),a("p",[t._v("Some functions (described below) of the chatbot return objects. All objects are listed here:")]),t._v(" "),a("h3",{attrs:{id:"user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[t._v("#")]),t._v(" User")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("User's ID.")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("User's display name.")])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v('User\'s broadcaster type: "partner", "affiliate", or "".')])]),t._v(" "),a("tr",[a("td",[t._v("description")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("User's channel description.")])]),t._v(" "),a("tr",[a("td",[t._v("view_count")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("Total number of views of the user's channel.")])])])]),t._v(" "),a("h3",{attrs:{id:"channel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel"}},[t._v("#")]),t._v(" Channel")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Twitch User ID of this channel owner.")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Twitch user display name of this channel owner")])]),t._v(" "),a("tr",[a("td",[t._v("url")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Link to the channel.")])]),t._v(" "),a("tr",[a("td",[t._v("language")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Language of the channel.")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Title of the stream.")])]),t._v(" "),a("tr",[a("td",[t._v("game")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Name of the game being played on the channel.")])])])]),t._v(" "),a("h2",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions "),a("Badge",{attrs:{text:"beta",type:"warning"}})],1),t._v(" "),a("h3",{attrs:{id:"database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[t._v("#")]),t._v(" Database")]),t._v(" "),a("p",[t._v("You have access to a basic set of Database functions, this is almost a key value store ordered by the key and value combined.")]),t._v(" "),a("p",[t._v("We lazy-load the data from the database. This means that if you use "),a("code",[t._v("set")]),t._v(" and then make a "),a("code",[t._v("db")]),t._v(", you may still have cached data.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Function")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("db('channel').name")])]),t._v(" "),a("td",[t._v("Fetch the "),a("code",[t._v("name")]),t._v(" from the "),a("code",[t._v("channel")]),t._v(" table.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("inc('membership', 'currency', 1)")])]),t._v(" "),a("td",[t._v("Increment the "),a("code",[t._v("currency")]),t._v(" from the "),a("code",[t._v("membership")]),t._v(" table.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("dec('membership', 'currency', 1)")])]),t._v(" "),a("td",[t._v("Decrement the "),a("code",[t._v("currency")]),t._v(" from the "),a("code",[t._v("membership")]),t._v(" table.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("set('membership', 'currency', 1)")])]),t._v(" "),a("td",[t._v("Set the "),a("code",[t._v("currency")]),t._v(" from the "),a("code",[t._v("membership")]),t._v(" table.")])])])]),t._v(" "),a("h3",{attrs:{id:"cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache"}},[t._v("#")]),t._v(" Cache")]),t._v(" "),a("p",[t._v("You also have access to a basic set of Cache functions, this is almost a key value store ordered by the key and value combined.")]),t._v(" "),a("p",[t._v("Data is stored in the cache for a maximum of one day. Always assume that data could not exist in a cache.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Function")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("cache('timely')")])]),t._v(" "),a("td",[t._v("Fetch the value for the specified "),a("code",[t._v("key")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("cache('timely', 1, 300)")])]),t._v(" "),a("td",[t._v("Sets the value for the specified "),a("code",[t._v("key")]),t._v(" to the specified value. With Expiration in seconds.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("cache('timely', 1)")])]),t._v(" "),a("td",[t._v("Sets the value for the specified "),a("code",[t._v("key")]),t._v(" to the specified value. With a default expiration of one day.")])])])]),t._v(" "),a("h3",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("p",[t._v("If you want to retrieve twitch related information, then the following methods are available to you.\nNote that twitch now works with ID's instead of login name, so for some functions you have to enter the\nuser ID instead of login name.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Function")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("user('username')")])]),t._v(" "),a("td",[t._v("Fetch the user object from the twitch api by login name. The response returns a "),a("code",[t._v("User")]),t._v(" object or null.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("channel('106415581')")])]),t._v(" "),a("td",[t._v("Fetch the channel object from the twitch api by user-id. The response returns a "),a("code",[t._v("Channel")]),t._v(" object or null.")])])])]),t._v(" "),a("h3",{attrs:{id:"http-json-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-json-requests"}},[t._v("#")]),t._v(" HTTP JSON Requests")]),t._v(" "),a("p",[t._v("With the "),a("code",[t._v("json")]),t._v(" function you can download data from a JSON API. The response can be an "),a("code",[t._v("array")]),t._v(", or "),a("code",[t._v("null")]),t._v(" if the api returns an error.")]),t._v(" "),a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token other"}},[t._v("Random Quote:")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("GET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("https://api.quotable.io/random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Cache your json responses. Requests that take longer than 5 seconds are automatically aborted. Furthermore, this method has a rate limit of 15 requests per minute.")])])])}),[],!1,null,null,null);e.default=v.exports}}]);