let myElement = document.getElementById("demo");

function getLocation() {
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
            myElement.innerHTML = "Geolocation is not supported by this browser";
        }
    
}


function showPosition(position) {
    let long = position.coords.longitude.toFixed(0);
    let lat = position.coords.latitude.toFixed(0);

    myElement.innerHTML = "Latitude: " + lat +
    "<br>Longitude: " + long;
}

getLocation();

  