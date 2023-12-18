const wakeLock = await navigator.wakeLock.request();

wakeLock.addEventListener('release', () => {
  // It was released
});

wakeLock.release();
