var useBillAddressCheckbox = document.querySelector('#use-bill-address');
var submit = document.querySelector('#submit');
var billName = "";
var billStreet1 = "";
var billStreet2 = "";
var billCity = "";
var billState = "";
var billZipCode = "";
var billCountry = "";

useBillAddressCheckbox.onclick = function (e) {
	e.preventDefault();
	// pop up the shipping address form fill out
}

submit.onclick = function () {
	alert("All of your information was valid, right? I'll just go ahead and assume that it is ;)\n\nThanks for your submission!");
};