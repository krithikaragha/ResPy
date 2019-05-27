// Read the data from CSV
d3.csv('https://raw.githubusercontent.com/krithikaragha/ResPy/master/Flask%20App/static/data/tobacco_use_by_state.csv', function(data) {

    var chartData = []; // Array containing all the traces
    function makeTrace(d) {    // Function to make all 50 traces
        return {
            x: ["Smokes Everyday", "Smokes Somedays", "Former Smoker", "Never Smoked"],
            y: [d.smokesEveryday, d.smokesSomedays, d.formerSmoker, d.neverSmoked],
            name: d.state,
            type: 'bar'
        }   
    }

    // Loop through all rows of the data
    for(var i = 0; i < data.length; i++) {

        // Call makeTrace to create a trace with index i
        chartData.push(makeTrace(data[i]));
    }
    
    // Define a chart layout
    var layout = {
        barmode: 'stack',
        width: 1200,
        height: 800
    };

    // Plot the stacked bar chart 
    Plotly.newPlot('bar', chartData, layout);
    
});