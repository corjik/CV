
const nowActive = document.querySelector(".active");
const btns = document.querySelectorAll("a");
// Установка начального поля email
document.addEventListener("DOMContentLoaded", changeView(nowActive.getAttribute("href")));
var cashCheck = {}; //объект для чека кэша

for (i = 0; i < btns.length; i++){
  btns[i].addEventListener('click', onClick);
};

function onClick(event) {
  event.preventDefault();
  removeActive();
  this.classList.toggle("active");
  tempHref = this.getAttribute("href");
  console.log(cashCheck[tempHref]);

  if (cashCheck[tempHref] != undefined){
    document.getElementById("content").innerHTML = cashCheck[tempHref];
    console.log("bingo");
  }
  else{    
  changeView(tempHref);
  };
};


function changeView(aHref){
  document.getElementById("content").innerHTML = "";
  togglePreloader();
  var xhr = new XMLHttpRequest(); 
  xhr.open('GET', aHref);
  xhr.send();
  xhr.addEventListener('load', onEnd);
  
  function onEnd(){
    togglePreloader();
    document.getElementById("content").innerHTML = xhr.responseText;
    cashCheck[aHref] = xhr.responseText;
    console.log(cashCheck);
  };
};

function togglePreloader(){
  document.getElementById("preloader").classList.toggle('hidden'); 
};

function removeActive() {
  for (i = 0; i < btns.length; i++){
    btns[i].classList.remove('active');
  };
};


