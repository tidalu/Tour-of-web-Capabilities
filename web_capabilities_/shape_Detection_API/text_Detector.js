const detector = new TextDetector();
const objects = await detector.detect(image);
objects.forEach((object) => console.log(object));
