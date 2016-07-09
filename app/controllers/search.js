import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q','work','artist','curator','technique','location','year','when','since','until'],
  q: null,
  work: null,
  artist: null,
  curator: null,
  location: null,
  technique: null,
  year: null,
  when: null,
  since: null,
  until: null,
});
