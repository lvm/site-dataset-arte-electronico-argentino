import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  year: attr('number'),
  exhibition: attr('string'),
  location: attr('string'),
  curator: attr('string'),
  artist: attr('string'),
  work: attr('string'),
  technique: attr('string'),
  when: attr('string')
  //start: attr('date'),
  //end: attr('date'),
  // curator1: attr('string'),
  // curator2: attr('string'),
  // curator3: attr('string'),
  // artist1: attr('string'),
  // artist2: attr('string'),
  // artist3: attr('string'),
  // artist4: attr('string'),
  // artist5: attr('string'),
  // artist6: attr('string'),
  // artist7: attr('string'),
  // artist8: attr('string'),
});
