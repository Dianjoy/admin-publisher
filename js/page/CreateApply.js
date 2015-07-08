/**
 * Created by meathill on 15/6/30.
 */
'use strict';
(function (ns) {
  ns.CreateApply = Backbone.View.extend({
    events: {
      'change [name=apply]': 'apply_changeHandler',
      'textInput [name=apply]': 'apply_inputHandler',
      'success': 'successHandler'
    },
    calculate: function () {
      var num = this.$('[name=apply]').val()
        , tax = 0;
      if (num <= 800) {
        tax = 0;
      } else if (num <= 4000) {
        tax = (num - 800) * 0.2;
      } else if (num <= 31250) {
        tax = num * 0.8 * 0.2;
      } else if (num <= 78123) {
        tax = num * 0.8 * 0.3 - 2000;
      } else {
        tax = num * 0.8 * 0.4 - 7000;
      }
      console.log(num, tax);
      this.$('strong').text(num - tax);
    },
    apply_changeHandler: function (event) {
      this.calculate();
    },
    apply_inputHandler: function (event) {
      var self = this;
      setTimeout(function () {
        self.calculate();
      }, 50);
    },
    successHandler: function () {
      setTimeout(function () {
        location.hash = '#/apply/';
      }, 3000);
    }
  });
}(Nervenet.createNameSpace('pub.page')));