// Récupération de l'élément qui va changer de couleur
const overlay = document.getElementById("product-shape");
// Ajout de la fonction changeColor à tous les éléments cliquable
var el = document.getElementsByClassName("color");
var restColor = document.getElementsByClassName("restColor")
for (var i = 0; i < el.length; i++) {
el[i].onclick = changeColor;

}
for (var i = 0; i < restColor.length; i++) {
restColor[i].onclick = changeColor;

}



// définition de la fonction changeColor
function changeColor(e) {
// get the hex color
let hex = e.target.getAttribute("data-hex");
// set the hex color
overlay.style.fill = hex;
}

