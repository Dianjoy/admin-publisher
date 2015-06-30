/**
 * Created by meathill on 15/6/30.
 */
'use strict';
(function (ns) {
  ns.Profile = Backbone.Model.extend({
    url: tp.API + 'info/',
    parse: function (response) {
      return response.publisher;
    }
  });
}(Nervenet.createNameSpace('pub.model')));