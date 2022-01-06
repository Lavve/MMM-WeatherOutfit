Module.register('MMM-WeatherOutfit', {
  defaults: {},

  start: function () {
    Log.info('Starting module: ' + this.name);
  },

  getStyles: function () {
    return [this.name + '.css'];
  },

  getTranslations: function () {
    return {
      en: 'translations/en.json',
      sv: 'translations/sv.json',
    };
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
      Log.info(this.name.toUpperCase(), this.weather);

      const temp = (this.weather.temperature + this.weather.feelsLikeTemp) / 2;
      const wind =
        this.weather.windUnits === 'metric'
          ? this.weather.useKmh
            ? this.weather.windSpeed * 0.277778
            : this.weather.windSpeed
          : this.weather.windSpeed * 0.44704;

      Log.info(temp, wind);

      outfit += this.translate('pre') + ' ';

      if (temp >= 2) {
        outfit += this.translate('2-10');
      } else if (temp >= 10) {
        outfit += this.translate('10-15');
      } else if (temp >= 15) {
        outfit += this.translate('15-20');
      } else if (temp >= 20) {
        outfit += this.translate('20-25');
      } else if (temp >= 25) {
        outfit += this.translate('25>');
      } else {
        outfit += this.translate('<2');
      }

      outfit += ' ' + this.translate('post');

      if (this.weather.rain) {
        if (wind < 5) {
          outfit += ' ' + this.translate('umbrella');
        } else {
          outfit += ' ' + this.translate('windy_umbrella');
        }
      }
      if (this.weather.snow) {
        outfit += ' ' + this.translate('snow');
      }

      div.innerHTML = outfit;
      div.classList.add('bright');

      return div;
    }
    div.innerHTML = this.translate('waiting');
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
