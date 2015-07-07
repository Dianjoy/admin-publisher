/**
 * Created by meathill on 15/6/30.
 */
'use strict';
(function (ns) {
  ns.Profile = Backbone.Model.extend({
    url: tp.API + 'info/',
    parse: function (response) {
      this.options = response.options;
      return response.publisher;
    },
    toJSON: function (options) {
      var json = Backbone.Model.prototype.toJSON.call(this, options);
      if (options) {
        return json;
      }
      return _.extend({
        API: tp.API
      }, this.options, json);
    }
  });
}(Nervenet.createNameSpace('pub.model')));