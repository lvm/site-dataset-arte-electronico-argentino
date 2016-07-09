import Ember from 'ember';

export default Ember.Helper.helper(function(params, namedArgs) {
  var data = namedArgs.exhibition._internalModel._data,
      curators = []
  ;

  if( data.curator0 ){ curators.push( data.curator0 ); }
  if( data.curator1 ){ curators.push( data.curator1 ); }
  if( data.curator2 ){ curators.push( data.curator2 ); }
  if( data.curator3 ){ curators.push( data.curator3 ); }

  return curators.map(function(curator){
    curator = curator.split(",").map(function(a){ return a.trim(); });
    curator.reverse();
    return curator.join(" ");
  }).join(', ');
});
