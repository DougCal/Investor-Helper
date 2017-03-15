chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'woohoo') {

        // Call the specified callback, passing
        // the web-page's DOM content as argument
        //sendResponse(document.all);
    }
});

document.body.style.fontFamily = 'Sans-Serif';

console.log(document.body.style);










// let tabId;
//
// chrome.tabs.query({
//   active: true,
//   currentWindow: true
// }, function(tabs){
//   tabId = tabs[0].id;
//   chrome.tabs.insertCSS(tabId, {
//     code: "background-color"
//   })
// })
//
// console.log(tabId);
