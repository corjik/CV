const articles = document.querySelector('.tabs-content').children;
const tabs = document.querySelector('.tabs-nav');
let template;

//Создание новых табов и добавление data-set
for (let elem of articles) {
  let name = elem.dataset.tabTitle;
  let icon = elem.dataset.tabIcon;
  addTab(name,icon);
  elem.classList.add('hidden');
};

//Удаляем "шаблонный" элемент
template = document.querySelector('.tabs-nav li');
tabs.removeChild(template);
const tabsList = document.querySelectorAll('.tabs-nav li');
const links = document.querySelectorAll('.tabs-nav li a');
//Активируем первый таб
articles[0].classList.remove('hidden');
tabs.children[0].classList.add('ui-tabs-active');

//Добавляем функцию на ссылки
for (let link of links) {
  link.addEventListener('click', activateTab);
};

//Смена таба
function activateTab(event) {
  event.preventDefault();
  hideAll();
  deactiveTabs();
  let cur = event.currentTarget.parentElement;
  cur.classList.add('ui-tabs-active');
  let tabName = cur.querySelector('a').dataset.tabTitle;
  for (content of articles) {
    if (content.dataset.tabTitle === tabName) {
      content.classList.remove('hidden');
    };
  };
};

//Добавление таба
function addTab(name,icon) {
  template = document.querySelector('.tabs-nav li').cloneNode(true);
  newTab = tabs.appendChild(template);
  newTab.children[0].classList.add(icon);
  newTab.children[0].dataset.tabIcon = icon;
  newTab.children[0].dataset.tabTitle = name;
  newTab.children[0].textContent = name;
}

//Скрываем все элементы
function hideAll() {
  for (elem of articles){
    if (elem.classList.contains('hidden') === false) {
    elem.classList.add('hidden');
    };
  };
}

//Деактивируем все табы
function deactiveTabs() {
  for (tab of tabsList) {
    if (tab.classList.contains('ui-tabs-active')){
    tab.classList.remove('ui-tabs-active');
    };
  };
}