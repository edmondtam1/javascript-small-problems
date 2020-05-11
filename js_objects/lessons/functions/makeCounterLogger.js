function makeCounterLogger(num) {
  return function(nextNum) {
    var baseNum = num;
    while (nextNum !== baseNum) {
      console.log(baseNum);
      nextNum < baseNum ? baseNum-- : baseNum++;
    }
    console.log(nextNum);
  }
}

var countLog = makeCounterLogger(5);

countLog(8);
countLog(2);