const books = new XMLHttpRequest();
books.open('GET', 'https://netology-fbb-store-api.herokuapp.com/book');
books.send();
books.addEventListener("load", onLoad);

function onLoad(){
	if (books.status === 200) {
	booksList = JSON.parse(books.responseText);
	addNewLi(booksList);
	};
};

function addNewLi(list){

for (i = 0; i < list.length; i++) {
	const { title, author, info, price, cover } = list[i];
	const newBook = document.createElement("li");
	document.getElementById('content').appendChild(newBook);

	const { dataset } = newBook;
	dataset.title = title;
	dataset.author = author.name;
	dataset.info = info;
	dataset.price = price;
	newBook.innerHTML = `<img src="${ cover.small }">`;
 };
 };
	// for (i = 0; i < list.length; i++){
	// 	var newBook = document.createElement("li");
	// 	document.getElementById('content').appendChild(newBook);
	// 	newBook.dataset.title = list[i].title;
	// 	newBook.dataset.author = list[i].author.name;
	// 	newBook.dataset.info = list[i].info;
	// 	newBook.dataset.price = list[i].price;
	// 	newBook.innerHTML = '<img src="' + list[i].cover.small + '">';
	// };



