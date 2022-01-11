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

  $(".name").hover(function () {
    $(this).css("opacity", "0.6");
    $(this).fadeOut(10000);
  });
});

$(document).ready(function () {
  $(".name").hover(function () {
    $(this).css("opacity", "0.6");
    $(this).fadeOut(10000);
  });
});

function myFunction(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  console.log(name);
  var email = document.getElementById("email").value;
  console.log(email);
  var message = document.getElementById("message").value;
  console.log(message);
  if (!(message === " ")) {
    alert(
      "Thank you for contacting us," + name + ".We have received your message"
    );
  }
}

