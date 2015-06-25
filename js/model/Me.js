/**
 * Created by meathill on 15/6/25.
 */
'use strict';
(function (ns) {
  ns.Me = tp.model.Me.extend({
    idAttribute: 'publisher_id',
    initialize: function () {
      this.on('change:publisher_id', this.id_changeHandler, this);
    }
  });
}(Nervenet.createNameSpace('pub.model')));