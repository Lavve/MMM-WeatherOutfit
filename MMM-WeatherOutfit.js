Module.register('MMM-WeatherOutfit', {
  defaults: {},

  notificationReceived: function (notification, payload, sender) {
    if (notification === 'CALENDAR_EVENTS') {
      this.weather = payload;
      console.log(this.weather);
    }
  },

  getDom: function () {
    const wrapper = document.createElement('div');
    wrapper.classList.add(this.name + '__wrapper');
    return wrapper;
  },
});
