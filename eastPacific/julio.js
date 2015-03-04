var julio;

	var julioCoordinates = [
		new google.maps.LatLng(13.50, -116.90),
    new google.maps.LatLng(13.50, -117.70),
    new google.maps.LatLng(13.50, -118.80),
    new google.maps.LatLng(13.50, -120.70),
    new google.maps.LatLng(13.50, -122.10),
    new google.maps.LatLng(13.50, -123.00),
    new google.maps.LatLng(13.80, -124.00),
    new google.maps.LatLng(14.00, -125.20),
    new google.maps.LatLng(14.20, -126.80),
   new google.maps.LatLng(14.80, -129.00),
   new google.maps.LatLng(15.20, -130.50),
   new google.maps.LatLng(15.80, -131.80),
   new google.maps.LatLng(16.40, -133.20),
   new google.maps.LatLng(16.80, -134.90),
   new google.maps.LatLng(16.90, -136.50),
   new google.maps.LatLng(17.10, -137.70),
   new google.maps.LatLng(17.40, -139.10),
   new google.maps.LatLng(17.80, -140.40),
   new google.maps.LatLng(18.20, -141.90),
   new google.maps.LatLng(18.50, -143.40),
   new google.maps.LatLng(18.90, -144.70),
   new google.maps.LatLng(19.50, -146.00),
   new google.maps.LatLng(20.10, -147.40),
   new google.maps.LatLng(20.90, -148.70),
   new google.maps.LatLng(21.90, -150.00),
   new google.maps.LatLng(22.80, -151.30),
   new google.maps.LatLng(23.80, -152.50),
   new google.maps.LatLng(24.60, -152.90),
   new google.maps.LatLng(25.50, -153.50),
   new google.maps.LatLng(25.90, -154.20),
   new google.maps.LatLng(26.50, -154.90),
   new google.maps.LatLng(27.60, -155.80),
   new google.maps.LatLng(27.40, -156.00),
   new google.maps.LatLng(27.90, -156.60),
   new google.maps.LatLng(28.40, -156.90),
   new google.maps.LatLng(28.60, -157.30),
   new google.maps.LatLng(29.40, -158.00),
   new google.maps.LatLng(30.00, -158.40),
   new google.maps.LatLng(30.30, -159.20),
   new google.maps.LatLng(30.80, -159.30),
   new google.maps.LatLng(30.90, -159.10),
   new google.maps.LatLng(31.00, -159.00),
   new google.maps.LatLng(31.40, -158.60),
   new google.maps.LatLng(31.50, -158.00),
   new google.maps.LatLng(31.90, -157.70),
   new google.maps.LatLng(32.20, -157.30),
   new google.maps.LatLng(32.30, -157.50)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var julioSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateJulioCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = julio.get('icons');
      icons[0].offset = (count / 2) + '%';
      julio.set('icons', icons);
  }, 20);
}