import Ember from 'ember';

export default Ember.Helper.helper(function(params, namedArgs) {
  var data = namedArgs.exhibition._internalModel._data,
      artists = []
  ;

  if( data.artist0 ){ artists.push( data.artist0 ); }
  if( data.artist1 ){ artists.push( data.artist1 ); }
  if( data.artist2 ){ artists.push( data.artist2 ); }
  if( data.artist3 ){ artists.push( data.artist3 ); }
  if( data.artist4 ){ artists.push( data.artist4 ); }
  if( data.artist5 ){ artists.push( data.artist5 ); }
  if( data.artist6 ){ artists.push( data.artist6 ); }
  if( data.artist7 ){ artists.push( data.artist7 ); }
  if( data.artist8 ){ artists.push( data.artist8 ); }

  return artists.map(function(artist){
    artist = artist.split(",").map(function(a){ return a.trim(); });
    artist.reverse();
    return artist.join(" ");
  }).join(', ');
});
