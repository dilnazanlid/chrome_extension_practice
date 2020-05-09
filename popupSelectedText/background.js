
chrome.runtime.onMessage.addListener(received);

window.selectedWord = "Nothing";

function received(request, sender, sendResponse){
  console.log(request);
  selectedWord = request;
}
