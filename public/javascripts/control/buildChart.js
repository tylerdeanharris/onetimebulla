require(["dojox/charting/Chart", "dojox/charting/axis2d/Default", "dojox/charting/plot2d/Spider",
        "dojox/charting/themes/Grasslands" , "dojo/ready", "dojox/charting/plot2d/Indicator"],
    function(Chart, Default,Spider, Grasslands, ready){
        ready(function() {
            var chart = new Chart("chartOne");
            chart.addPlot("default", {type: Spider, tension: 2})
                .addAxis("x", {fixLower: "major", fixUpper: "major"})
                .addAxis("y", {vertical: true, fixLower: "none", fixUpper: "none", min: 0, max: 7})
                .setTheme(Grasslands)
                .addSeries("Series A", [1, 2, 0.5, 1.5, 1, 2.8, 0.4])
                .addSeries("Series B", [2.6, 1.8, 2, 1, 1.4, 0.7, 2])
                .addSeries("Series C", [6.3, 1.8, 3, 2.8, 0.4, 0.5, 4.4, 2.7, 2])
                .addSeries("Series D", [1.5, 1, 1, 2, 0.5, 4.4, 2.7])
                .addSeries("Series E", [2.6, 1.8, 2, 1, 1.4, 0.7, 2])
                .addSeries("Series F", [3, 0.5, 4.4, 6.3, 1.8, 2.7, 2])
                .render();
        });

    });
