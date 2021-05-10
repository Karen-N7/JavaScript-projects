async function getISS() {
    var response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    var data = await response.json();
    var { latitude, longitude } = data;
    console.log(latitude, longitude)
    document.body.insertBefore(document.createTextNode('lat:' + latitude.toFixed('2') +
        ' / ' + 'long:' + longitude.toFixed('2')), document.body.childNodes[0])
    return { latitude, longitude }
}

async function initMap() {
    var data = await getISS()
    var options = {
        zoom: 2,
        center: { lat: data.latitude, lng: data.longitude }
    }
    var myMap = new google.maps.Map(document.querySelector('#myMap'), options)
    var marker = new google.maps.Marker({
        position: { lat: data.latitude, lng: data.longitude },
        map: myMap
    });
    setTimeout(initMap, 5000)
}