/**
 * Created by meathill on 15/6/30.
 */
'use strict';
(function (ns) {
  ns.Profile = tp.view.Loader.extend({
    events: {
      'change [name=publisher_type]': 'publisherType_changeHandler',
      'change [name=province]': 'province_changeHandler',
      'click .cancel-button': 'cancelButton_clickHandler',
      'success form': 'form_successHandler'
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
    cancel_successHandler: function () {
      this.$('form').removeClass('hide');
      this.$('.last-apply').addClass('hide');
    },
    cancel_errorHandler: function () {
      alert('撤销失败，请稍后重试。');
      this.$('.cancel-button').spinner(false);
    },
    cancelButton_clickHandler: function (event) {
      var button = $(event.currentTarget);
      button.spinner();
      tp.service.Manager.call(tp.API + 'info/', null, {
        method: 'delete',
        success: this.cancel_successHandler,
        error: this.cancel_errorHandler,
        context: this
      });
    },
    form_successHandler: function () {
      this.$('form').find('input,select,button').prop('disabled', true);
      this.$('label.btn').addClass('disabled');
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