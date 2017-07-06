const selectBox = document.querySelectorAll('select');
const source =  document.querySelector('#source');
const fromCur = document.querySelector('#from');
const toCur = document.querySelector('#to');
const result = document.querySelector('#result');
const currency = new XMLHttpRequest();

source.addEventListener('input', count);
fromCur.addEventListener('change', count);
toCur.addEventListener('change', count);

document.getElementById('content').classList.toggle('hidden');
togglePreloader();
currency.open('GET', 'https://neto-api.herokuapp.com/currency');
currency.send();
currency.addEventListener("load", onLoad);

function onLoad() {
  if (currency.status === 200) {
    currencyList = JSON.parse(currency.responseText);
    upgradeList(currencyList);
    togglePreloader();
    count();
  };
};

function upgradeList(array) {
  for (sel of selectBox){
    for (elem of array){
      var newCur = document.createElement("option");
      sel.appendChild(newCur);
      newCur.label = elem.code;
      newCur.value = elem.value;
      newCur.innerHTML = elem.title;
    };
  };
};

function togglePreloader() {
  document.getElementById('content').classList.toggle('hidden');
  document.getElementById('loader').classList.toggle('hidden');
};

function count() {
  var resultNum = source.value * fromCur.value / toCur.value;
  result.innerHTML = resultNum.toFixed(2);
};
