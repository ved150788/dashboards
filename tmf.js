function p2() {
    Plotly.d3.csv("https://raw.githubusercontent.com/ved150788/dashboards/main/tmf.csv", function (data) {
      processData2(data)
      //console.log(data)
    });
  
  };
  
  function processData2(allRows) {
    //console.log("processing Date", allRows)
  
    var issueReports = [],
      correctionsCompleted = [],
      x = [],
      traces = [];
    for (var i = 0; i < allRows.length; i++) {
      issueReports.push(allRows[i].IssueReports);
      correctionsCompleted.push(allRows[i].CorrectionsCompleted);
      x.push(allRows[i].Date);
    }
    traces.push({
      x: x,
      y: issueReports,
      type: 'scatter',
      name: 'IssueReported',
    })
    traces.push({
      x: x,
      y: correctionsCompleted,
      name: 'CorrectionsCompleted'
    })
    
    //console.log(traces)
    Plotly.newPlot('tmf', traces, {
      title: 'TMF (Words)'
    }, {
      scrollZoom: true
    }, {
      responsive: true
    });
  }
  p2();

