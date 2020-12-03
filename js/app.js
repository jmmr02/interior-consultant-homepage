const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".close-button");
const container = document.querySelector(".container");
const body = document.querySelector("body");

hamburgerMenu.addEventListener("click", () => {
	console.log("Clicked!");
	mobileMenu.style.width = "100vw";
	hamburgerMenu.style.display = "none";
	closeButton.style.display = "block";
});

closeButton.addEventListener("click", () => {
	mobileMenu.style.width = "0";
	hamburgerMenu.style.display = "block";
	closeButton.style.display = "none";
});
