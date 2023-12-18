navigator
  .requestMIDIAccess({ sysex: false })
  .then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess(midi) {
  const inputs = midi.inputs.values();
  for (const input of inputs) {
    input.value.addEventListener('midimessage', function (event) {
      //   event.data has the bytes
    });
  }
}
