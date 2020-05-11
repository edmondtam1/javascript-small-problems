var post1 = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <b>totam rem aperiam</b>, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  tags: ['long', 'fancy', 'interesting'],
};

var post2 = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 20, 2020',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <b>totam rem aperiam</b>, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  tags: [],
};

var posts = [post1, post2];

$(function() {
  var template = Handlebars.compile($("#post").html());
  var tag_templ = Handlebars.compile($("#tags").html());
  Handlebars.registerPartial("tags", tag_templ);
  posts.forEach(function(post) {
    $("body").append(template(post));
  });
});