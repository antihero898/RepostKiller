window.addEventListener('DOMContentLoaded', function(){
	console.log('loaded!');
	chrome.tabs.query({ active: true,currentWindow: true}, function (tabs) {
		console.log('beginning to send message');
	    chrome.tabs.sendMessage(tabs[0].id, {from: 'popup', subject: 'DOMInfo'}, function(data){ console.log(data); });
	});
});
