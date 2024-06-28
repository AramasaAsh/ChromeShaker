chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'setAlarm') {
    const minutes = message.minutes;
    const alarmName = `shakeAlarm_${Date.now()}`;

    chrome.alarms.create(alarmName, { delayInMinutes: minutes });
    chrome.alarms.onAlarm.addListener(alarm => {
      if (alarm.name === alarmName) {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'shakeScreen' });
        });
      }
    });
  }
});
