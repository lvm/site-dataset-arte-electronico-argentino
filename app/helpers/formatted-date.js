import Ember from 'ember';


export default Ember.Helper.helper(function(params, namedArgs) {
  var date = namedArgs.date === undefined ? params[0] : namedArgs.date,
      format = namedArgs.format === undefined ? 'L' : namedArgs.format;
  moment.locale('es');
  return moment(date).format(format);
});
