const detector = new BarcodeDetector();
const objects = await detector.detect(image);
objects.forEach((object) => console.log(object));

// face detector API
