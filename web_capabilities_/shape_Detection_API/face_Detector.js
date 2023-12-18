const detector = new FaceDetector();
const objects = await detector.detect(image);
objects.forEach((object) => console.log(object));
