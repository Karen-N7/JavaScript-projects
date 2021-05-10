function initMap() {
    var options = {
        zoom: 8,
        center: {
            lat: 42.3601,
            lng: 71.0589
        }
    }
    var map = new google.maps.Map(document.querySelector('#map'), options)

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map
        });
        if (props.iconImage) {
            marker.setIcon(props.iconImage)
        }
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            })
            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        }
    }
    var markers = [
        { coords: { lat: 42.4668, lng: 70.9495 } },
        {
            coords: { lat: 42.8584, lng: 70.9300 },
            content: '<h1>Amesbury<h1>'
        },
        {
            coords: { lat: 42.3601, lng: 71.0589 },
            content: '<h1>bla bla</h1>',
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        }
    ]
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i])
    }
    google.maps.event.addListener(map, 'click', function (event) {
        addMarker({ coords: event.latLng })
    })
}











