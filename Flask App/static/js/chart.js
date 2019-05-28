// Read the data from CSV
d3.csv('https://raw.githubusercontent.com/krithikaragha/ResPy/master/Flask%20App/static/data/tobacco_use_by_state.csv', function(data) {

    var states = [];
    var smokesEveryday = []; 
    var smokesSomedays = [];
    var formerSmoker = [];
    var neverSmoked = [];

    // Loop through all rows of the data
    for(var i = 0; i < data.length; i++) {

        states.push(data[i].abbr);
        smokesEveryday.push(data[i].smokesEveryday);
        smokesSomedays.push(data[i].smokesSomedays);
        formerSmoker.push(data[i].formerSmoker);
        neverSmoked.push(data[i].neverSmoked);
    }

    var smokesEverydayTrace = {
        x: states,
        y: smokesEveryday,
        name: 'Smokes Everyday',
        type: 'bar'
    };

    var smokesSomedaysTrace = {
        x: states,
        y: smokesSomedays,
        name: 'Smokes Somedays',
        type: 'bar'
    };

    var formerSmokerTrace = {
        x: states,
        y: formerSmoker,
        name: 'Former Smoker',
        type: 'bar'
    };

    var neverSmokedTrace = {
        x: states,
        y: neverSmoked,
        name: 'Never Smoked',
        type: 'bar'
    };
      
    var data = [neverSmokedTrace, formerSmokerTrace, smokesSomedaysTrace, smokesEverydayTrace];
    
    var layout = {
        barmode: 'stack', 
        title: "Percentage of Tobacoo Use by State",
        xaxis: {
            title: {
                text: "Tobacco Use"
            }, 
            tickangle: 45
        },
        yaxis: {
            title: {
                text: "Percentage"
            }
        },
        bargap: 0.4,
        width: 1250,
        height: 800
    };
    
    Plotly.newPlot('bar', data, layout);
    
});