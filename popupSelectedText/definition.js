function setup(){
  noCanvas();
  let bgPage = chrome.extension.getBackgroundPage();
  let word = bgPage.selectedWord.trim();
  let translation = "NotTranslated";
  fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "google-translate1.p.rapidapi.com",
		"x-rapidapi-key": "08c06759d0msh70eaeb82c621171p1ad7e2jsnf1f05aefb7dc",
		"content-type": "application/x-www-form-urlencoded"
	},
	"body": {
		"source": "en",
		"q": "Drum",
		"target": "ru"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log("Error!");
});
  let pElem = createP(translation);
  pElem.style = "font-size : 70pt; border: 1px solid black;";
}
