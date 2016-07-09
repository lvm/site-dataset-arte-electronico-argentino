import Ember from 'ember';

import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  perPage: 20,
  model: function(params){
    params.paramMapping = {
      page: 'page',
      perPage: 'perPage',
      totalPages: 'totalPages',
    };
    return this.findPaged('event', params);
  }
});
