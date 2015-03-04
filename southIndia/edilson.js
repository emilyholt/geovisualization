var edilson;

var edilsonCoordinates = [
	new google.maps.LatLng(-17.10,   59.50), 
	new google.maps.LatLng(-18.50,   60.10), 
	new google.maps.LatLng(-20.00,   60.00), 
	new google.maps.LatLng(-22.70,   57.90),
	new google.maps.LatLng(-26.20,   55.80), 
	new google.maps.LatLng(-28.90,   54.20) 
];

// Define the symbol, using one of the predefined paths ('CIRCLE')
// supplied by the Google Maps JavaScript API.
var edilsonSymbol = {
	path: google.maps.SymbolPath.CIRCLE,
	scale: 8,
	strokeColor: '#d6d6d6'
};



function animateEdilsonCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = edilson.get('icons');
      icons[0].offset = (count / 2) + '%';
      edilson.set('icons', icons);
  }, 20);
}
