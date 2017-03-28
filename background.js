chrome.runtime.onMessage.addListener((request, sender) => { console.log('went to onMessage');
  chrome.tabs.update(sender.tab.id, { url: request.redirect });
});

chrome.browserAction.onClicked.addListener(function () { console.log('still heard the click');
  chrome.tabs.create({ url: chrome.runtime.getURL('./views/index.html') });
});

// chrome.browserAction.onClicked.addListener(() => {
//   chrome.tabs.create({ url: chrome.runtime.getURL('./views/index.html') });
// });