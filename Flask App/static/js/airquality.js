// Create a map object
var myMap = L.map("map", {
  center: [39.8283, -98.5795], 
  zoom: 4
});

// Create a base layer with Mapbox API
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
maxZoom: 18,
id: "mapbox.outdoors",
accessToken: API_KEY
}).addTo(myMap);

// Create a overlay layer using Air Quality Index API
L.tileLayer("https://tiles.waqi.info/tiles/usepa-pm25/{z}/{x}/{y}.png?token=_TOKEN_ID_", {
  attribution: 'Air Quality Tiles &copy; <a href="http://waqi.info">waqi.info</a>',
  token: TOKEN
}).addTo(myMap);

// Create a legend to display information about our map
var legend = L.control({
  position: "bottomleft"
});

// When the layer control is added, insert a div with the class of "legend"
legend.onAdd = function() {
  var div = L.DomUtil.create('div', 'legend');
  // Widget for Buffalo, NY
  div.innerHTML += "<div  onclick='window.location=\"http://aqicn.org/city/usa/newyork/buffalo/\"' \
                    style=\"overflow:hidden;font-family: Cambria,'Palatino Linotype','Book Antiqua', \
                    'URW Palladio L',serif;background-color: #f6f9f7;border:1px solid white;min-width: \
                    100px;border-radius:5px;-moz-border-radius:5px;    -webkit-border-radius:5px;    box-shadow: 0 \
                    1px 3px rgba(0,0,0,0.6);-moz-box-shadow: 0 1px 3px rgba(0,0,0,0.6);    -webkit-box-shadow: 0 1px \
                    3px rgba(0,0,0,0.6);padding:0px;margin:0px;border-spacing: 0px;line-height: 1.2;letter-spacing: 0px;cursor: \
                    pointer;;height: 128px; width: 154px; margin-top: 10px;margin-bottom: 10px; margin-right: 10px;overflow:hidden;\"> \
                    <div style='margin-left:5px; margin-right:5px; margin-top:2px;text-align:left;border:0px solid black;'> <center> \
                    <table style='border:0px solid black; padding:0px; margin:0px;border-spacing: 0px;width:100%'> \
                    <tr><td style='font-size:12px;;' nowrap=true><div style='width:119px;overflow:hidden;border:0px solid \
                    red;' title='Buffalo, New York'><a href='http://aqicn.org/city/usa/newyork/buffalo/'  target='waqi'> \
                    <b>Buffalo, NY</b></a></div></td><td style='align:right;'><a href='http://aqicn.org/city/usa/newyork/buffalo/m/' \
                    title='full screen view' target='waqi'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAYAAAD52jQlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDBFM0JCRDA0RTkxMTFFMTlDRkNEQTZEQkZFNkZEMjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDBFM0JCRDE0RTkxMTFFMTlDRkNEQTZEQkZFNkZEMjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMEUzQkJDRTRFOTExMUUxOUNGQ0RBNkRCRkU2RkQyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMEUzQkJDRjRFOTExMUUxOUNGQ0RBNkRCRkU2RkQyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PivMH0AAAAGMSURBVHjarJPBTsJAEIZ3tltcIBCoiSf1oh48wkWv3n0Bn8Bn8OTRkz6BF48mvgUnEmN4BkM0YsQYLQW63XEGtsEYaoowyd/ZTTNf/5ndAiKKeQEX7W1Km2Kx6OLZwSMQVNJGpixW7er+JLbYzKpkH2zFWkTr9ta5o8eDolwgeQ48UXXNa8LsQzOYy5YWhigJLcakOEHaC5EwGEWDoSWS78R7uVUp+JkuSQYZJDCidiKT4CC2dmAsiGT6jiFlB9ap691Aq79aJ5Zg4CfBPoYG+5GZNBCiBe5Cnbe6+9ed18Onr3H9R22Q51TWi8rsBToMimqUsHuLlj8oL9vPR7+AueMtMqrzMqjWtIKS74EvYXooYWy1WCKGNMuKL6VWEpQHICVJrCA0WfQ9AcQEEHOuTXprFoFy24pwlASlQRa0T4rzQtkeTOG9ulZ3WVcncsoVN8c7t5R6pHdSuJKZUiRuZJO/dlVQHpVxPxzKSsEbLkNz9SMHZcdCnjY2WmVf/gvMdVzPcySN0zF8CzAAQwGzqK/3FaYAAAAASUVORK5CYII \
                    =' style='border:0px;' ></a></div></td></tr></table><div style='border-radius:5px;-moz-border-radius:5px;-webkit-border-radius: \
                    5px;box-shadow: 0 1px 3px rgba(0,0,0,0.2);-moz-box-shadow: 0 1px 3px rgba(0,0,0,0.2);   -webkit-box-shadow: 0px 1px 0px \
                    rgba(0,0,0,0.2);margin-top:2px;margin-bottom:2px;width:100%;text-align:center;font-size:60px; background-color: #009966;color:#ffffff; 'title=\"Good\">18 \
                    </div><div style='font-size:16px;'><b>Good</b></div><div style='font-weight:normal;font-size:9px;'>Updated on Sunday 17:00</div></center></div></div>";
  // Widget for Apollo Beach, FL
  div.innerHTML += "<div  onclick='window.location=\"http://aqicn.org/city/usa/florida/hillsborough/apollo-beach/\"' \
                    style=\"overflow:hidden;font-family: Cambria,'Palatino Linotype','Book Antiqua',\
                    'URW Palladio L',serif;background-color: #f6f9f7;border:1px solid white;min-width: \
                    100px;border-radius:5px;-moz-border-radius:5px;    -webkit-border-radius:5px;    box-shadow: 0 \
                    1px 3px rgba(0,0,0,0.6);-moz-box-shadow: 0 1px 3px rgba(0,0,0,0.6);    -webkit-box-shadow: 0 1px \
                    3px rgba(0,0,0,0.6);padding:0px;margin:0px;border-spacing: 0px;line-height: 1.2;letter-spacing: 0px;cursor: \
                    pointer;;height: 128px; width: 154px; margin-top: 10px;margin-bottom: 10px; margin-right: 10px;overflow:hidden;\"> \
                    <div style='margin-left:5px; margin-right:5px; margin-top:2px;text-align:left;border:0px solid black;'><center> \
                    <table style='border:0px solid black; padding:0px; margin:0px;border-spacing: 0px;width:100%'> \
                    <tr><td style='font-size:12px;;' nowrap=true><div style='width:119px;overflow:hidden;border:0px solid \
                    red;' title='Apollo Beach, Florida'><a href='http://aqicn.org/city/usa/florida/hillsborough/apollo-beach/'  target='waqi'> \
                    <b>Apollo Beach, FL</b></a></div></td><td style='align:right;'><a href='http://aqicn.org/city/usa/florida/hillsborough/apollo-beach/m/' \
                    title='full screen view' target='waqi'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAYAAAD52jQlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDBFM0JCRDA0RTkxMTFFMTlDRkNEQTZEQkZFNkZEMjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDBFM0JCRDE0RTkxMTFFMTlDRkNEQTZEQkZFNkZEMjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMEUzQkJDRTRFOTExMUUxOUNGQ0RBNkRCRkU2RkQyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMEUzQkJDRjRFOTExMUUxOUNGQ0RBNkRCRkU2RkQyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PivMH0AAAAGMSURBVHjarJPBTsJAEIZ3tltcIBCoiSf1oh48wkWv3n0Bn8Bn8OTRkz6BF48mvgUnEmN4BkM0YsQYLQW63XEGtsEYaoowyd/ZTTNf/5ndAiKKeQEX7W1Km2Kx6OLZwSMQVNJGpixW7er+JLbYzKpkH2zFWkTr9ta5o8eDolwgeQ48UXXNa8LsQzOYy5YWhigJLcakOEHaC5EwGEWDoSWS78R7uVUp+JkuSQYZJDCidiKT4CC2dmAsiGT6jiFlB9ap691Aq79aJ5Zg4CfBPoYG+5GZNBCiBe5Cnbe6+9ed18Onr3H9R22Q51TWi8rsBToMimqUsHuLlj8oL9vPR7+AueMtMqrzMqjWtIKS74EvYXooYWy1WCKGNMuKL6VWEpQHICVJrCA0WfQ9AcQEEHOuTXprFoFy24pwlASlQRa0T4rzQtkeTOG9ulZ3WVcncsoVN8c7t5R6pHdSuJKZUiRuZJO/dlVQHpVxPxzKSsEbLkNz9SMHZcdCnjY2WmVf/gvMdVzPcySN0zF8CzAAQwGzqK/3FaYAAAAASUVORK5CYII \
                    =' style='border:0px;' ></a></div></td></tr></table><div style='border-radius:5px;-moz-border-radius:5px;-webkit-border-radius: \
                    5px;box-shadow: 0 1px 3px rgba(0,0,0,0.2);-moz-box-shadow: 0 1px 3px rgba(0,0,0,0.2);   -webkit-box-shadow: 0px 1px 0px \
                    rgba(0,0,0,0.2);margin-top:2px;margin-bottom:2px;width:100%;text-align:center;font-size:60px; background-color: #ffde33;color:#000000; 'title=\"Moderate\">55 \
                    </div><div style='font-size:16px;'><b>Moderate</b></div><div style='font-weight:normal;font-size:9px;'>Updated on Sunday 18:00</div></center></div></div>";
  // Widget for Shuttlesworth, AL               
  div.innerHTML += "<div  onclick='window.location=\"http://aqicn.org/city/usa/alabama/shuttlesworth/\"' \
                    style=\"overflow:hidden;font-family: Cambria,'Palatino Linotype','Book Antiqua',\
                    'URW Palladio L',serif;background-color: #f6f9f7;border:1px solid white;min-width: \
                    100px;border-radius:5px;-moz-border-radius:5px;    -webkit-border-radius:5px;    box-shadow: 0 \
                    1px 3px rgba(0,0,0,0.6);-moz-box-shadow: 0 1px 3px rgba(0,0,0,0.6);    -webkit-box-shadow: 0 1px \
                    3px rgba(0,0,0,0.6);padding:0px;margin:0px;border-spacing: 0px;line-height: 1.2;letter-spacing: 0px;cursor: \
                    pointer;;height: 128px; width: 154px; margin-top: 10px;margin-bottom: 10px; margin-right: 10px;overflow:hidden;\"> \
                    <div style='margin-left:5px; margin-right:5px; margin-top:2px;text-align:left;border:0px solid black;'><center> \
                    <table style='border:0px solid black; padding:0px; margin:0px;border-spacing: 0px;width:100%'> \
                    <tr><td style='font-size:12px;;' nowrap=true><div style='width:119px;overflow:hidden;border:0px solid \
                    red;' title='Shuttlesworth, Alabama'><a href='http://aqicn.org/city/usa/alabama/shuttlesworth/'  target='waqi'> \
                    <b>Shuttlesworth, AL</b></a></div></td><td style='align:right;'><a href='http://aqicn.org/city/usa/alabama/shuttlesworth/m/' \
                    title='full screen view' target='waqi'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAYAAAD52jQlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDBFM0JCRDA0RTkxMTFFMTlDRkNEQTZEQkZFNkZEMjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDBFM0JCRDE0RTkxMTFFMTlDRkNEQTZEQkZFNkZEMjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMEUzQkJDRTRFOTExMUUxOUNGQ0RBNkRCRkU2RkQyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMEUzQkJDRjRFOTExMUUxOUNGQ0RBNkRCRkU2RkQyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PivMH0AAAAGMSURBVHjarJPBTsJAEIZ3tltcIBCoiSf1oh48wkWv3n0Bn8Bn8OTRkz6BF48mvgUnEmN4BkM0YsQYLQW63XEGtsEYaoowyd/ZTTNf/5ndAiKKeQEX7W1Km2Kx6OLZwSMQVNJGpixW7er+JLbYzKpkH2zFWkTr9ta5o8eDolwgeQ48UXXNa8LsQzOYy5YWhigJLcakOEHaC5EwGEWDoSWS78R7uVUp+JkuSQYZJDCidiKT4CC2dmAsiGT6jiFlB9ap691Aq79aJ5Zg4CfBPoYG+5GZNBCiBe5Cnbe6+9ed18Onr3H9R22Q51TWi8rsBToMimqUsHuLlj8oL9vPR7+AueMtMqrzMqjWtIKS74EvYXooYWy1WCKGNMuKL6VWEpQHICVJrCA0WfQ9AcQEEHOuTXprFoFy24pwlASlQRa0T4rzQtkeTOG9ulZ3WVcncsoVN8c7t5R6pHdSuJKZUiRuZJO/dlVQHpVxPxzKSsEbLkNz9SMHZcdCnjY2WmVf/gvMdVzPcySN0zF8CzAAQwGzqK/3FaYAAAAASUVORK5CYII \
                    =' style='border:0px;' ></a></div></td></tr></table><div style='border-radius:5px;-moz-border-radius:5px;-webkit-border-radius: \
                    5px;box-shadow: 0 1px 3px rgba(0,0,0,0.2);-moz-box-shadow: 0 1px 3px rgba(0,0,0,0.2);   -webkit-box-shadow: 0px 1px 0px \
                    rgba(0,0,0,0.2);margin-top:2px;margin-bottom:2px;width:100%;text-align:center;font-size:60px; background-color: #ff9933;color:#000000; 'title=\"Unhealthy for Sensitive Groups\">123 \
                    </div><div style='font-size:16px;'><b>Unhealthy</b> <span style='font-size:8px;'>(sensitive groups)</span></div><div style='font-weight:normal;font-size:9px;'>Updated on Sunday 18:00</div></center></div> </div>";
  return div;
};

// Add the info legend to the map
legend.addTo(myMap);

