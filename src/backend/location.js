export function getCurrLoc() {
    const watchID = navigator.geolocation.watchPosition(success, error, options);
    console.log("Watch ID: " + watchID);
}

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(latitude);
    console.log(longitude);
}

function error() {
    alert("Sorry, no position available.");
}

const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
};
