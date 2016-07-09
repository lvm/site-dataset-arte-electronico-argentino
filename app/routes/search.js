import Ember from 'ember';

import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  perPage: 20,
  //when: null,
  model: function(params){
    var has_filters;
    params.paramMapping = {
      page: 'page',
      perPage: 'perPage',
      totalPages: 'totalPages',
    };
    if( params.since || params.until ){
      params.when = params.since ? "since":"until";
    }
    if( params.q || params.work || params.artist || params.curator ||
        params.technique || params.location || params.year ||
        params.when || params.since || params.until ){
      has_filters = true;
    }
    return has_filters ? this.findPaged('search', params) : [];
  }
});
