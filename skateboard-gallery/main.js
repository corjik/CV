var links = Array.from(document.getElementsByTagName('a'));

for (var i=0;i<links.length;i++){
	links[i].addEventListener("click", setCurrent);
};

function setCurrent(event){
	event.preventDefault();
	removeCurrent();
	event.currentTarget.classList.add("gallery-current");
	picHref = event.currentTarget.href;
	picText = event.currentTarget.getElementsByTagName('img')[0].title;
	setPic(picHref,picText);
}

function removeCurrent(){
	for (var i=0;i<links.length;i++){
	links[i].classList.remove("gallery-current");
	};
};

function setPic(href,text) {
	var pic = document.getElementById('view');
	pic.src = href;
	document.getElementsByTagName('h4')[0].innerHTML = text;
}