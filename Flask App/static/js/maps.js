// Map for Everyday Smokers
var everydaySmokerMap = L.map("everyday", {
  center: [39.8283, -98.5795], 
  zoom: 3
});

// Map for Someday Smokers
var somedaySmokerMap = L.map("someday", {
  center: [39.8283, -98.5795], 
  zoom: 3
});

// Map for Former Smokers
var formerSmokerMap = L.map("former", {
  center: [39.8283, -98.5795], 
  zoom: 3
});

// Map for Non-Smokers
var neverSmokedMap = L.map("never", {
  center: [39.8283, -98.5795], 
  zoom: 3
});

// Create base tile layers using Mapbox API
var everydayBaseMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var somedayBaseMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var formerBaseMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var neverBaseMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

// Add each base layer to its respective map objects
everydayBaseMap.addTo(everydaySmokerMap);
somedayBaseMap.addTo(somedaySmokerMap);
formerBaseMap.addTo(formerSmokerMap);
neverBaseMap.addTo(neverSmokedMap);

// Create a choropleth layer for everyday smokers
var smokesEveryday = L.choropleth(data, {

  // Define what  property in the features to use
  valueProperty: "EVERYDAY",

  // Set color scale
  scale: ["#ffffb2", "#b10026"],

  // Number of breaks in step range
  steps: 7,

  // q for quartile, e for equidistant, k for k-means
  mode: "q",
  style: {
    // Border color
    color: "#fff",
    weight: 1,
    fillOpacity: 0.8
  },

  // Binding a pop-up to each layer
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<h5>" + feature.properties.NAME + ": " + feature.properties.EVERYDAY + "%</h5>");
  }
}).addTo(everydaySmokerMap);

// Add legend to the everyday smokers map
var everydayLegend = L.control({ position: 'bottomleft' })
everydayLegend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend')
  var limits = smokesEveryday.options.limits
  var colors = smokesEveryday.options.colors
  var labels = []

  // Add min & max
  div.innerHTML = "<div><h6><center>Everyday Smokers</center></div></h6>" + '<div \
    class="labels"><div class="min">' + limits[0] + '</div> \
    <div class="max">' + limits[limits.length - 1] + '</div></div>'

  limits.forEach(function (limit, index) {
    labels.push('<li style="background-color: ' + colors[index] + '"></li>')
  })

  div.innerHTML += '<ul>' + labels.join('') + '</ul>'
  return div
}
everydayLegend.addTo(everydaySmokerMap)

// Create a choropleth layer for somedays smokers
var smokesSomedays = L.choropleth(data, {

  // Define what  property in the features to use
  valueProperty: "SOMEDAYS",

  // Set color scale
  scale: ["#fffacd", "#ffd700"],

  // Number of breaks in step range
  steps: 7,

  // q for quartile, e for equidistant, k for k-means
  mode: "q",
  style: {
    // Border color
    color: "#fff",
    weight: 1,
    fillOpacity: 0.8
  },

  // Binding a pop-up to each layer
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<h5>" + feature.properties.NAME + ": " + feature.properties.SOMEDAYS + "%</h5>");
  }
}).addTo(somedaySmokerMap); 

// Add legend to the somedays smokers map
var somedayLegend = L.control({ position: 'bottomleft' })
somedayLegend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend')
  var limits = smokesSomedays.options.limits
  var colors =  smokesSomedays.options.colors
  var labels = []

  // Add min & max
  div.innerHTML = "<div><h6><center>Someday Smokers</center></div></h6>" + '<div \
    class="labels"><div class="min">' + limits[0] + '</div> \
    <div class="max">' + limits[limits.length - 1] + '</div></div>'

  limits.forEach(function (limit, index) {
    labels.push('<li style="background-color: ' + colors[index] + '"></li>')
  })

  div.innerHTML += '<ul>' + labels.join('') + '</ul>'
  return div
}
somedayLegend.addTo(somedaySmokerMap)

// Create a choropleth layer for former smokers
var formerSmoker = L.choropleth(data, {

  // Define what  property in the features to use
  valueProperty: "FORMER",

  // Set color scale
  scale: ["#87cefa", "#5f9ea0"],

  // Number of breaks in step range
  steps: 7,

  // q for quartile, e for equidistant, k for k-means
  mode: "q",
  style: {
    // Border color
    color: "#fff",
    weight: 1,
    fillOpacity: 0.8
  },

  // Binding a pop-up to each layer
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<h5>" + feature.properties.NAME + ": " + feature.properties.FORMER + "%</h5>");
  }
}).addTo(formerSmokerMap);

// Add legend to the former smokers map
var formerLegend = L.control({ position: 'bottomleft' })
formerLegend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend')
  var limits = formerSmoker.options.limits
  var colors =  formerSmoker.options.colors
  var labels = []

  // Add min & max
  div.innerHTML = "<div><h6><center>Former Smokers</center></div></h6>" + '<div \
    class="labels"><div class="min">' + limits[0] + '</div> \
    <div class="max">' + limits[limits.length - 1] + '</div></div>'

  limits.forEach(function (limit, index) {
    labels.push('<li style="background-color: ' + colors[index] + '"></li>')
  })

  div.innerHTML += '<ul>' + labels.join('') + '</ul>'
  return div
}
formerLegend.addTo(formerSmokerMap)

// Create a choropleth layer for non-smokers
var neverSmoked = L.choropleth(data, {

  // Define what  property in the features to use
  valueProperty: "NEVER",

  // Set color scale
  scale: ["#90ee90", "#2e8b57"],

  // Number of breaks in step range
  steps: 7,

  // q for quartile, e for equidistant, k for k-means
  mode: "q",
  style: {
    // Border color
    color: "#fff",
    weight: 1,
    fillOpacity: 0.8
  },

  // Binding a pop-up to each layer
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<h5>" + feature.properties.NAME + ": " + feature.properties.NEVER + "%</h5>");
  }
}).addTo(neverSmokedMap);

// Add legend to the non-smokers map
var neverLegend = L.control({ position: 'bottomleft' })
neverLegend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend')
  var limits = neverSmoked.options.limits
  var colors =  neverSmoked.options.colors
  var labels = []

  // Add min & max
  div.innerHTML = "<div><h6><center>Non-Smokers</center></div></h6>" + '<div \
    class="labels"><div class="min">' + limits[0] + '</div> \
    <div class="max">' + limits[limits.length - 1] + '</div></div>'

  limits.forEach(function (limit, index) {
    labels.push('<li style="background-color: ' + colors[index] + '"></li>')
  })

  div.innerHTML += '<ul>' + labels.join('') + '</ul>'
  return div
}
neverLegend.addTo(neverSmokedMap)
