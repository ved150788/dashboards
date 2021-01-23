function p1() {
  Plotly.d3.csv("https://raw.githubusercontent.com/ved150788/dashboards/main/usage.csv", function (data) {
  //console.log(data);  
  processData1(data)
  });

};

function processData1(allRows) {
  //console.log("processing Date", allRows)

  var transcribe = [],
    translation = [],
    speech = [],
    x = [],
    traces = [];
  for (var i = 0; i < allRows.length; i++) {
    transcribe.push(allRows[i].Transcribe);
    translation.push(allRows[i].Translate);
    speech.push(allRows[i].Speech);
    x.push(allRows[i].Date);
  }
  traces.push({
    x: x,
    y: transcribe,
    type: 'scatter',
    name: 'Transcribe',
  })
  traces.push({
    x: x,
    y: translation,
    name: 'Translation'
  })
  traces.push({
    x: x,
    y: speech,
    name: 'Speech'
  })


  //console.log(traces)
  Plotly.newPlot('summary', traces,{
    title: 'Summary (Characters)'
  }, {
    scrollZoom: true
  }, {
    responsive: true
  });
}
p1();