// Level 1: Basic Visualization
// 1. **Get your data set**
// The USGS provides earthquake data in a number of different formats, updated every 5 minutes. 
// Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and pick a data set to visualize. 
// When you click on a data set, for example 'All Earthquakes from the Past 7 Days', 
// you will be given a JSON representation of that data. You will be using the URL of this JSON to pull in the data for our visualization.

// 2. **Import & Visualize the Data**
// Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.
// Your data markers should reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes should appear larger and darker in color.
// Include popups that provide additional information about the earthquake when a marker is clicked.
// Create a legend that will provide context for your map data.
// Your visualization should look something like the map above.

// Creat map Object
var myMap = L.map("map", {
    center: [34.0522, -118.2437],
    zoom: 8
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    maxZoom: 18,
    // id: "mapbox/streets-v11s",
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

// Storing API query variable
// Storing the geojson data url for all earthquakes from the past 7 days
var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Grabbing the geoData with d3
d3.json(geoData).then(function (data) {
    // console.log(geoData);


    // Your data markers should reflect the magnitude of the earthquake in their size and color. 
    // Earthquakes with higher magnitudes should appear larger and darker in color.

    // Creating a function that will determine color of the marker as the "magnitude" is high or lower
    function choosemagColor(magnitude) {
        switch (true) {
            case magnitude > 5:
                return "red";
            case magnitude > 4:
                return "darkorange";
            case magnitude > 3:
                return "gold";
            case magnitude > 2:
                return "green";
            case magintude > 1:
                return "lightgreen";
            default:
                return "lightyellow";
        };
    };
    // Creating a function to determin the size of the marker as the "magnitude" is higher or lower
    function choosemagSize(magintude) {
        switch (magnitude) {
            case magnitude > 5:
                return 30;
            case magnitude > 4:
                return 24;
            case magnitude > 3:
                return 18;
            case magnitude > 2:
                return 12;
            case magintude > 1:
                return 6;
            default:
                return 3;
        };
    };

    // Creating a function to determine the the style of the marker as the "magnitude" is higher or lower

    function stylemag(feature) {
        return {
            opacity: 1,
            fillColor: choosemagColor(feature.properties.mag),
            color: "Black",
            radius: choosemagSize(feature.properties.mag),
            stroke: true,
            weight: 0.75

        };
    };

    // Creating a layer of GeoJSON data to contain the array of the created features
    var geoJsonLayer = L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },
        // Adding market style created
        style: stylemag,

        // Binding a Popup for the location, date, time, and the magnitude of the earthquake
        onEachFeature: function (feature, layer) {
            layer.bindPopup(
                "<h4>Location: " + feature.properties.place + "</h4><hr><p>Date/Time: " +
                new Date(feature.properties.time) + "</p><hr><p>Magnitude: " +
                feature.properties.mag + "</p>"
            );
        }




    }).addTo(myMap);

    // Setting up the legend for the map
    var legend = L.control({ position: "bottomleft" });
    legend.onAdd = function () {

        var div = L.DomUtil.create("div", "info legend"),
            magLevels = [0, 1, 2, 3, 4, 5],
            labels = [];

        // Looping through the magnitude to generate a label 
        for (var i = 0; i < magLevels; i++) {
            div.innerHTML +=
                '<i style="background: ' + choosemagColor(magLevels[i] + 1) + '"></i> ' +
                magLevels[i] + (magLevels[i + 1] ? '&ndash;' + magLevels[i, 1] + '<br>' : '+');
        }
        return div;

    };

    // Adding legend to the map
    legend.addTo(myMap);



});