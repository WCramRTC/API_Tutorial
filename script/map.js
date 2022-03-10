let map;

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}



function getLocation() {
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
            myElement.innerHTML = "Geolocation is not supported by this browser";
        }
    
}

function showPosition(position) {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    myElement.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
