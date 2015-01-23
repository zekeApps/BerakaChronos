var $buttonShowMenu = document.getElementById('showMenu');
var $buttonHideMenu = document.getElementById('hideMenu');
var $menu = document.getElementById('menu');
var $body = document.querySelector('body');

var body = new Hammer($body);

body.on('panright', showMenu);
body.on('panleft', hideMenu);
function showMenu() {
	console.log('Muestra el menu');
	$menu.classList.add('is-active');
	$buttonShowMenu.classList.remove('is-active');
	$buttonHideMenu.classList.add('is-active')
}

function hideMenu(){
	console.log('Esconde el menu')
	$menu.classList.remove('is-active');
	$buttonHideMenu.classList.remove('is-active');
	$buttonShowMenu.classList.add('is-active');

}
$buttonShowMenu.addEventListener("click", showMenu);
$buttonHideMenu.addEventListener("click", hideMenu);