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
