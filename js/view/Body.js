/**
 * Created by meathill on 15/6/30.
 */
'use strict';
(function (ns) {
  ns.Body = tp.view.Body.extend({
    initialize: function (options) {
      tp.view.Body.prototype.initialize.call(this, options);
      this.model.off('change:fullname', null, this);
      this.model.on('change:publisher_name', this.model_nameChangeHandler, this);
    }
  });
}(Nervenet.createNameSpace('pub.view')));