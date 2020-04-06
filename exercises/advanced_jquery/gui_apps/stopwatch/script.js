$(function() {
  // attach handlers (incl start -> stop)
  // start event => keep a timer 
  var App = {
    $startBtn: $("#start"),
    $resetBtn: $("#reset"),
    hours: 0,
    minutes: 0,
    seconds: 0,
    centisecs: 0,
    on: false,
    startStopHandler: function() {
      if (this.on) {
        this.handleStop();
      } else {
        this.handleStart();
      }
    },
    handleStop: function() {
      this.on = false;
      clearInterval(this.interval);
      this.$startBtn.text('Start');
    },
    handleStart: function() {
      this.on = true;
      this.interval = setInterval(this.addTime.bind(this), 10);
      this.$startBtn.text('Stop');
    },
    addTime: function() {
      this.centisecs++;
      if (this.centisecs === 100) {
        this.centisecs = 0;
        this.seconds++;

        if (this.seconds === 60) {
          this.seconds = 0;
          this.minutes++;

          if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
          }
        }
      }
      this.updateTime();
    },
    updateTime: function() {
      $(".centisecs").text(this.padTime(this.centisecs));
      $(".seconds").text(this.padTime(this.seconds));
      $(".minutes").text(this.padTime(this.minutes));
      $(".hours").text(this.padTime(this.hours));
    },
    padTime: function(num) {
      return String(num).padStart(2, '0');
    },
    resetHandler: function() {
      this.handleStop();
      this.centisecs = 0;
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
      this.updateTime();
    },
    init: function() {
      this.$startBtn.on("click", this.startStopHandler.bind(this));
      this.$resetBtn.on("click", this.resetHandler.bind(this));
    }
  }
  App.init();
});