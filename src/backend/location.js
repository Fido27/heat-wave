function getCurrLoc() {

}

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Do something with your latitude and longitude
}

function error() {
    alert("Sorry, no position available.");
}

const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
};

const watchID = navigator.geolocation.watchPosition(success, error, options);
