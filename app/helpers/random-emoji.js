import Ember from 'ember';

var emoji_array = [
  '⏳',
  '⌛️',
  '💤',
  '🤔',
  '🤖',
  '🛰',
  '🖥',
  '📡'
];

function random_emoji(emoji_array){
  return emoji_array[Math.floor(Math.random() * emoji_array.length)];
}

export default Ember.Helper.helper(function() {
  return random_emoji(emoji_array);
});
