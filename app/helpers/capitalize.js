import Ember from 'ember';

export default Ember.Helper.helper(function(params, namedArgs) {
  return Ember.String.capitalize(namedArgs.words);
});
