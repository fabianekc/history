'use strict';

var url = document.location.origin;
if (url && url != "") {
  chrome.storage.local.get("pia_store", function (result) {
    if (result) {
      console.log(url);
      var pia_store = result.pia_store;
      $.post(pia_store, { type: "history", value: url });
    }
  });
}
