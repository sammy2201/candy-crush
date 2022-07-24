$("button").on("click", function() {
  firstSelected = $(".selected:eq(0)");
  secondSelected = $(".selected:eq(1)");
  var tempText = firstSelected.text();
  firstSelected.text(secondSelected.text());
  secondSelected.text(tempText);
  $("td").removeClass("selected");
  $("td").removeClass("selectedbox");
  Score();
});

$("td").on("click", function(e) {
  $(this).toggleClass("selected");
});

function Score() {
  var s = 0;
  for (var x = 1; x < 79; x++) {
    var y = x + 1;
    var z = y + 1;
    var a = $("td." + x).text();
    var b = $("td." + y).text();
    var c = $("td." + z).text();
    if (a == b && a == c && x % 10 != 0 && y % 10 != 0) {
      s = s + 1;
      if (x > 10) {
        $("td." + x).addClass("selectedbox");
        $("td." + y).addClass("selectedbox");
        $("td." + z).addClass("selectedbox");

        for (i = x; i > 0; i = i - 10) {
          j = i - 10;
          var ne = $("td." + j).text();
          $("td." + i).text(ne);
        }
        for (i = y; i > 0; i = i - 10) {
          j = i - 10;
          var ne = $("td." + j).text();
          $("td." + i).text(ne);
        }
        for (i = z; i > 0; i = i - 10) {
          j = i - 10;
          var ne = $("td." + j).text();
          $("td." + i).text(ne);
        }
      }
    }
  }
  $("h4.score").text(s);
}
