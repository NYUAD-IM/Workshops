//alert("Hello everyone!");

var storedData;


function getWeatherData(){
	//console.log("Getting the weather data");
	//Weather logic goes in here
	var theInput = document.getElementById("the-input");
	var theTextInput = theInput.value;
	console.log(theTextInput);


	var theURL = "http://api.openweathermap.org/data/2.5/weather?q=" + theTextInput + "&appid=c960511231496eb24d69a6ccdf5afc39&units=imperial";
	console.log(theURL);

	$.getJSON(theURL, function(data){
		console.log(data);
		var theTemp = data.main.temp;
		console.log(theTemp);
		var tempDiv = document.getElementById("the-temp");
		tempDiv.innerHTML = theTemp;
	});
}

var theButton = document.getElementById("the-button");
theButton.addEventListener('click', getWeatherData);


// function gotData(theData){
// 	console.log(theData);
// 	storedData = theData;
// 	//check the cities...

// }


// document.addEventListener('DOMContentLoaded', function() {
// 	var URL = "YOURSPREADSHEETSKEYHERE";
// 	Tabletop.init( { key: URL, callback: gotData, simpleSheet: true } );
// });

