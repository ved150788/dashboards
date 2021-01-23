function makeplot() {
    Plotly.d3.csv("https://raw.githubusercontent.com/ved150788/dashboards/main/Performance.csv", function (data) {
        processData(data)
    });

};

function processData(allRows) {
    //console.log("processing Date", allRows)

    var firsTime = [],
        errors = [],
        recycled = [],
        //speech = [],
        x = [],
        traces = [];
    for (var i = 0; i < allRows.length; i++) {
        firsTime.push(allRows[i].FirstTimeRight);
        errors.push(allRows[i].RepeatErrors);
        recycled.push(allRows[i].Recycyled);
        x.push(allRows[i].Date);
    }
    traces.push({
        x: x,
        y: firsTime,
        type: 'scatter',
        name: 'FirstTime Errors',
    })
    traces.push({
        x: x,
        y: errors,
        name: 'Repeat Errors'
    })
    traces.push({
        x: x,
        y: recycled,
        name: 'Errors Corrected from TM'
    })
       


    Plotly.newPlot('learning', traces,{
        title: 'Corrections (Characters)'
    }, {
        scrollZoom: true
    }, {
        responsive: true
    });
}
makeplot();
