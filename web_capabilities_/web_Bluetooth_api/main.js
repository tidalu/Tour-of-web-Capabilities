const device = await navigator.bluetooth.requestDevice({
  filters: [{ services: ['heart_rate'] }],
});

const server = await device.gatt.connect();
const service = await server.getPrimaryService('heart_rate');
const characteristic = await service.getCharacteristic(
  'heart_rate_control_measurement'
);

await characteristic.startNotifications();
characteristic.addEventListener('characteristicvaluechanged', (event) => {
  const value = event.target.value;
  // Process the heart rate data here
});
