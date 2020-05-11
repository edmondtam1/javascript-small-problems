function madlibs(template) {
  var words = {
    adj: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'eye', 'cat', 'banana'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats', 'dances', 'sings'],
    adv: ['easily', 'lazily', 'noisily', 'excitedly', 'impeccably', 'clumsily'],
  }

  var regex = new RegExp(/\*{2}(.*?)\*{2}/, 'gi');
  return template.replace(regex, (match) => {
    var command = match.replace(/\*/g, '');
    var array = words[command];
    return array[Math.floor(Math.random() * array.length)];
  });
}

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

var template1 = 'The **adj** brown **noun** **adv** **verb** the **adj** yellow **noun**,' +
  ' who **adv** **verb** his **noun** and **verb** around.'
console.log(madlibs(template1));

// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

// madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

var template2 = "The **noun** **verb** the **noun**'s **noun** with the **adj** **noun**" +
  " until the **noun** becomes **adj**!"

console.log(madlibs(template2));

// madlibs(template2); // The "cat" "pats" the "cat"'s "head".

// data structure
// wordObject for mapping adjectives, nouns, verbs and adverbs
// template should include some kind of text or phrase with unique characters
// that can be parsed by the function to replace specific words
// perhaps ${adj} or $(adj) (will it get passed in correctly?)

// algo
// take template, split into words
// loop through words using map and identify ${} or $()
// if $(adj) exists replace word with a randomly generated adj and so on
// return joined words