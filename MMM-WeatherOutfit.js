/* WeatherOutfit - Presents appropriate outfit depending on current outside temperature */

/* Magic Mirror
 * Module: WeatherOutfit
 *
 * By Magnus Claesson https://github.com/Lavve
 * MIT Licensed.
 */

Module.register('MMM-WeatherOutfit', {
  defaults: {
    topic: '',
  },

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
    if (
      notification === 'MQTT_MESSAGE_RECEIVED' &&
      payload.topic === this.config.topic
    ) {
      this.temperature = payload.value;
      this.updateDom(250);
    }
  },

  getOutfit: function () {
    const div = document.createElement('div');
    let outfit = '';

    if (this.hasOwnProperty('temperature')) {
      outfit += this.translate('pre') + ' ';

      if (this.temperature >= 1) {
        outfit += this.translate('2-10');
      } else if (this.temperature >= 10) {
        outfit += this.translate('10-15');
      } else if (this.temperature >= 15) {
        outfit += this.translate('15-20');
      } else if (this.temperature >= 20) {
        outfit += this.translate('20-25');
      } else if (this.temperature >= 25) {
        outfit += this.translate('25>');
      } else {
        outfit += this.translate('<2');
      }

      outfit += ' ' + this.translate('post');

      div.classList.add('bright');
      div.innerHTML = outfit;

      return div;
    }

    div.classList.add('dimmed');
    div.innerHTML = this.translate('waiting');

    return div;
  },

  getDom: function () {
    const wrapper = document.createElement('div');
    wrapper.classList.add(this.name + '__wrapper');

    wrapper.appendChild(this.getOutfit());

    return wrapper;
  },
});
