const container = document.createElement('div');
document.body.appendChild(container);

let magSensor = new Magnetometer({ frequency: 60 });

magSensor.addEventListener('reading', (e) => {
  console.log(`Magnetic field along the X-axis ${magSensor.x}`);
  console.log(`Magnetic field along the Y-axis ${magSensor.y}`);
  console.log(`Magnetic field along the Z-axis ${magSensor.z}`);

  const xEl = document.createElement('span');
  const yEl = document.createElement('span');
  const zEl = document.createElement('span');
  const show = document.createElement('div');

  xEl.textContent = `X: ${magSensor.x.toFixed(2)}`;
  yEl.textContent = `Y: ${magSensor.y.toFixed(2)}`;
  zEl.textContent = `Z: ${magSensor.z.toFixed(2)}`;
  show.textContent = 'showed One';
  container.appendChild(show);

  container.innerHTML = ''; // Clear previous values
  container.appendChild(xEl);
  container.appendChild(document.createElement('br'));
  container.appendChild(yEl);
  container.appendChild(document.createElement('br'));
  container.appendChild(zEl);
});

magSensor.addEventListener('error', (event) => {
  console.log(event.error.name, event.error.message);
});

magSensor.start();

// lassic sensor api

// Still available on all mobile devices, incouding ios, or ipadOS
// it is a  set of events on the window object: devicemotion and deviceorientation

addEventListener('devicemotion', (event) => {
  const x = event.accelerationIncludingGravity.x;
  const y = event.accelerationIncludingGravity.y;
  const z = event.accelerationIncludingGravity.z;
});
addEventListener('deviceorientation', (event) => {
  const rotateDegrees = event.alpha; // alpha : rotation around z-axis
  const leftToRight = event.gamma; // gamma : left to right
  const frontToBack = event.beta; // beta : front back motion
});

// but on ios and ipadOS from 13.0 you must request permission with a nonstandard API on a user gesture

if ('requestPermission' in DeviceMotionEvent) {
  const responce = await DeviceMotionEvent.requestPermission();
  // "granted", "denied"
}
