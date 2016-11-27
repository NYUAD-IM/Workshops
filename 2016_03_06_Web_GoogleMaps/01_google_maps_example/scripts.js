//Init global vars
var map;
var markers = [];

var startLat = 24.523426;
var startLng = 54.434617;

function initMap() {
	// Create a map object and specify the DOM element for display.
	map = new google.maps.Map(document.getElementById('map'),
	{
		center: { lat: startLat, lng: startLng},
		scrollwheel: false,
		zoom: 13
	});

	map.addListener('click', function(e) {
		console.log(e);
		var curLatLng = {};
		curLatLng.lat = e.latLng.lat();
		curLatLng.lng = e.latLng.lng();

		var imgURL = prompt('Please enter an image url or click "OK" for default image') || 'fun.jpg';

		// Create a marker and set its position.
		var marker = new google.maps.Marker({
			map: map,
			position: curLatLng,
			title: 'A Marker!'
		});

		var contentString = '<img src="' + imgURL + '">';
		marker.imgURL = imgURL;
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		marker.addListener('click', function() {
			infowindow.open(map, marker);
		});

		markers.push(marker);
	});
}

window.onload = initMap;

var doneButton = document.getElementById('doneButton');
var markerList = document.getElementById('markerList');

doneButton.onclick = function(){
	var htmlString = '';
	for (var i = 0; i < markers.length; i++){
		htmlString += "{" + JSON.stringify(markers[i].position) + ", imgURL: " + JSON.stringify(markers[i].imgURL) + "},<br>";
	}
	markerList.innerHTML = htmlString;
};

var clearButton = document.getElementById('clearButton');
clearButton.onclick = function(){
	markerList.innerHTML = '';
  for (var i = 0; i < markers.length; i++) {
		console.log(markers[i]);
    markers[i].setMap(null);
  }
	markers = [];
};