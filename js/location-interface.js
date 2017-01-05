var apiKey = require('./../.env').apiKey

$( document ).ready(function() {

  function initMap() {
    $.ajax({
      url: 'https://maps.googleapis.com/maps/api/js?key=' + apiKey,
      dataType: "script"
    }).done(function() {
      var heartIsland = {lat: 43.978675, lng: 15.381191};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: heartIsland,
        mapTypeId : google.maps.MapTypeId.SATELLITE
      });
    });
  }

initMap();

  $('#locateUser').click(locateUser);
});

function locateUser() {
  if (navigator.geolocation){
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 10 * 1000
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
  }
  else {
    alert("Your browser doesn't support the Geolocation API");
  }
}

function geolocationSuccess(position) {
  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var userLocationOptions = {
    zoom : 16,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };

  var mapObject = new google.maps.Map(document.getElementById("map"), userLocationOptions);

  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });
}

function geolocationError(positionError) {
  alert(positionError);
}
