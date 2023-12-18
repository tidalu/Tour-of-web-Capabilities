let device = await navigator.hid.getDevices();

device.forEach((device) => {
  console.log(`HID: ${device}`);
});
