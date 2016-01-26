'use strict';

//chrome.browserAction.setBadgeText({text: 'New'});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "getOydHistoryConfiguration")
    sendResponse({
      pia: localStorage['pia_store'],
  });
  else
    sendResponse({}); // snub them.
});
