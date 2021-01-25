# Leaflet - Visualizing Data with Leaflet

## Background

![1-Logo](Resources/Images/1-Logo.png)

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

This project provided data visualization using leaflet maps.  

### [Level 1: Basic Visualization](https://github.com/Chahnaz-Kbaisi/Leaflet-Data-Visualization/tree/main/Leaflet-Step-1)

![2-BasicMap](Resources/Images/2-BasicMap.png)

For level-1, the following steps were taken: 

1. **Get data set**

   ![3-Data](Resources/Images/3-Data.png)

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. I visited the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and picked a dataset to visualize. The dataset chosen was 'All Earthquakes from the Past 7 Days', and a JSON representation of that data was provided. The URL of this JSON was used to pull in the data for visualization.

   ![4-JSON](Resources/Images/4-JSON.png)

2. **Import & Visualize the Data**

  A map using Leaflet was created, it plotted all of the earthquakes from the dataset based on their longitude and latitude.

   * The data markers reflected the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes appeared larger and darker in color.

   * Popups that provided additional information about the earthquake when a marker was clicked were included.

   * A legend that provided context for the map data was created.
- - -

### [Level 2: More Data](https://github.com/Chahnaz-Kbaisi/Leaflet-Data-Visualization/tree/main/Leaftlet-Step-2)

![5-Advanced](Resources/Images/5-Advanced.png)

For level-2, a second map was plotted by adding a second dataset on the map to illustrate the relationship between tectonic plates and seismic activity. A second data set was pulled and visualized alongside the original set of data from level-1. The second dataset on tectonic plates can be found at <https://github.com/fraxen/tectonicplates>.

In this level-2, the following steps were taken: 

* Plotted a second dataset on the map.

* Added a number of base maps to choose from as well as separated out the two different datasets into overlays that can be turned on and off independently.

* Added layer controls to the map.

- - -

