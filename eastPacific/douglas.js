var douglas;

	var douglasCoordinates = [
		new google.maps.LatLng(14.50, -105.80),
    new google.maps.LatLng(14.60, -107.40),
    new google.maps.LatLng(15.30, -108.80),
    new google.maps.LatLng(16.40, -110.30),
    new google.maps.LatLng(16.50, -111.90),
    new google.maps.LatLng(16.20, -112.60),
    new google.maps.LatLng(16.40, -112.80),
    new google.maps.LatLng(17.20, -113.70),
    new google.maps.LatLng(17.50, -114.20),
   new google.maps.LatLng(18.90, -115.50),
   new google.maps.LatLng(19.10, -115.90),
   new google.maps.LatLng(19.30, -115.70),
   new google.maps.LatLng(19.60, -116.00),
   new google.maps.LatLng(19.60, -116.00),
   new google.maps.LatLng(19.90, -116.10),
   new google.maps.LatLng(20.10, -116.20),
   new google.maps.LatLng(20.30, -116.40),
   new google.maps.LatLng(20.50, -116.50),
   new google.maps.LatLng(20.40, -116.60),
   new google.maps.LatLng(20.70, -116.90),
   new google.maps.LatLng(21.10, -117.30),
   new google.maps.LatLng(21.40, -117.80),
   new google.maps.LatLng(21.60, -118.30),
   new google.maps.LatLng(22.20, -118.80),
   new google.maps.LatLng(22.80, -119.30),
   new google.maps.LatLng(23.40, -119.80)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var douglasSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateDouglasCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = douglas.get('icons');
      icons[0].offset = (count / 2) + '%';
      douglas.set('icons', icons);
  }, 20);
}