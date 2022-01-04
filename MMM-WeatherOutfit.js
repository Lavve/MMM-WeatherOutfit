Module.register('MMM-WeatherOutfit', {
  defaults: {},

  start: function () {
    Log.info('Starting module: ' + this.name);
  },

  getStyles: function () {
    return [this.name + '.css'];
  },

  notificationReceived: function (notification, payload, sender) {
    if (notification === 'CURRENTWEATHER') {
      this.weather = payload.type.currentWeatherObject;

      this.updateDom(0);
    }
  },

  getOutfit: function () {
    const div = document.createElement('div');
    let outfit = '';

    if (this.hasOwnProperty('weather')) {
      console.log('CURRENTWEATHER', this.weather);

      outfit += 'Ta på dig ';

      if (this.weather.temperature > 0) {
        outfit += 'tjock jacka och vantar';
      } else if (this.weather.temperature > 10) {
        outfit += 'jacka med en varm kofta under';
      } else if (this.weather.temperature > 15) {
        outfit += 'långbyxor och en varm kofta';
      } else if (this.weather.temperature > 20) {
        outfit += 'shorts och t-shirt';
      } else if (this.weather.temperature > 25) {
        outfit += 'badbyxor';
      } else {
        outfit += 'vinterjacka, mössa, vantar och halsduk';
      }

      outfit += ' om du ska ut.';

      if (this.weather.rain) {
        outfit += ' Och glöm inte paraplyet!';
      }
      if (this.weather.snow) {
        outfit += ' Och glöm inte pulkan!';
      }

      div.innerHTML = '<span class="bright">' + outfit + '</span>';
      return div;
    }

    div.innerHTML = '<span>Väntar på vädret...</span>';
    div.classList.add('dimmed');

    return div;
  },

  getDom: function () {
    const wrapper = document.createElement('div');
    wrapper.classList.add(this.name + '__wrapper');

    wrapper.appendChild(this.getOutfit());

    return wrapper;
  },
});
