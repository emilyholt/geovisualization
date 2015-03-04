var norbert;

	var norbertCoordinates = [
		new google.maps.LatLng(16.90, -106.80), 
    new google.maps.LatLng(18.10, -106.40),  
    new google.maps.LatLng(18.90, -106.70),   
    new google.maps.LatLng(19.40, -107.30),     
    new google.maps.LatLng(19.50, -108.40),   
    new google.maps.LatLng(19.40, -109.00),  
    new google.maps.LatLng(19.90, -109.80),  
    new google.maps.LatLng(20.50, -109.70),  
    new google.maps.LatLng(20.70, -110.40),  
    new google.maps.LatLng(21.20, -110.80),  
    new google.maps.LatLng(22.00, -111.10),  
    new google.maps.LatLng(22.50, -111.40),  
    new google.maps.LatLng(23.20, -112.10),  
    new google.maps.LatLng(23.60, -112.20),  
    new google.maps.LatLng(24.20, -112.80),  
    new google.maps.LatLng(24.60, -113.40),  
    new google.maps.LatLng(25.00, -114.10),  
    new google.maps.LatLng(25.30, -114.80),  
    new google.maps.LatLng(25.50, -115.50),  
    new google.maps.LatLng(25.70, -116.40),  
    new google.maps.LatLng(25.90, -116.70),      
    new google.maps.LatLng(26.30, -117.30),       
    new google.maps.LatLng(26.80, -117.70),  
    new google.maps.LatLng(27.20, -118.10)  
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var norbertSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateNorbertCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = norbert.get('icons');
      icons[0].offset = (count / 2) + '%';
      norbert.set('icons', icons);
  }, 20);
}