/**
 * Created by meathill on 15/6/25.
 */
'use strict';
(function (ns) {
  ns.All = Backbone.Router.extend({
    $body: null,
    $format: '',
    $profile: null,
    routes: {
      'welcome': 'showWelcomePage',
      'ad(/)': 'showADList',
      'apply/add/': 'showCreateApplyPage',
      'apply/': 'showApplies',
      'my/profile/': 'showMyProfile',
      'stat/(:start/:end)': 'showStatList',
      'stat/:id/(:start/:end)': 'showADStat'
    },
    getDefaultParam: function (start, end) {
      var today = moment().format(this.$format);
      start = start || today;
      end = end || today;
      return {
        API: tp.API,
        start: start,
        end: end,
        format: this.$format
      };
    },
    showADList: function () {
      this.$body.load('page/ad/list.html');
      this.$body.setFramework('ad', '全部广告');
    },
    showADStat: function (id, start, end) {
      var options = this.getDefaultParam(start, end);
      this.$body.load('page/stat/ad.hbs', options);
      this.$body.setFramework('stat', '广告数据');
    },
    showApplies: function () {
      this.$body.load('page/apply/list.html');
      this.$body.setFramework('website', '全部站点');
    },
    showCreateApplyPage: function () {
      this.$body.load('page/apply/add.hbs', this.$profile);
      this.$body.setFramework('apply', '历史汇款详情');
    },
    showMyProfile: function () {
      this.$body.load('page/my/profile.hbs', this.$profile, {
        loader: pub.page.Profile
      });
      this.$body.setFramework('profile', '个人信息');
    },
    showStatList: function (start, end) {
      var options = this.getDefaultParam(start, end);
      this.$body.load('page/stat/list.hbs', options);
      this.$body.setFramework('stat', '全部数据');
    },
    showWelcomePage: function () {
      this.$body.load('page/welcome.html');
      this.$body.setFramework('welcome', '你好');
    }
  });
}(Nervenet.createNameSpace('pub.router')));