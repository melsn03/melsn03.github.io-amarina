// Récupération de tous les éléments qui vont changer de couleur
const overlayJ = document.querySelectorAll(".cls-1");

// Ajout de la fonction changeColor à tous les éléments cliquables
var elJ = document.getElementsByClassName("colorJ");
var restColorJ = document.getElementsByClassName("restColorJ");

for (var i = 0; i < elJ.length; i++) {
    elJ[i].onclick = changeColorJ;
}

for (var i = 0; i < restColorJ.length; i++) {
    restColorJ[i].onclick = changeColorJ;
}

// Définition de la fonction changeColor
function changeColorJ(e) {
    // Récupérer la couleur hexadécimale
    let hexJ = e.target.getAttribute("data-hex");

    // Parcourir tous les éléments avec la classe cls-1 et changer leur couleur
    overlayJ.forEach(function (element) {
        element.style.fill = hexJ;
    });
}
