chrome.runtime.onMessage.addListener(function (msg, sender, response) {  
  var numberRemoved = 0;

  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    $('.lazyLoadingList__list .soundList__item').each(function(index, element){
    	if ($(element).find('.soundContext__repost').length){
    		$(element).remove();
    		numberRemoved++;
    	}
    });
  }
  console.log('number removed: ', numberRemoved);
});
