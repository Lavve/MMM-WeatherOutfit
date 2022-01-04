Module.register('MMM-WeatherOutfit', {
  defaults: {},

  notificationReceived: function (notification, payload, sender) {
    if (notification === 'CURRENTWEATHER_TYPE') {
      this.weather = payload;
      console.log('CURRENTWEATHER_TYPE', this.weather);
    }
  },

  getDom: function () {
    const wrapper = document.createElement('div');
    wrapper.classList.add(this.name + '__wrapper');
    return wrapper;
  },
});
