function toggle_overlay(myRadioButton) {

	var textString;	// Local variable for map caption text		
	var showYear;	// Local variable for year to show
	
	showYear = myRadioButton.value;	// Look at radio button

	// First, remove the existing KML layer
	kml_map.setMap();


	// Next, determine which year is being shown
	if (showYear == "2010") {

		kml_path = 
"https://sites.google.com/site/geog54files/home/kmz_files/map_2010.kmz";

		textString = "<p>Demographic map of Los Angeles in 2010</p>";

	} else if (showYear == "1970") {

		kml_path = 
"https://sites.google.com/site/geog54files/home/kmz_files/map_1970.kmz";

	textString = "<p>Demographic map of Los Angeles in 1970</p>";

	} // End of if ... else


	// Now, create the new layer and add it to the map

	kml_map = new google.maps.KmlLayer({
    	url: kml_path,
		preserveViewport: true });

	kml_map.setMap(map);
	
	// Finally, set the map caption

	document.getElementById('my-text').innerHTML = textString;

} // End of function toggle_overlay()