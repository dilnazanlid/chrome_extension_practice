console.log("Yeas");

    var elts = document.getElementsByTagName('img');
    for (var i = 0; i < elts.length; i++) {
      elts[i].src = chrome.extension.getURL("download.jpeg");
    }
