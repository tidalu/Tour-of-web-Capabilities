// sending

let ssocket = new SonicSocket({ alphabet: '0123456789' });

ssocket.send('31415');

// recieving

let sserver = new SonicSocket({ alphabet: '0123456789' });
sserver.on('message', function (message) {
  // expect message to be '31415'
  console.log(message);
});
sserver.start();
