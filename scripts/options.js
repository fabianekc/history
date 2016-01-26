'use strict';

function loadOptions() {
  chrome.storage.local.get("pia_store", function (result) {
    if (result) {
      var pia_store = result.pia_store
      console.log("read config");
      console.log(pia_store);
      document.getElementById("pia_store").value = pia_store;
    } else {
      document.getElementById("pia_store").value = "";
    }
  });
}

function saveOptions() {
  console.log("saving options");
  var pia_store = "";
  pia_store = document.getElementById("pia_store").value;
  var obj = {};
  obj['pia_store'] = pia_store;
  chrome.storage.local.set(obj);
  console.log(pia_store);

}

loadOptions();

document.getElementById("save").addEventListener("click", saveOptions);
