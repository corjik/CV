const list = document.querySelectorAll('.list-block li input');
const listBlock = document.querySelector('.list-block');

for (elem of list) {
  elem.addEventListener('change', count);
};

count();

function count() {
  let counter = 0;
  for (elem of list) {
    if (elem.checked) {
      counter++;
    };
  };
  checkFull(counter);
  document.getElementsByTagName('output')[0].value = counter + ' из ' + list.length;  
};

function checkFull(num) {
  if (num === list.length) {
    listBlock.classList.add('complete');
  }
  else {
    listBlock.classList.remove('complete');
  };
};