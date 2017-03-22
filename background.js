chrome.runtime.onMessage.addListener(function (msg, sender) {
 console.log('inside onMessage callback, msg:', msg);
  if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
  	console.log('rekt from background');
    //chrome.pageAction.show(sender.tab.id);
  }
});
