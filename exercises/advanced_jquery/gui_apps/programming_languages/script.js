var languages = [{
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, \
    general-purpose programming language. It was designed and developed in the mid-1990s \
    by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, \
    Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, \
    including functional, object-oriented, and imperative. It also has a dynamic type \
    system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted \
    programming language. It has been standardized in the ECMAScript language \
    specification. Alongside HTML and CSS, JavaScript is one of the three core \
    technologies of World Wide Web content production; the majority of websites employ \
    it, and all modern Web browsers support it without the need for plug-ins. JavaScript \
    is prototype-based with first-class functions, making it a multi-paradigm language, \
    supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages \
    with a long history and a distinctive, fully parenthesized prefix notation. \
    Originally specified in 1958, Lisp is the second-oldest high-level programming \
    language in widespread use today. Only Fortran is older, by one year. Lisp has changed \
    since its early days, and many dialects have existed over its history. Today, the best \
    known general-purpose Lisp dialects are Common Lisp and Scheme.'
  },

  {
    name: 'R',
    description: 'R is a programming language and free software environment for statistical computing and graphics.'
  }
];

$(function() {
  var $lang_templ = Handlebars.compile($("#language").html());

  var Languages = {
    showLimit: 120,
    parseDesc: function() {
      languages.forEach(function(item) {
        var desc = item.description.replace(/\s{1,}/g, ' ');
        [item.description, item.extraDesc] = [desc.slice(0, this.showLimit), desc.slice(this.showLimit)];
      }, this);
    },
    displayLangs: function() {
      $("#languages").append($lang_templ({
        languages: languages
      }));
    },
    showMore: function(e) {
      var $p = $(e.target).siblings("p");
      $p.find("span").toggleClass("hidden");
    },
    checkDescLength: function() {
      languages.forEach(function(item) {
        if (!item.extraDesc) {
          $(`[name=${item.name}]`).find("span, button").remove();
        }
      });
    },
    init: function() {
      this.parseDesc();
      this.displayLangs();
      this.checkDescLength();
      $("#languages").on("click", "button.show", this.showMore.bind(this));
    }
  }

  Languages.init();
});