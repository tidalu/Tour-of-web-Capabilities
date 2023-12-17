// screen Orientation

screen.addEventListener('orientationchange', () => {
  console.log(`The orientation of the screen is : ${screen.orientation}`);
});

const currentOrientation = screen.orientation;
screen.orientation.lock();

// it can also accept an argument with : any, natural, portrait-primary, portrait-secondary, landscape-primary , landscape-secondary, portrait, and landscape

console.log(currentOrientation);

// touch events
