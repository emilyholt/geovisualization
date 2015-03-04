var iselle;

	var iselleCoordinates = [
		new google.maps.LatLng(12.40, -121.90),
    new google.maps.LatLng(13.00, -123.50),
    new google.maps.LatLng(13.40, -124.20),
    new google.maps.LatLng(13.90, -125.30),
    new google.maps.LatLng(14.30, -126.00),
    new google.maps.LatLng(14.70, -127.30),
    new google.maps.LatLng(14.80, -128.40),
    new google.maps.LatLng(15.00, -129.20),
    new google.maps.LatLng(15.10, -130.10),
   new google.maps.LatLng(15.20, -131.00),
   new google.maps.LatLng(15.30, -131.80),
   new google.maps.LatLng(15.50, -132.80),
   new google.maps.LatLng(15.70, -133.70),
   new google.maps.LatLng(15.90, -134.80),
   new google.maps.LatLng(16.00, -135.20),
   new google.maps.LatLng(16.00, -135.60),
   new google.maps.LatLng(16.20, -136.50),
   new google.maps.LatLng(16.10, -137.40),
   new google.maps.LatLng(16.00, -138.00),
   new google.maps.LatLng(15.90, -138.60),
   new google.maps.LatLng(16.00, -139.50),
   new google.maps.LatLng(16.40, -140.50),
   new google.maps.LatLng(16.80, -141.60),
   new google.maps.LatLng(16.90, -142.80),
   new google.maps.LatLng(17.00, -144.50),
   new google.maps.LatLng(16.90, -144.90),
   new google.maps.LatLng(17.20, -145.90),
   new google.maps.LatLng(17.70, -147.50),
   new google.maps.LatLng(18.10, -149.10),
   new google.maps.LatLng(18.50, -150.60),
   new google.maps.LatLng(18.90, -152.20),
   new google.maps.LatLng(19.10, -153.80),
   new google.maps.LatLng(18.90, -154.40),
   new google.maps.LatLng(19.20, -155.40),
   new google.maps.LatLng(19.40, -157.30),
   new google.maps.LatLng(19.80, -158.90),
   new google.maps.LatLng(20.20, -160.20)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var iselleSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateIselleCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = iselle.get('icons');
      icons[0].offset = (count / 2) + '%';
      iselle.set('icons', icons);
  }, 20);
}