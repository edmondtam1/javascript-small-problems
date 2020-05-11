$(function() {
  // press digit: check if text is '0' -> clear num screen
  //   check if it is a result -> clear num screen, set result to false
  //   append digit to num screen
  // 
  var App = {
    $buttons: $("#buttons"),
    $result: $("#result"),
    $commands: $("#commands"),
    result: 0,
    resultStatus: false,
    currentOp: '+',
    clear: function(e) {
      e.preventDefault();
      this.clearNumScreen();
      this.$result.text('0');
    },
    clearAll: function(e) {
      this.clear(e);
      this.clearOpScreen();
      this.reset();
    },
    reset: function() {
      this.result = 0;
      this.currentOp = '+';
    },
    negateNum: function(e) {
      e.preventDefault();
      var currentText = this.$result.text();
      if (currentText !== '0') {
        if (currentText.indexOf('-') === -1) {
          this.$result.text('-' + currentText);
        } else {
          this.$result.text(currentText.replace('-', ''));
        }
      }
    },
    clearNumScreen: function() {
      this.$result.text('');
    },
    clearOpScreen: function() {
      this.$commands.text('');
    },
    printOperator: function(op) {
      var previousOpText = this.$commands.text();
      var newNumAndOp = this.$result.text() + ' ' + op + ' ';
      this.calculateResult();
      this.currentOp = op;
      this.$commands.text(previousOpText + newNumAndOp);
    },
    calculateResult: function() {
      var currentNum = this.$result.text();
      var number;
      if (currentNum.includes('.')) {
        number = parseFloat(currentNum);
      } else {
        number = parseInt(currentNum);
      }
      switch (this.currentOp) {
        case '+':
          this.result += number;
          break;
        case '-':
          this.result -= number;
          break;
        case '/':
          this.result /= number;
          break;
        case 'x':
          this.result *= number;
          break;
        case '%':
          this.result = this.result % number;
          break;
      }

      this.displayResult();
    },
    displayResult: function() {
      this.$result.text(this.result);
      this.resultStatus = true;
    },
    handleOperators: function(e) {
      e.preventDefault();
      this.printOperator($(e.target).text());
    },
    handleDigits: function(e) {
      e.preventDefault();
      this.printDigit($(e.target).text());
    },
    printDigit: function(digit) {
      if (this.$result.text().trim() === '0') this.clearNumScreen();
      if (this.resultStatus) {
        this.clearNumScreen();
        this.resultStatus = false;
      }
      this.printToNumScreen(digit);
    },
    printToNumScreen: function(digit) {
      this.$result.text(this.$result.text() + digit);
    },
    handleDot: function(e) {
      e.preventDefault();
      if (this.$result.text().indexOf('.') === -1) this.printToNumScreen('.');
    },
    handleResult: function(e) {
      e.preventDefault();
      this.calculateResult();
      this.clearOpScreen();
      this.reset();
    },
    bind: function() {
      this.$buttons.on("click", "#c", this.clear.bind(this));
      this.$buttons.on("click", "#ce", this.clearAll.bind(this));
      this.$buttons.on("click", "#neg", this.negateNum.bind(this));
      this.$buttons.on("click", ".op", this.handleOperators.bind(this));
      this.$buttons.on("click", ".digit", this.handleDigits.bind(this));
      this.$buttons.on("click", ".dot", this.handleDot.bind(this));
      this.$buttons.on("click", ".result", this.handleResult.bind(this));
    },
    init: function() {
      this.bind();
    }
  }

  App.init();
});