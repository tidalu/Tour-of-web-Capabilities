//  multi-screen windows placement api

const screenDetails = await window.getScreenDetails();
screenDetails.addEventListener('screenschange', (e) => {});
