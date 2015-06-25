/**
 * Created by meathill on 14/11/13.
 */
'use strict';
(function (ns) {
  ns.API = 'http://meathill.mac/dianjoy-publisher/';
  ns.UPLOAD = 'http://meathill.mac/dianjoy-publisher/'; // 上传文件的起始路径
  ns.path = 'bower_components/tiger-prawn/'; // 项目路径
  ns.config = {
    login: {
      welcome: '点乐，领先的智能手机广告平台',
      admin: 'service@dianjoy.com',
      verify: ns.API + 'showimg.php',
      className: 'login'
    }
  };

  // 项目名称，主要用于生成key
  ns.PROJECT = 'publisher';

  // 通知的key
  ns.NOTICE_KEY = 'tiger-prawn';

  // 起始页面，登录后自动跳转的页面
  ns.startPage = 'welcome';

  // 启动路径，这个bug终于修了么……
  ns.BASE = '/dev/publisher';

  // 命名空间
  ns.NAME_SPACE = 'pub';
}(Nervenet.createNameSpace('tp')));