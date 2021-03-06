# MMM-WeatherOutfit

A module for [MagicMirror²](https://github.com/MichMich/MagicMirror) that presents appropriate outfit depending on current outside temperature received from [Otto Paulsen](https://github.com/ottopaulsen)'s outstanding [MQTT module](https://github.com/ottopaulsen/MMM-MQTT).

## Installation

1. Clone this repository into `MagicMirror/modules/` inside your MagicMirror² folder.

```
cd ~/MagicMirror/modules
git clone https://github.com/Lavve/MMM-WeatherOutfit
```

2. Add the module to your MagicMirror² `config.js`

```javascript
{
  module: "MMM-WeatherOutfit",
  header: "Today's outfit",
  position: "top_left",
  config: {
    topic: "outside/temperature",
  },
},
```
## Configuration
Specify the topic from where the temperature is received from
| Configuration | Default | Type   | Description               |
| ------------- | ------- | ------ | ------------------------- |
| topic         | `""`    | string | MQTT topic of your choice |

**Note:** You also need to add `broadcast: true` on the specific topic in the configuration for MMM-MQTT.
## Collaborate
Pull requests, translations and suggestions for improvements are more than welcome.

## Donations
[Buy me a beer](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=SM9XRXUPPJM84&item_name=%40lavve+MagicMiror+Modules&currency_code=SEK) if you like my modules! ❤️