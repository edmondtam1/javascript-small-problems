function makeDoubler(caller) {
  return function (num) {
    console.log(`This function was called by ${caller}.`)
    return num * 2;
  }
}

doubler = makeDoubler('hi');
console.log(doubler(3));