
navigator.geolocation.getCurrentPosition(position =>{

    const{ latitude, longitude}= position.coords;
    var map = new ol.Map({
    target: 'mapa',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([longitude, latitude ]),
        zoom:25
    })
})


    

})