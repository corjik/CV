
document.addEventListener('keydown', showPanel);
document.addEventListener('keydown', secret);

var secretWord = [89,84,78,74,75,74,85,66,90]
var i = 0;

function showPanel(event) { 
	if (event.code === "KeyT" && event.altKey && event.ctrlKey){
	document.getElementsByTagName('nav')[0].classList.toggle("visible");
	};
};

function secret(event){
	letter = event.keyCode;
	checkLetter();
	i++
	checkWord();
};

function checkLetter(){
	if (letter === secretWord[i]){
	}
	else{
		i = 0;
	};
};

function checkWord(){
	if (i === secretWord.length){
		document.getElementsByClassName('secret')[0].classList.add("visible");
		i = 0;
	};
};