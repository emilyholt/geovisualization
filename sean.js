//TROPICAL STORM SEAN 2011
    var sean;

  	var seanCoordinates = [
	    new google.maps.LatLng(27.20, -69.40),
	    new google.maps.LatLng(27.70, -69.40),
	    new google.maps.LatLng(27.80, -69.80),
	    new google.maps.LatLng(27.90, -70.10),
	    new google.maps.LatLng(27.90, -70.40),
	    new google.maps.LatLng(27.90, -70.50),
	    new google.maps.LatLng(28.70, -70.50),
	    new google.maps.LatLng(29.50, -70.70),
	    new google.maps.LatLng(30.20, -70.90),
	    new google.maps.LatLng(30.40, -70.50),
	    new google.maps.LatLng(30.90, -69.40), 
	    new google.maps.LatLng(31.50, -68.20),
	    new google.maps.LatLng(32.90, -66.30),
	    new google.maps.LatLng(34.00, -64.10),
	    new google.maps.LatLng(35.50, -61.30)
  	];

  	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var seanSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#333599'
  	};

  	// Create the polysean and add the symbol to it via the 'icons' property.
  	sean = new google.maps.Polyline({
    	path: seanCoordinates,
    	icons: [{
      	icon: seanSymbol,
      	offset: '100%'
    	}],
    	map: map
  	});


function animateSeanCircle() {
  var count = 0;
  window.setInterval(function() {
    count = (count + 1) % 200;

    var icons = sean.get('icons');
    icons[0].offset = (count / 2) + '%';
    sean.set('icons', icons);
  }, 20);
}

