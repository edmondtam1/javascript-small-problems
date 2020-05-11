function later(cmd, arg) {
  return function() {
    cmd(arg);
  }
}

var logWarning = later(console.log, 'The system is shutting down!');
logWarning();