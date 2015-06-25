/**
 * Created by meathill on 15/6/25.
 */
'use strict';
(function (ns) {
  ns.All = Backbone.Router.extend({
    $body: null,
    routes: {
      'welcome': 'showWelcomePage'
    },
    showWelcomePage: function () {
      this.$body.load('page/welcome.html');
      this.$body.setFramework('welcome', '你好');
    }
  });
}(Nervenet.createNameSpace('pub.router')));