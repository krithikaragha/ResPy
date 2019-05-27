// Random Color Picker
function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

// Read the data from CSV
d3.csv('https://raw.githubusercontent.com/krithikaragha/ResPy/master/Flask%20App/static/data/cardiovascular_disease_avg_death_rates.csv', function(data) {
    
    var chartLabels = []; // x-axis values
    var chartValues = []; // y-axis values
    var colorValues = []; // rgb values
    var textLabels = [];  // text label for each bar

    // Loop through the data and grab the labels, values, text and generate random colors
    for(var i = 0; i < data.length; i++) {

        // Push the labels 
        chartLabels.push(data[i].abbr);

        // Push the values 
        chartValues.push(data[i].avg_data);

        // Push the text labels
        textLabels.push(data[i].state);

        // Push the colors
        colorValues.push(getRandomRgb());
    }

    var data = [{
        x: chartLabels,
        y: chartValues,
        text: textLabels,
        marker: {
            color: colorValues
        },
        type: 'bar'
    }];
          
    var layout = {
        title: {
            text: "National Cardiovascular Disease Mortality Rates (avg. values per 100,000 pop.)"
        },
        xaxis: {
            title: {
                text: "State"
            },
            tickangle: -45
        },
        yaxis: {
            title: {
                text: "Avg. Death Rates %(per 100,000) "
            }
        },
        height: 800,
        width: 1200
    };
        
    Plotly.newPlot('bar', data, layout);
    
});