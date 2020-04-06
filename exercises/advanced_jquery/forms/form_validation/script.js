$(function() {
  var Form = {
    $form: $("form"),
    validateName: function(name) {
      if (!name) {
        return "Please enter a name";
      } else if (!!name.match(/[^a-z\s]/gi)) {
        return "Non-alphabet characters are not allowed";
      }
      return true;
    },
    validateEmail: function(email) {
      if (!!email && !!email.match(/.+@.+/gi)) {
        return true;
      } else {
        return "Please provide a valid email address";
      }
    },
    validatePassword: function(pwd) {
      return pwd.length >= 10 ? true : "Password should be at least 10 characters";
    },
    validatePhone: function(phone) {
      var regex = /^\d{3}-\d{3}-\d{4}$/gi;
      return !!phone.match(regex) ? true : "Phone number should be in xxx-xxx-xxxx format";
    },
    validateCredit: function() {
      var regex = /\d{4}/;
      var isValid = true;
      $("[name=credit]").each(function(_, input) {
        if (!regex.test($(input).val())) isValid = false;
      });
      return isValid || "Please key in a valid credit card number";
    },
    createSpan: function(msg) {
      return `<span>${msg}</span>`;
    },
    handleResult: function(msg, $element) {
      var $parent = $element.parent();
      if (msg === true) {
        $parent.find("span").remove();
      } else {
        if ($parent.find('span').length === 0) {
          $parent.append(this.createSpan(msg));
        }
      }
    },
    getErrorMessage: function($el) {
      var id = $el.attr('id');
      var val = $el.val();
      var message = false;
      if (id === 'first_name' || id === 'last_name') {
        message = this.validateName(val);
      } else if (id === 'email') {
        message = this.validateEmail(val);
      } else if (id === 'password') {
        message = this.validatePassword(val);
      } else if (id === 'phone') {
        message = this.validatePhone(val);
      } else if (/credit/.test(id)) {
        message = this.validateCredit();
      } else if (id === 'submit') {
        message = true;
      } else {
        return;
      }
      return message;
    },
    checkAllInputs: function() {
      this.$form.find("input").each(function(_, el) {
        this.checkInputValidity($(el));
      }.bind(this));
    },
    parseFormData: function(string) {
      var creditNumber = string.match(/credit=\d{4}/g).join('').replace(/\D/g, '');
      var creditText = "credit=" + creditNumber;
      $("#data").text(string.replace(/(credit=\d{4}&){3}(credit=\d{4})/gi, creditText));
    },
    submitForm: function(e) {
      e.preventDefault();
      var $el = $(e.target);
      this.checkAllInputs();
      if (this.$form.find("span").length === 0) {
        this.parseFormData(this.$form.serialize());
      } else {
        var $parent = $el.parent();
        if ($parent.find('span').length === 0) {
          $parent.append(this.createSpan("Please correct form errors before submitting"));
        }
      }
    },
    checkInputValidity: function($el) {
      var message = this.getErrorMessage($el);
      this.handleResult(message, $el);
    },
    handleInput: function(e) {
      e.preventDefault();
      var $el = $(e.target);
      if ($el.attr('type') !== 'button') {
        this.checkInputValidity($el);
      }
    },
    blockNonAlpha: function(e) {
      return (/[a-zA-Z'\s]/gi.test(e.key));
    },
    blockNonDigit: function(e) {
      return !(/[^0-9]/.test(e.key) || e.target.value.length === 4);
    },
    clearMessage: function(e) {
      $(e.target).parent().find('span').remove();
    },
    nextFocus: function(e) {
      var $input = $(e.target);
      if ($input.val().length === 4) {
        $input.nextAll("input").first().focus();
      }
    },
    handleEvents: function() {
      this.$form.on("blur", "input", this.handleInput.bind(this));
      this.$form.on("focus", "input", this.clearMessage.bind(this));
      $("#first_name, #last_name").on("keypress", this.blockNonAlpha.bind(this));
      $(".credit").on("keypress", "input", this.blockNonDigit.bind(this));
      $("[name=credit]").slice(0, 3).on("input", this.nextFocus.bind(this));
      this.$form.on("submit", this.submitForm.bind(this));
    },
    reset: function() {
      document.querySelector("form").reset();
      this.$form.find("span").remove();
    },
    init: function() {
      this.handleEvents();
      // this.reset();
    }
  }

  Form.init();
});