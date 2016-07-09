import Ember from 'ember';
import JSONAPISerializer from 'ember-data/serializers/json-api';

var underscore = Ember.String.underscore;

export default JSONAPISerializer.extend({
  keyForAttribute(key) {
    if( key.indexOf("artist") !== -1 ){
      key = key.replace("ist","ist_");
    }
    if( key.indexOf("curator") !== -1 ){
      key = key.replace("ator","ator_");
    }
    return underscore(key);
  },
  normalizeFindRecordResponse(store, type, payload) {
    return this.super(store, type, payload);
  }
});


