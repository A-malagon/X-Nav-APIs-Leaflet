$(document).ready(function() {
    // create a map in the "map" div, set the view to a given place and zoom
    var map = L.map('map');
    map.locate({setView: true, maxZoom: 20});
    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    //Localízame
    function onLocationFound(e) {
        var radius = e.accuracy / 1.5;

        L.marker(e.latlng).addTo(map)
            .bindPopup("You are within " + radius + " meters from this point").openPopup();

        L.circle(e.latlng, radius).addTo(map);
    }

    map.on('locationfound', onLocationFound);

    function onLocationError(e) {
        alert(e.message);
    }

    map.on('locationerror', onLocationError);

    //Diámetro
    var marker = L.marker([48.5, -0.09]).addTo(map);

    var circle = L.circle([48.508, -0.11], 500, {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.6
    }).addTo(map);

    var polygon = L.polygon([
        [48.509, -0.08],
        [48.503, -0.06],
        [48.51, -0.047]
    ]).addTo(map);


    //muestra las coordenadas donde se hace click

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);
});
