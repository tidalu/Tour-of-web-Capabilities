var utterance = new SpeechSynthesisUtterance();
utterance.text = 'Hello welcome to my web page Man!';
utterance.lang = 'en-UK';
utterance.rate = 1;
utterance.volume = 1;
utterance.pitch = 1;

document.querySelector('button').addEventListener('click', () => {
  speechSynthesis.speak(utterance);
});
