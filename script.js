//Create geojson object
//var geojson;


//tabletop code that turns the file into a json object called data
document.addEventListener('DOMContentLoaded', function() {
    var URL = "1beX_EbJAX2n4wFHuLdFHEk1vlxSPdbirjovCc2ZRK8o";
    Tabletop.init( { key: URL, callback: convertToGeoJSON, simpleSheet: true } )
})

//function called by the tabletop code: converts their json object to geoJSON format that we want
function convertToGeoJSON(data) {
    //prints out tabletop version of data
    console.log(data);
    //creates empty places array to save our converted objects
//    places=[]
//
//    //goes through every element of "data" and converts it to the form we expected
    for(i=0; i<data.length; i++) {
        //creates a place object, fills it with data

        if(data[i]["dairy"] === "TRUE") {
            console.log(data[i]["entreename"]);
        }
            //
//        place = { type: 'Feature',
//        properties: {
//            title: data[i]["name"],
//                    description: data[i]["description"],
//                    'marker-color': data[i]["hexcolor"],
//                    'marker-size': 'large',
//                    'marker-symbol': data[i]["markersymbol"],
//                },
//                geometry: {
//                    type: 'Point',
//                    coordinates: [data[i]["long"], data[i]["lat"]]
//                }
//        }
//        if((!isNaN(data[i]["lat"]) && !isNaN(data[i]["long"])) &&
//                !(data[i]["lat"]==="" && data[i]["long"]==="") ) {
//            //adds our place object to places
//            places.push(place);
//        }
    }
//
//    //create a geojson file from our places array
//    geojson = { type: 'FeaturesCollection', features: places };
//    //call function that sets up the map
//    setupMap(geojson);

}
//
////function that sets up the map
//function setupMap(geo) {
//    myLayer.setGeoJSON(geo); // Adds all of the points to the map
//    map.fitBounds(myLayer.getBounds());
//    map.legendControl.addLegend(document.getElementById('legend').innerHTML);
//    m.openPopup();
//    populateListing();
//}
//
//
////old stuff (only parts you still need from old code)
//L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA';
//var map = L.mapbox.map('map', 'examples.map-20v6611k')
//  .setView([38.12367, -76.81229], 9);
//
//var myLayer = L.mapbox.featureLayer().addTo(map);
//
