$(document).ready(function() {



  $("#location_submit").submit(function(event) {
    event.preventDefault()
    location_input = $("#location_input").val();
    $("location_input").val("");


  });


});
