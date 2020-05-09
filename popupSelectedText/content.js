console.log("Yeas");

window.addEventListener('mouseup', mouseSelected);

function mouseSelected(){
  var selected = window.getSelection().toString().trim();
  console.log(selected);
  if(selected.length > 0){
    chrome.runtime.sendMessage(selected);
  }
}
