function bubbleSort(arr) {

  while (true) {
    var i;
    var looped = false;
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        looped = true;
      }
    }

    if (!looped) break;
  };
}

var array = [5, 3];
bubbleSort(array);
console.log(array); // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array); // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// algo
// initiate looped
// loop through index and index + 1
// if (condition): sort and flag "looped"