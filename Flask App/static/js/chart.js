// Read the data from CSV
d3.csv('data/tobacco_use_by_state.csv', function(rows) {
    var everyday = rows.filter(r => r.smokesEveryday);
    var somedays = rows.filter(r => r.smokesSomedays);
    var former = rows.filter(r => r.formerSmoker);
    var never = rows.filter(r => r.neverSmoked);

    console.log(everyday);
    console.log(somedays);
    console.log(former);
    console.log(never);
});
/*
var trace1 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    name: 'SF Zoo',
    type: 'bar'
  };
  
  var trace2 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [12, 18, 29],
    name: 'LA Zoo',
    type: 'bar'
  };
  
  var data = [trace1, trace2];
  
  var layout = {barmode: 'stack'};
  
  Plotly.newPlot('myDiv', data, layout);
*/