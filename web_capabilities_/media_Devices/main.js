async function name1() {
  return await navigator.mediaDevices.getDisplayMedia({
    audio: true,
    video: true,
  });
}
let stream = name1();

const video = document.querySelector('video');
video.srcObject = stream;
video.onloadedmetadata = () => {
  video.play();
};
