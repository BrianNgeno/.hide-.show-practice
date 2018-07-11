/*$(document).ready(function() {
  $("h1").click(function(event) {
    alert("This is a header");
    alert("I said this is a header !");
    $("p").click(function(event) {
      alert("this is a paragraph");
      $("img").click(function() {
        alert("this is an image");
        event.preventDefault();
      });
    });
  });
});

$(document).ready(function() {
  $("img").click(function(event) {
    ("p").show();
    event.preventDefault();
  });
});

$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").show();
    $(".walrus-hidden").hide();
  });
});

$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});
*/
$(document).ready(function() {
  $("clickable").click(function(event) {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
    event.preventDefault();
  });
});
