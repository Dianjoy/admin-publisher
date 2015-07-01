/**
 * Created by meathill on 15/6/30.
 */
'use strict';
(function (ns) {
  ns.CreateApply = Backbone.View.extend({
    events: {
      'change [name=apply]': 'apply_changeHandler',
      'textInput [name=apply]': 'apply_changeHandler',
      'success': 'successHandler'
    },
    apply_changeHandler: function (event) {
      var num = event.target.value
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
      this.$('strong').text(tax);
    },
    successHandler: function () {
      setTimeout(function () {
        location.hash = '#/apply/';
      }, 3000);
    }
  });
}(Nervenet.createNameSpace('pub.page')));