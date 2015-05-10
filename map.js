var map = new L.map('map').setView([37.7595, -122.427], 16);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


d3.json("dolores.geojson", function(data) {
    var collection = data.geojson_crime;

    L.pointsLayer(collection, {
        radius: 10,
        applyStyle: circle_style
    }).addTo(map);

    function circle_style(circles) {
        circles.attr('opacity', 0.5)
            .attr('fill', 'red');
    }
});
