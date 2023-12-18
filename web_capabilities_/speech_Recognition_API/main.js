const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = 'fr-CA';
recognition.addEventListener('result', (event) => {
  if ((event.type = 'result')) {
    event.results.forEach((result) => {
      const confidence = result.confidence * 100;
      const text = result.transcript;
      console.log(text, confidence);
    });
  }
});
