var genevieve;

	var genevieveCoordinates = [
		new google.maps.LatLng(12.20, -134.00),
    new google.maps.LatLng(12.30, -135.00),
    new google.maps.LatLng(12.20, -135.80),
    new google.maps.LatLng(12.10, -135.90),
    new google.maps.LatLng(12.10, -136.40),
    new google.maps.LatLng(12.20, -136.80),
    new google.maps.LatLng(12.40, -137.50),
    new google.maps.LatLng(12.50, -138.80),
    new google.maps.LatLng(12.40, -139.70),
   new google.maps.LatLng(12.40, -140.60),
   new google.maps.LatLng(12.40, -142.20),
   new google.maps.LatLng(12.60, -143.50),
   new google.maps.LatLng(12.90, -148.00),
   new google.maps.LatLng(12.90, -148.30),
   new google.maps.LatLng(12.90, -148.70),
   new google.maps.LatLng(12.90, -149.30),
   new google.maps.LatLng(12.80, -149.90),
   new google.maps.LatLng(12.80, -149.90),
   new google.maps.LatLng(13.00, -149.80),
   new google.maps.LatLng(13.00, -150.20),
   new google.maps.LatLng(13.00, -150.80),
   new google.maps.LatLng(12.10, -155.10),
   new google.maps.LatLng(10.80, -157.10),
   new google.maps.LatLng(10.00, -158.10),
   new google.maps.LatLng(9.90, -158.90),
   new google.maps.LatLng(9.60, -159.50),
   new google.maps.LatLng(9.30, -160.40),
   new google.maps.LatLng(9.00, -162.00),
   new google.maps.LatLng(9.20, -163.50),
   new google.maps.LatLng(9.80, -164.80),
   new google.maps.LatLng(9.80, -166.50),
   new google.maps.LatLng(10.30, -168.10),
   new google.maps.LatLng(10.50, -169.30),
   new google.maps.LatLng(10.90, -170.50),
   new google.maps.LatLng(11.20, -172.40),
   new google.maps.LatLng(11.40, -173.60),
   new google.maps.LatLng(11.90, -174.60),
   new google.maps.LatLng(12.80, -176.80),
   new google.maps.LatLng(13.50, -178.40),
   new google.maps.LatLng(14.10, -179.70),
   new google.maps.LatLng(14.50,  179.80),
   new google.maps.LatLng(15.20,  178.60),
   new google.maps.LatLng(15.70,  177.50),
   new google.maps.LatLng(16.20,  176.70),
   new google.maps.LatLng(16.80,  176.00),
   new google.maps.LatLng(16.80,  176.00),
   new google.maps.LatLng(17.70,  175.90),
   new google.maps.LatLng(18.50,  176.00),
   new google.maps.LatLng(19.50,  176.40),
   new google.maps.LatLng(21.30,  176.80),
   new google.maps.LatLng(23.00,  177.10),
   new google.maps.LatLng(24.60,  177.00),
   new google.maps.LatLng(26.60,  176.20),
   new google.maps.LatLng(28.50,  175.00),
   new google.maps.LatLng(30.50,  173.70),
   new google.maps.LatLng(31.70,  171.80),
   new google.maps.LatLng(32.80,  170.40),
   new google.maps.LatLng(33.80,  169.10),
   new google.maps.LatLng(34.30,  168.30),
   new google.maps.LatLng(34.90,  167.60)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var genevieveSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateGenevieveCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = genevieve.get('icons');
      icons[0].offset = (count / 2) + '%';
      genevieve.set('icons', icons);
  }, 20);
}