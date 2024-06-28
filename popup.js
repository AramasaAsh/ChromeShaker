document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.onclick = () => {
      const minutes = parseFloat(button.getAttribute('data-time'));
      chrome.runtime.sendMessage({ action: 'setAlarm', minutes: minutes });
    };
  });
});
