var btn = document.getElementsByTagName('li');
var playlist = ["first.mp3","second.mp3","third.mp3","fourth.mp3","fifth.mp3"];
var state = "middle";

for (i = 0; i < btn.length; i++){
var music = btn[i].getElementsByTagName("audio")[0];
btn[i].song = playlist[i];
		btn[i].onclick = function(){
		this.getElementsByTagName("audio")[0].src = "sounds\\"+state+"\\"+this.song;
		this.getElementsByTagName("audio")[0].play();
	};
};

document.addEventListener('keydown', changeState);
document.addEventListener('keyup', changeMiddle);

function changeState(event){
	switch (event.key){
		case "Shift":
		state = "higher"
		changeCode(state);
		break;
		case "Alt":
		state = "lower"
		changeCode(state);
		break;
		default:
		state="middle";
	};
};

function changeMiddle(event) {
	state = "middle";
	if (document.getElementsByClassName('set')[0].classList.contains("higher")){
		document.getElementsByClassName('set')[0].classList.remove("higher");	
		document.getElementsByClassName('set')[0].classList.add("middle");
	};
	if (document.getElementsByClassName('set')[0].classList.contains("lower")){
		document.getElementsByClassName('set')[0].classList.remove("lower");	
		document.getElementsByClassName('set')[0].classList.add("middle");
	};	
};

function changeCode(newState){
	changeMiddle();
	state = newState;
	document.getElementsByClassName('set')[0].classList.remove("middle");
	document.getElementsByClassName('set')[0].classList.add(state);
};