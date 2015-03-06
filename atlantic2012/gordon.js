var gordon;

//TROPICAL STORM GORDON
  	var gordonCoordinates = [
	  	new google.maps.LatLng(29.90, -55.10),
      new google.maps.LatLng(31.30, -55.50),
      new google.maps.LatLng(32.20, -54.80),
      new google.maps.LatLng(33.30, -53.80),
      new google.maps.LatLng(34.20, -52.10),
      new google.maps.LatLng(34.60, -50.30),
      new google.maps.LatLng(34.60, -48.10),
      new google.maps.LatLng(34.50, -46.30),
      new google.maps.LatLng(34.30, -44.00),
      new google.maps.LatLng(34.20, -42.10),
      new google.maps.LatLng(34.00, -40.70),
      new google.maps.LatLng(34.10, -38.60),
      new google.maps.LatLng(34.10, -36.40),
      new google.maps.LatLng(34.50, -33.90),
      new google.maps.LatLng(34.90, -31.60),
      new google.maps.LatLng(35.50, -29.70),
      new google.maps.LatLng(36.10, -27.50),
      new google.maps.LatLng(36.70, -25.80),
      new google.maps.LatLng(37.40, -24.30),
      new google.maps.LatLng(38.30, -22.30),
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var gordonSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#00fff9'
  	};

  	function animateGordonCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = gordon.get('icons');
      icons[0].offset = (count / 2) + '%';
      gordon.set('icons', icons);
  }, 20);
}