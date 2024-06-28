chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'shakeScreen') {
    shakeScreen();
  }
});

function shakeScreen() {
  const shakeIntensity = 20;
  const shakeDuration = 500;
  const shakeInterval = 50;
  const originalStyles = document.body.style.cssText;

  let elapsed = 0;

  const shake = setInterval(() => {
    const x = (Math.random() - 0.5) * shakeIntensity;
    const y = (Math.random() - 0.5) * shakeIntensity;
    document.body.style.transform = `translate(${x}px, ${y}px)`;
    elapsed += shakeInterval;

    if (elapsed >= shakeDuration) {
      clearInterval(shake);
      document.body.style.cssText = originalStyles;
    }
  }, shakeInterval);
}
