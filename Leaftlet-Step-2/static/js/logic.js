// Level 2: More Data (Optional)

// The USGS wants you to plot a second data set on your map to illustrate the relationship between tectonic plates and seismic activity. 
// You will need to pull in a second data set and visualize it along side your original set of data. 
// Data on tectonic plates can be found at <https://github.com/fraxen/tectonicplates>.
// In this step we are going to..
// * Plot a second data set on our map.
// * Add a number of base maps to choose from as well as separate out our two different data sets into overlays 
// that can be turned on and off independently.
// * Add layer controls to our map.

// Creat map Object
var myMap = L.map("map", {
    center: [40.7, -94.5],
    zoom: 4
});

// Storing the geojson data and the tectonic plates
var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var tectonicPlates = "https://github.com/fraxen/tectonicplates/blob/master/GeoJSON/PB2002_boundaries.json";

// Adding tile layers
var statellite = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    maxZoom: 18,
    id: "satellite-v9",
    accessToken: API_KEY
}).addTo(myMap);

var scale = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
}).addTo(myMap);

var outdoors = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    maxZoom: 18,
    id: "outdoors-v11",
    accessToken: API_KEY
}).addTo(myMap);