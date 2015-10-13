dojo.require("dojox.charting.Chart2D");
dojo.require("dojox.charting.plot2d.Pie");
dojo.require("dojox.charting.action2d.Highlight");
dojo.require("dojox.charting.action2d.MoveSlice");
dojo.require("dojox.charting.action2d.Tooltip");
dojo.require("dojox.charting.themes.CubanShirts");
dojo.require("dojox.charting.widget.SelectableLegend");
dojo.require("dojox.charting.widget.Legend");


function filterReportPrototype(k,o){
    return true; //see JSLint suggestion for the  for ( k in object) cycle
}


var retrieveValues = function () {
    var power = [];
    Object.keys(rooms).forEach(function (room) {
        power.push(rooms[room]);
    });
    return power;
};

function dsnChart(energyValues){
    var dsnArr=[];
    for (var k in energyValues){
        if (filterReportPrototype(k,energyValues)){
            dsnArr.push({
                y: energyValues[k].energyConsumption,
                text: energyValues[k].name,
                tooltip: energyValues[k].name +" : "+ floatFormatter(energyValues[k].energyConsumption),
                fontColor: "black",
                color: energyValues[k].color
            });
        }
    }

    console.debug("Array of rooms : " , dsnArr);

    var c = new dojox.charting.Chart2D("reportChartDiv");
    c.addPlot("default", {
        type: "Pie",
        radius: 230,
        labelOffset: -5,
        shadow:true,
        stroke:"gray",
        labelWiring: "cccc",
        labelStyle: "columns",
        labelSize: 50
    }).setTheme(dojox.charting.themes.CubanShirts);
    c.addSeries("DSN", dsnArr);
    var a1 = new dojox.charting.action2d.Tooltip(c, "default");
    var a = new dojox.charting.action2d.MoveSlice(c, "default", {
        duration: 2000,
        scale: 1.1,
        shift: 10
    });
    var a2 = new dojox.charting.action2d.Highlight(c, "default");


    c.render();

    //var selectableLegend = new dojox.charting.widget.SelectableLegend({
    //    chart: c,
    //    outline: false,
    //    horizontal: false
    //}, "reportChartLegendDiv");
}

var floatFormatter = function(number){
    var result = Math.round(number*10000)/10000;
    return result;
}

