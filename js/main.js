$("document").ready(function () {
  $("#design").click(function () {
    $(".imag1").toggle();
    $("#description1").toggle();
  });
  $("#dev").click(function () {
    $(".imag2").toggle();
    $("#description2").toggle();
  });
  $("#management").click(function () {
    $(".imag3").toggle();
    $("#description3").toggle();
  });

  $(".col-md-3 img").hover(function () {
    $("this").css("color", "white");
  });
});

/*$("document").ready(function () {
  $(".col-md-3").hover(function () {
    $("img").css("background-color", "white");
  });
}); */
