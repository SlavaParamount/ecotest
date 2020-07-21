let button = document.getElementsByClassName("burger")[0];
let menu = document.getElementsByClassName("main-menu")[0];
const ACTIVE_MENU_CLASS = "main-menu-active";
const ACTIVE_BURGER_CLASS = "burger-active"

function turnMenu() {
	button.classList.toggle(ACTIVE_BURGER_CLASS);
	menu.classList.toggle(ACTIVE_MENU_CLASS);
}

button.addEventListener("click", turnMenu);

