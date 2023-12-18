// vibration api :

window.navigator.vibrate(300);

window.navigator.vibrate([200, 100, 200]);

// battery Status

const battery = await navigator.getBattery();
console.log(battery.level * 100);
battery.addEventListener('chargingchange', () => {});
battery.addEventListener('levelchange', () => {});
battery.addEventListener('chargingtimechange', () => {});
battery.addEventListener('dischargingtimechange', () => {});

// IDLE Detection

if ((await idleDetector.requestPermission()) == 'granted') {
  const idleDetector = new IdleDetector();
  idleDetector.addEventListener('change', () => {
    const userState = idleDetector.userState;
    const screenState = idleDetector.screenState;
  });
  await idleDetector.start();
}
