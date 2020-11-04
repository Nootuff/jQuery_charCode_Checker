$("input").keypress(function (event) {
  var demo = $("#demo")[0];
  var x = event.key;
  var t = (x == " ") ? "Space" : x;
  var y = event.which;
  var z = event.code;
  $("#demo").css("opacity", "1");
  demo.innerHTML = "<span style='font-weight:bold; color:blue; '>Key</span> = " + t + "<br>" + " <span style='font-weight:bold; color:blue; '>charCode</span> = " + y + "<br>" + " <span style='font-weight:bold; color:blue; '>event.code</span> = " + z;
});


$("input").click(function () {
  for (i = 0; i < 2; i++) {
    $("h2")
      .animate({ marginTop: "-=" + "8px" }, 80)
      .animate({ marginTop: "+=" + "8px" }, 80);
  }
});
