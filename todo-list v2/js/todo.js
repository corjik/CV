const list = document.querySelectorAll('input');
const done = document.querySelector('.done');
const undone = document.querySelector('.undone');

for (let elem of list) {
  elem.addEventListener('click', switchState);
};

function switchState(event) {
  let moveLabel = this.parentElement;
  if (this.hasAttribute('checked')) {
    this.removeAttribute('checked');
    undone.appendChild(moveLabel);
  }
  else {
    this.setAttribute('checked',true);
    done.appendChild(moveLabel);
  };
}