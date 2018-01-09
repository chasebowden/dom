$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#website").prepend("<li>Hello my close friend!</li>")
    $("ul#user").children("li").first().click(function() {
    alert('hi');
    });
    $("ul#website").children("li").first().click(function() {
    alert('hi');
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#website").prepend("<li>Goodbye sweet boy</li>");
  });

  $("button#stop").click(function() {
    $("ul").prepend("<li>Stop copying me!</li>");
  });
});
