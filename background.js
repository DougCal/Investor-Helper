// A function to use as callback
function clickAction(domContent) {

    let newDom = domContent.replace(/<|>|"/, '\\$&');
    console.log(JSON.parse(newDom));








    domContent.forEach(node => {
      if (node.style.fontFamily) node.style.fontFamily = "Arial";
    })
    // domContent.onClick = function(){
    //   console.log('You Clicked Me!');
    // };
    // console.log('domContent.onClick:', domContent.onClick);
}


chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, {message: 'blar'}, clickAction);
});

// // Regex-pattern to check URLs against.
// // It matches URLs like: http[s]://[...]stackoverflow.com[...]
// var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?stackoverflow\.com/;
//
// // A function to use as callback
// function doStuffWithDom(domContent) {
//     console.log('I received the following DOM content:\n' + domContent);
// }
//
// // When the browser-action button is clicked...
// chrome.browserAction.onClicked.addListener(function (tab) {
//     // ...check the URL of the active tab against our pattern and...
//     if (urlRegex.test(tab.url)) {
//         // ...if it matches, send a message specifying a callback too
//         chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
//     }
// });
