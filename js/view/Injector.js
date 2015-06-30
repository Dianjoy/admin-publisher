/**
 * Created by meathill on 15/6/30.
 */
'use strict';
(function (ns) {
  ns.Injector = function (options) {
    var $el = $(options.el);
    $el.attr('action', function () {
      return $(this).attr('action').replace('{{API}}', tp.API);
    });
  }
}(Nervenet.createNameSpace('pub.view')));