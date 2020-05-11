$(function() {
  var questions = [{
      id: 1,
      description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
      options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
    },
    {
      id: 2,
      description: 'Which of the following numbers is the answer to Life, the \
                    Universe and Everything?',
      options: ['66', '13', '111', '42'],
    },
    {
      id: 3,
      description: 'What is Pan Galactic Gargle Blaster?',
      options: ['A drink', 'A machine', 'A creature', 'None of the above'],
    },
    {
      id: 4,
      description: 'Which star system does Ford Prefect belong to?',
      options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
    },
  ];

  var answerKey = {
    '1': 'Douglas Adams',
    '2': '42',
    '3': 'A drink',
    '4': 'Betelgeuse'
  };

  var App = {
    $form: $("form"),
    handlebars: function() {
      this.question_tmpl = Handlebars.compile($("#question_tmpl").html());
      this.option_prtl = Handlebars.registerPartial("option", $("#option_tmpl").html());
      Handlebars.registerHelper("inc", function(value) {
        return parseInt(value) + 1;
      });
    },
    renderQuestions: function() {
      $("#questions").append(this.question_tmpl({
        questions: questions
      }));
      $(".questionMsg").hide();
    },
    checkAnswers: function(data) {
      Object.keys(answerKey).forEach(function(id) {
        var $p = $(`p[data-id="${id}"]`);
        var message = '';
        var rightAnswer = answerKey[id];
        // if id not found in data, message = missing
        // else if id found, check if it's right or not
        var ans = data.filter(function(obj) {
          return obj.name === id;
        })[0];
        if (!ans) {
          message = `You have not given an answer. The right answer is ${rightAnswer}.`;
        } else {
          if (ans.value === rightAnswer) {
            message = "Correct answer!";
          } else {
            message = `Sorry, that is wrong. The right answer is ${rightAnswer}.`;
          }
        }
        $p.html(message).show();
      });
    },
    handleSubmit: function(e) {
      e.preventDefault();
      var data = this.$form.serializeArray();
      this.checkAnswers(data);
    },
    handleReset: function(e) {
      e.preventDefault();
      var reset = confirm("Are you sure you want to reset?");
      if (reset) {
        this.$form.trigger("reset");
        $("p.questionMsg").hide();
      }
    },
    handleBtns: function() {
      $("#submitBtn").on('click', this.handleSubmit.bind(this));
      $("#resetBtn").on('click', this.handleReset.bind(this));
    },
    init: function() {
      this.handlebars();
      this.renderQuestions();
      this.handleBtns();
    },
  }

  App.init();
});