// Gamepad API
// you need to first connected your Gamepad to the device (USB or Bluetooth) and query it in a requestAnimationFrame loop

window.addEventListener('gamepadconnected', (event) => {
  const buttons = event.gamepad.buttons;
  console.log(buttons);
});
