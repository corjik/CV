'use strict'
const wsCon = new WebSocket('wss://echo.websocket.org');
const messageBox = document.querySelector('.message-box');
const nickName = prompt('What is your name?');//Узнаем ник
const button = document.querySelector('.message-submit');
let i = 0 //localstorage number

button.addEventListener('click', sendMessage);
wsCon.addEventListener('message', getMessage) 


//Функция получения сообщения
function getMessage() {
  let message = document.querySelector('.messages-templates .message-incoming').cloneNode(true);
  let getItem = JSON.parse(event.data)
  updateTime(message,getItem.author);
  message.querySelector('.message-text').textContent = getItem.message;
  addMessage(message);
  addLocal(getItem);
};

//Функция обновления времени сообщения и имени отправителя
function updateTime(node,name) {
    let now = new Date();
    let hours = now.getHours() <10 ? '0'+now.getHours() : now.getHours()
    let minutes = now.getHours() <10 ? '0'+now.getMinutes() : now.getMinutes()
    node.querySelector('.timestamp').textContent = hours + ':' + minutes + ' ' + name;
};


//Функция добавления нового сообщения
function addMessage(text) {
  messageBox.appendChild(text);
  messageBox.scrollTop=9999;
};


//Функция отправки сообщения
function sendMessage() {
  let myMessage = document.querySelector('.messages-templates .message-personal').cloneNode(true);
  event.preventDefault();
  let messageText = document.querySelector('.message-input').value;
  let sendItem = {};
  sendItem.author = nickName;
  sendItem.message = messageText;
  wsCon.send(JSON.stringify(sendItem));
  updateTime(myMessage, sendItem.author);
  myMessage.querySelector('.message-text').textContent = messageText;
  addMessage(myMessage);
  document.querySelector('input').value ='';
  addLocal(sendItem);
};

//Добавление сообщения в localstorage и добавление строки в файл
function addLocal(item) {
  localStorage.setItem('message'+i, JSON.stringify(item));
  i++

  let request = new XMLHttpRequest();
  request.open('POST', 'save.php',true);
  let data = JSON.stringify(item)
  request.setRequestHeader("Content-Type", "application/json");
  request.send(data);
};