var map;

function initialize() {
	var mapOptions = {
    	center: new google.maps.LatLng(27, -70),
    	zoom: 3,
      mapTypeControl: false,
      streetViewControl: false,
    	//use satelite imagery
    	mapTypeId: google.maps.MapTypeId.HYBRID
  	};

  	map = new google.maps.Map(document.getElementById('map-canvas'),
      	mapOptions);
  	
    // Create the legend and display on the map
    var legend = document.createElement('div');
    legend.id = 'legend';
    var content = [];
    content.push('<h3>Hurricane Paths*</h3>');
    content.push('<p><div class="color white"></div>2014</p>');
    content.push('<p><div class="color turquiose"></div>2013</p>');
    content.push('<p><div class="color purple"></div>2012</p>');
    legend.innerHTML = content.join('');
    legend.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);

  	
//STORM ARTHUR
	arthur = new google.maps.Polyline({
		path: arthurCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.8,
    	icons: [{
      		icon: arthurSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateArthurCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM TWO
	two = new google.maps.Polyline({
		path: twoCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.8,
    	icons: [{
      		icon: twoSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateTwoCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM BERTHA

	

	// Create the polysean and add the symbol to it via the 'icons' property.
	bertha = new google.maps.Polyline({
		path: berthaCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.8,
    	icons: [{
      		icon: berthaSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateBerthaCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM CRISTOBAL

	// Create the polysean and add the symbol to it via the 'icons' property.
	cristobal = new google.maps.Polyline({
		path: cristobalCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.8,
    	icons: [{
      		icon: cristobalSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateCristobalCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM DOLLY

	

	// Create the polysean and add the symbol to it via the 'icons' property.
	dolly = new google.maps.Polyline({
		path: dollyCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.8,
    	icons: [{
      		icon: dollySymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateDollyCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM EDOUARD

	// Create the polysean and add the symbol to it via the 'icons' property.
	edouard = new google.maps.Polyline({
		path: edouardCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.8,
    	icons: [{
      		icon: edouardSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateEdouardCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM FAY

	

	// Create the polysean and add the symbol to it via the 'icons' property.
	fay = new google.maps.Polyline({
		path: fayCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.8,
    	icons: [{
      		icon: faySymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateFayCircle();	

//-----------------------------------------------------------------------------------
	//TROPICAL STORM GONZALO
	// Create the polysean and add the symbol to it via the 'icons' property.
	gonzalo = new google.maps.Polyline({
		path: gonzaloCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.8,
    	icons: [{
      		icon: gonzaloSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateGonzaloCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM HANNA
	hanna = new google.maps.Polyline({
		path: hannaCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.8,
    	icons: [{
      		icon: hannaSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateHannaCircle();

//-----------------------------------------------------------------------------------
//-----------------------2013--------------------------------------------------------
//-----------------------------------------------------------------------------------
//TROPICAL STORM ANDREA
  andrea = new google.maps.Polyline({
    path: andreaCoordinates,
    strokeColor: '#fd00ff',
    strokeOpacity: 0.5,
      icons: [{
          icon: andreaSymbol,
          offset: '100%'
      }],
      map: map
    });

  andrea.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM BARRY
  barry = new google.maps.Polyline({
    path: barryCoordinates,
    strokeColor: '#fd00ff',
    strokeOpacity: 0.5,
      icons: [{
          icon: barrySymbol,
          offset: '100%'
      }],
      map: map
    });

  barry.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM CHANTAL
  chantal = new google.maps.Polyline({
    path: chantalCoordinates,
    strokeColor: '#fd00ff',
    strokeOpacity: 0.5,
      icons: [{
          icon: chantalSymbol,
          offset: '100%'
      }],
      map: map
    });

  chantal.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM DORIAN
  dorian = new google.maps.Polyline({
    path: dorianCoordinates,
    strokeColor: '#fd00ff',
    strokeOpacity: 0.5,
      icons: [{
          icon: dorianSymbol,
          offset: '100%'
      }],
      map: map
    });

  dorian.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM ERIN
  erin = new google.maps.Polyline({
    path: erinCoordinates,
    strokeColor: '#fd00ff',
    strokeOpacity: 0.5,
      icons: [{
          icon: erinSymbol,
          offset: '100%'
      }],
      map: map
    });

  erin.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM FERNAND
  fernand = new google.maps.Polyline({
    path: fernandCoordinates,
    strokeColor: '#fd00ff',
    strokeOpacity: 0.5,
      icons: [{
          icon: fernandSymbol,
          offset: '100%'
      }],
      map: map
    });

  fernand.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM GABRIELLE
  gabrielle = new google.maps.Polyline({
    path: gabrielleCoordinates,
    strokeColor: '#fd00ff',
    strokeOpacity: 0.5,
      icons: [{
          icon: gabrielleSymbol,
          offset: '100%'
      }],
      map: map
    });

  gabrielle.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM HUMBERTO
  humberto = new google.maps.Polyline({
    path: humbertoCoordinates,
    strokeColor: '#fd00ff',
    strokeOpacity: 0.5,
      icons: [{
          icon: humbertoSymbol,
          offset: '100%'
      }],
      map: map
    });

  humberto.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM INGRID
  ingrid = new google.maps.Polyline({
    path: ingridCoordinates,
    strokeColor: '#fd00ff',
    strokeOpacity: 0.5,
      icons: [{
          icon: ingridSymbol,
          offset: '100%'
      }],
      map: map
    });

  ingrid.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM JERRY
  jerry = new google.maps.Polyline({
    path: jerryCoordinates,
    strokeColor: '#fd00ff',
    strokeOpacity: 0.5,
      icons: [{
          icon: jerrySymbol,
          offset: '100%'
      }],
      map: map
    });

  jerry.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM KAREN
  karen = new google.maps.Polyline({
    path: karenCoordinates,
    strokeColor: '#fd00ff',
    strokeOpacity: 0.5,
      icons: [{
          icon: karenSymbol,
          offset: '100%'
      }],
      map: map
    });

  karen.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM LORENZO
  lorenzo = new google.maps.Polyline({
    path: lorenzoCoordinates,
    strokeColor: '#fd00ff',
    strokeOpacity: 0.5,
      icons: [{
          icon: lorenzoSymbol,
          offset: '100%'
      }],
      map: map
    });

  lorenzo.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM MELISSA
  melissa = new google.maps.Polyline({
    path: melissaCoordinates,
    strokeColor: '#fd00ff',
    strokeOpacity: 0.5,
      icons: [{
          icon: melissaSymbol,
          offset: '100%'
      }],
      map: map
    });

  melissa.setMap(null);

//-----------------------------------------------------------------------------------
//------------2012-------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//TROPICAL STORM ALBERTO
  alberto = new google.maps.Polyline({
    path: albertoCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: albertoSymbol,
          offset: '100%'
      }],
      map: map
    });

  alberto.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM BERYL
  beryl = new google.maps.Polyline({
    path: berylCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: berylSymbol,
          offset: '100%'
      }],
      map: map
    });

  beryl.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM CHRIS
  chris = new google.maps.Polyline({
    path: chrisCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: chrisSymbol,
          offset: '100%'
      }],
      map: map
    });

  chris.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM DEBBY
  debby = new google.maps.Polyline({
    path: debbyCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: debbySymbol,
          offset: '100%'
      }],
      map: map
    });

  debby.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM ERNESTO
  ernesto = new google.maps.Polyline({
    path: ernestoCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: ernestoSymbol,
          offset: '100%'
      }],
      map: map
    });

  ernesto.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM FLORENCE
  florence = new google.maps.Polyline({
    path: florenceCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: florenceSymbol,
          offset: '100%'
      }],
      map: map
    });

  florence.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM GORDON
  gordon = new google.maps.Polyline({
    path: gordonCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: gordonSymbol,
          offset: '100%'
      }],
      map: map
    });

  gordon.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM HELENE
  helene = new google.maps.Polyline({
    path: heleneCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: heleneSymbol,
          offset: '100%'
      }],
      map: map
    });

  helene.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM ISAAC
  isaac = new google.maps.Polyline({
    path: isaacCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: isaacSymbol,
          offset: '100%'
      }],
      map: map
    });

  isaac.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM JOYCE
  joyce = new google.maps.Polyline({
    path: joyceCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity:0.5,
      icons: [{
          icon: joyceSymbol,
          offset: '100%'
      }],
      map: map
    });

  joyce.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM JOYCE
  kirk = new google.maps.Polyline({
    path: kirkCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: kirkSymbol,
          offset: '100%'
      }],
      map: map
    });

  kirk.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM LESLIE
  leslie = new google.maps.Polyline({
    path: leslieCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: leslieSymbol,
          offset: '100%'
      }],
      map: map
    });

  leslie.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM MICHAEL
  michael = new google.maps.Polyline({
    path: michaelCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: michaelSymbol,
          offset: '100%'
      }],
      map: map
    });

  michael.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM NADINE
  nadine = new google.maps.Polyline({
    path: nadineCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: nadineSymbol,
          offset: '100%'
      }],
      map: map
    });

  nadine.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM OSCAR
  oscar = new google.maps.Polyline({
    path: oscarCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: oscarSymbol,
          offset: '100%'
      }],
      map: map
    });

  oscar.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM PATTY
  patty = new google.maps.Polyline({
    path: pattyCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: pattySymbol,
          offset: '100%'
      }],
      map: map
    });

  patty.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM RAFAEL
  rafael = new google.maps.Polyline({
    path: rafaelCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: rafaelSymbol,
          offset: '100%'
      }],
      map: map
    });

  rafael.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM SANDY
  sandy = new google.maps.Polyline({
    path: sandyCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: sandySymbol,
          offset: '100%'
      }],
      map: map
    });

  sandy.setMap(null);

//-----------------------------------------------------------------------------------
//TROPICAL STORM TONY
  tony = new google.maps.Polyline({
    path: tonyCoordinates,
    strokeColor: '#00fff9',
    strokeOpacity: 0.5,
      icons: [{
          icon: tonySymbol,
          offset: '100%'
      }],
      map: map
    });

  tony.setMap(null);


  layers = new google.maps.KmlLayer('http://kml.wxtiles.com/wxtiles.sst.kml', 
  {preserveViewport: true, suppressInfoWindows: false});
  layers.setMap(null);

}

function toggleLayer() {
  if (layers.getMap() === null) {
    layers.setMap(map);
  }
  else {
    layers.setMap(null);
  }
}

function toggle2012On() {
  alberto.setMap(map);
  animateAlbertoCircle();

  beryl.setMap(map);
  animateBerylCircle();

  chris.setMap(map);
  animateChrisCircle();

  debby.setMap(map);
  animateDebbyCircle();

  ernesto.setMap(map);
  animateErnestoCircle();

  florence.setMap(map);
  animateFlorenceCircle();

  gordon.setMap(map);
  animateGordonCircle();

  helene.setMap(map);
  animateHeleneCircle();

  isaac.setMap(map);
  animateIsaacCircle();

  joyce.setMap(map);
  animateJoyceCircle();

  kirk.setMap(map);
  animateKirkCircle();

  leslie.setMap(map);
  animateLeslieCircle();

  michael.setMap(map);
  animateMichaelCircle();

  nadine.setMap(map);
  animateNadineCircle();

  oscar.setMap(map);
  animateOscarCircle();

  patty.setMap(map);
  animatePattyCircle();

  rafael.setMap(map);
  animateRafaelCircle();

  sandy.setMap(map);
  animateSandyCircle();

  tony.setMap(map);
  animateTonyCircle();
}

function toggle2012Off() {
  alberto.setMap(null);
  beryl.setMap(null);
  chris.setMap(null);
  debby.setMap(null);
  ernesto.setMap(null);
  florence.setMap(null);
  gordon.setMap(null);
  helene.setMap(null);
  isaac.setMap(null);
  joyce.setMap(null);
  kirk.setMap(null);
  leslie.setMap(null);
  michael.setMap(null);
  nadine.setMap(null);
  oscar.setMap(null);
  patty.setMap(null);
  rafael.setMap(null);
  sandy.setMap(null);
  tony.setMap(null);
}

function toggle2013On() {
  andrea.setMap(map);
  animateAndreaCircle();

  barry.setMap(map);
  animateBarryCircle();

  chantal.setMap(map);
  animateChantalCircle();

  dorian.setMap(map);
  animateDorianCircle();

  erin.setMap(map);
  animateErinCircle();

  fernand.setMap(map);
  animateFernandCircle();

  gabrielle.setMap(map);
  animateGabrielleCircle();

  humberto.setMap(map);
  animateHumbertoCircle();

  ingrid.setMap(map);
  animateIngridCircle();

  jerry.setMap(map);
  animateJerryCircle();

  karen.setMap(map);
  animateKarenCircle();

  lorenzo.setMap(map);
  animateLorenzoCircle();

  melissa.setMap(map);
  animateMelissaCircle();
}

function toggle2013Off() {
  andrea.setMap(null);
  barry.setMap(null);
  chantal.setMap(null);
  dorian.setMap(null);
  erin.setMap(null);
  fernand.setMap(null);
  gabrielle.setMap(null);
  humberto.setMap(null);
  ingrid.setMap(null);
  jerry.setMap(null);
  karen.setMap(null);
  lorenzo.setMap(null);
  melissa.setMap(null);
}

function toggle2014On() {
  arthur.setMap(map);
  animateArthurCircle();

  bertha.setMap(map);
  animateBerthaCircle();

  cristobal.setMap(map);
  animateCristobalCircle();

  dolly.setMap(map);
  animateDollyCircle();

  edouard.setMap(map);
  animateEdouardCircle();

  fay.setMap(map);
  animateFayCircle();

  gonzalo.setMap(map);
  animateGonzaloCircle();

  hanna.setMap(map);
  animateHannaCircle();

  two.setMap(map);
  animateTwoCircle();
}

function toggle2014Off() {
  arthur.setMap(null);
  bertha.setMap(null);
  cristobal.setMap(null);
  dolly.setMap(null);
  edouard.setMap(null);
  fay.setMap(null);
  gonzalo.setMap(null);
  hanna.setMap(null);
  two.setMap(null);
}




google.maps.event.addDomListener(window, 'load', initialize);