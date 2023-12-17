// geolocation API
// it is oldedst cool web capability, that is why it is still an old APi

const locationAcquiredCB = (location) => {
  // location has a timestamp and a coords property with
  // latitude, longtitude, accuracy, altitude, verticalAccuracy
};

const errorCB = (error) => {};

// get user's position once
// navigator.geolocation.getCurrentPosition(locationAcquiredCB, errorCB);

function start() {
  // geolocation
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      // there are two type of call one is getCurrentPosition() whioch gets the location once
      // another one is watchPosition() whchi is to watch the position until we clear
      (position) => {
        console.log(position);
        document.querySelector('output').textContent = `
                    Lat: ${position.coords.latitude}
                    Long: ${position.coords.longitude}
            `;
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: true, // false by default // if it is true it uses the GPS one which is more accuracy
        maximumAge: 0, // 0 by default // it mainly to get the archive locatio like if it is onkay for you to get last some minutes of data
        timeout: 60000, // infiinty by default // cancel it after given seconds if it cannot
      }
    );
  }
}
