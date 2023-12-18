const ndef = new NDEFReader();
await ndef.scan();

ndef.addEventListener('readingerror', () => {
  log('error reading this tag');
});

ndef.addEventListener('reading', ({ message, serialNumber }) => {
  log(`Serial Number: ${serialNumber}`);
  log(`Records: (${message.records.length})`);
});
