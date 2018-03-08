console.log('****************** map 5 *********************');

// Map an array of words to their opposites.
// Extend the dictionary that the function uses to return the opposite of a word.
// Then map the array of words to their opposites and console.log the result.

var words = ['white', 'night', 'up', 'obscure', 'triumphant', 'tropical', 'water'];

function returnOpposite(word){
  var opposites = {
    'water': 'fire'
  };
  return opposites[word];
};
