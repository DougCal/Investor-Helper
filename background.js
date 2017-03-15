// A function to use as callback
function searchDom(domContent) {
    console.log(domContent);
}

// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) {
  console.log('registered click on background.js');

  chrome.tabs.sendMessage(tab.id, {text: 'woohoo'}, searchDom);
});
