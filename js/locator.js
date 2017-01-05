function initMap() {
  var heartIsland = {lat: 43.978675, lng: 15.381191};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16;
    center: heartIsland
  });
}

<script async defer
src="https://maps.googleapis.com/maps/api/js?key=PUTKEYHERE&callback=initMap">
</script>
