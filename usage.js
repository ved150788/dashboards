function p3() {
    Plotly.d3.csv("https://raw.githubusercontent.com/ved150788/dashboards/main/Book4.csv", function (data) {
      processData3(data)
      //console.log(data)
    });
  
  };
  
  function processData3(allRows) {
    //console.log("processing Date", allRows)
  
    var upload = [],
      download = [],
      x = [],
      traces = [];
    for (var i = 0; i < allRows.length; i++) {
      upload.push(allRows[i].Upload);
      download.push(allRows[i].Download);
      x.push(allRows[i].Date);
    }
    traces.push({
      x: x,
      y: upload,
      type: 'scatter',
      name: 'Upload',
    })
    traces.push({
      x: x,
      y: download,
      name: 'Download'
    })
    
    //console.log(traces)
    Plotly.newPlot('usg', traces, {
      title: 'Data Usage'
    }, {
      scrollZoom: true
    }, {
      responsive: true
    });
  }
  p3();

