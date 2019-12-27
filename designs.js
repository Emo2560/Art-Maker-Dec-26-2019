// Select color input
// Select size input

$('#sizePicker').submit(function makeGrid(grid) {
  $("table tr").remove()
  var cols = $("#inputWidth").val();
  var rows = $("#inputHeight").val();
    for (var i = 0; i <= rows; i++) {
      $("table").append("<tr></tr");
      for (var j = 0; j <= cols; j++) {
        $("tr:last").append("<td></td");
        $("td").attr("class", "cells");
      }
    }
    grid.preventDefault();
    $(".cells").click(function(event) {
      var paint = $('#colorPicker').val();
      $(event.target).css("background-color" , paint);
    });

  });
