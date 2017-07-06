var prod = 0;
var fullprice = 0;
var btn = document.querySelectorAll(".add");

for (i = 0; i < btn.length; i++){
	btn[i].onclick = function(){
		var price = +this.dataset.price;
		fullprice = fullprice + price;
		prod++
		changeView(fullprice, prod)
	};
};

function changeView(price,cart){
	var cartSpot = document.querySelector("#cart-count");
	var priceSpot = document.querySelector("#cart-total-price");
	cartSpot.innerHTML = cart;
	priceSpot.innerHTML = getPriceFormatted(price);
};