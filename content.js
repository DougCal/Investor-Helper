chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
      const domArr = $(document).find('*');


      sendResponse(document.all[0].outerHTML);

});


Array.from($(document).find('*')).forEach(node => {
  //console.log(node.style.fontFamily === "");
  node.style.fontFamily = "Arial";
});







// // Listen for messages
// chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
//     // If the received message has the expected format...
//     if (msg.text === 'report_back') {
//         // Call the specified callback, passing
//         // the web-page's DOM content as argument
//         sendResponse(document.all[0].outerHTML);
//     }
// });









// // $( document ).mousemove((e) => {
// //   console.log('x-coord:', e.pageX, 'y-coord:', e.pageY);
// // })
//
// const doc = Array.from($( document ).find('*'));
//
// const divs = Array.from($(document).find('div'));
//
// divs.forEach(div => {
//   div.onClick = function(){
//     // console.log('click!!!');
//   }
//   // console.log(div.onClick);
// })
//
// // doc.forEach(node => {
// //   // if (node.tagName === "P") node.style.backgroundColor = "yellow";
// //   node.style.fontFamily = "Sans-Serif";
// //   node.style.fontStyle = "normal";
// //   console.log(node.tagName);
// // });








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
