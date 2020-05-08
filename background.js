
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
  var msg = {message: "Works"}
  chrome.tabs.sendMessage(tab.id, msg);
}
