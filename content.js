setInterval(Array.from($(document).find('*')).forEach((node) => {
  if (node.text === 'SNAP') { console.log('passed if statement');
    chrome.runtime.sendMessage({
      redirect: 'https://simonehr.files.wordpress.com/2013/11/stopsign.jpg',
    });
  }
}), 1000);

chrome.browserAction.onClicked.addListener(() => { console.log('heard the click');
  chrome.runtime.sendMessage({
    message: 'run url',
  });
});

