$("button").on("click", function() {
  firstSelected = $(".selected:eq(0)");
  secondSelected = $(".selected:eq(1)");
  var tempText = firstSelected.text();
  firstSelected.text(secondSelected.text());
  secondSelected.text(tempText);
  $("td").removeClass("selected");
  $("td").removeClass("selectedbox");
  console.log("new score");
  Score();
});

$("td").on("click", function(e) {
  $(this).toggleClass("selected");
});

function Score() {
  var s = 0;
  for (var x = 1; x < 80; x++) {
    var y = x + 1;
    var z = y + 1;
    var a = $("td." + x).text();
    var b = $("td." + y).text();
    var c = $("td." + z).text();
    if (a == b && a == c) {
      s = s + 1;
      $("td." + x).addClass("selectedbox");
      $("td." + y).addClass("selectedbox");
      $("td." + z).addClass("selectedbox");
    }
  }
  console.log(s);
  $("h5").text(s);
}

// var p=1;
// console.log($("td."+p).text());
