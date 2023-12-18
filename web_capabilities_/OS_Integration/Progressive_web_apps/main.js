//  multi-screen windows placement api

const screenDetails = await window.getScreenDetails();
screenDetails.addEventListener('screenschange', (e) => {});

// file handler
launchQueue.setConsumer((launchParams) => {
  // Nothing to do when the queue is empty
  if (!launchParams.files.length) return;

  for (const fileHandle of launchParams.files) {
    // Handle each file
  }
});

// web share

navigator.share({
  title: 'firt.dev',
  text: 'Content for web devs about PWAs',
  url: 'https: /firt.dev',
  // optional files array available
});

// web share target
