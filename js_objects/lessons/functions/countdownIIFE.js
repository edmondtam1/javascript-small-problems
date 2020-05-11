function countdown(count) {
  (function log(num) {
    console.log(num);
    if (num > 0) {
      log(num - 1);
    } else {
      console.log('Done!');
    }
  })(count);
};

countdown(7);