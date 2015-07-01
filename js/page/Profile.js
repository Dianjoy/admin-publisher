/**
 * Created by meathill on 15/6/30.
 */
'use strict';
(function (ns) {
  ns.Profile = tp.view.Loader.extend({
    events: {
      'change [name=publisher_type]': 'publisherType_changeHandler',
      'change [name=province]': 'province_changeHandler'
    },
    initialize: function (options) {
      tp.view.Loader.prototype.initialize.call(this, options);

      this.optionTemplate = Handlebars.compile('{{#each cities}}<option value="{{.}}">{{.}}</option>{{/each}}');
    },
    render: function () {
      tp.view.Loader.prototype.render.call(this);

      var province = this.model.get('province');
      this.$('[name=province]').val(province);
      this.renderCities(this.model.options.provinces.indexOf(province));
    },
    renderCities: function (province) {
      var cities = this.model.options.cities;
      this.$('[name=city]').html(this.optionTemplate({cities: cities[province]}));
    },
    province_changeHandler: function (event) {
      var province = event.target.selectedIndex;
      this.renderCities(province);
    },
    publisherType_changeHandler: function (event) {
      var className = $(event.currentTarget).data('class');
      this.$('.personal, .corp').not('.' + className).addClass('hide');
      this.$('.' + className).removeClass('hide');
    }
  });
}(Nervenet.createNameSpace('pub.page')));