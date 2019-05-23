// Create a map object
var myMap = L.map("map", {
    center: [39.8283, -98.5795], 
    zoom: 5
  });

// Create a base layer with Mapbox API
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Create a overlay layer using Air Quality Index API
L.tileLayer("https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=_TOKEN_ID_", {
    attribution: 'Air Quality Tiles &copy; <a href="http://waqi.info">waqi.info</a>',
    token: TOKEN
}).addTo(myMap);

