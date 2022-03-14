let map;

function initMap() {
  getLocation();

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
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude },
    zoom: 8,
  });

}