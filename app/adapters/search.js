import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: 'http://api.arte-electronico.cyberpunk.com.ar',
  namespace: '',
  pathForType: function(type) {
    if (type === "searches" ){
      type = "search";
    }
    return type;
  },
});
