export default Router;

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('license');
  this.route('docs');
  this.route('exhibition');
  this.route('event');
  this.route('location');
  this.route('search', {path: "/search"});
  this.route('technique');
});

export default Router;
