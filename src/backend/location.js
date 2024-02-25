export function getCurrLoc() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}

const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
};

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
}

function error() {
    alert("Sorry, no position available.");
}
