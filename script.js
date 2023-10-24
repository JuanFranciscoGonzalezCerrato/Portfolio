
const preloader = document.getElementById("preloader");
const verPortfolioButton = document.getElementById("verPortfolio");
const content = document.getElementById("content");

// Mostrar el contenido cuando se hace clic en el botón
verPortfolioButton.addEventListener("click", function () {
	preloader.classList.add("hidden");
	content.style.display = "block";
});

