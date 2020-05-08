console.log("Yeas");

chrome.runtime.onMessage.addListener(received);

function received(request, sender, sendResponse){
  console.log(request.message);
  if(request.message === "Works"){
    var elts = document.getElementsByTagName('img');
    for (var i = 0; i < elts.length; i++) {
      elts[i].src = chrome.extension.getURL("download.jpeg");
    }
  }
}
