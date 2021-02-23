

//C'est une bonne practique de déclarer toutes les variables et les initialiser
var refSaisie = null;
var refVisuel = null;
var refAutomatiquement = null;
//propriete checked permet savoir l'information de la case à cocher 
/*
keyup -->
keydown
keypress
*/
var refImgLoad = null;
var refBulle = null;

function init(){
    //console.log("init: fin chargement page"); //trace d'execution
    refSaisie = document.getElementById("saisie");
    refVisuel = document.getElementById("cadreVisuel");
    refAutomatiquement = document.getElementById("automatiquement");
    refImgLoad = document.getElementById("imgLoad");
    refBulle = document.getElementById("infoBulle");
}

function actualiser(){
    console.log("actualiser");
    //recuperer le contenu du textaerea
    var contenu = refSaisie.value;
    //console.log("contenu: "+ contenu);
    //ecrire ce contenu dans le #cadreVisuel
    refVisuel.innerHTML = contenu;
}

function saisir(){
    if(refAutomatiquement.checked == true){
        console.log("check true");
        actualiser();
    }

}

function toggleImage(){
    //inverser l'état de visibilité de l'image
    if(refAutomatiquement.checked ==true){
        refImgLoad.style.display = "inline";
    }
    else {
        refImgLoad.style.display= "none";
    }
}

//si on appuie sur escape, la case disparaite 
function annulerSaisieAuto(contexte) {
	console.log("annulerSaisieAuto");
	// comment savoir quelle est la touche qui a été appuyée ?
	console.log(contexte);

	// https://caniuse.com permet de trouver quelle propriété est la plus standard
	console.log("which" + contexte.which);
	console.log("keyCode" + contexte.keyCode);
	console.log("code" + contexte.code);

	if (contexte.code == "Escape") {
		refAutomatiquement.checked = false;
		toggleImage();
	}

}

function survoler(contexte){
    console.log(contexte.target.id);
    //clientX, client Y: coordonnées souris sur l'écran 
    //quand je survole la banniere (#nom)? quand le buttom?
    //quel est l'element survole?
    //contexte.target
    var elementID= contexte.target.id;
    
    switch(elementID){
        case "buttonActu": 
            refBulle.innerHTML = "cliquer pour actualiser";
            break;
        case "automatiquement": 
            refBulle.innerHTML = "cocher pour actualiser";
            break;
        case "labelAutour": 
            refBulle.innerHTML = "cliquer pour cocher";
            break;
        default:
            //refBulle.innerHTML= "";
           return;    
    }
    //if(refBulle.innerHTML!=""){
    refBulle.style.top=(parseInt(contexte.clientY) +15) + "px";
    console.log(contexte.clientY);

    //window.innerWidth pour calculer et connaitre la tailler de l'écran
    if(contexte.clientX < window.innerWidth/2) {
        //bulle a droite
        refBulle.style.left=(parseInt(contexte.clientX)) + "px";
        refBulle.style.right="";
    }
    else{
        //bulle a gauche
        refBulle.style.left ="";
        refBulle.style.right=(parseInt(window.innerWidth) - parseInt(contexte.clientX)) + "px";
        
    }
    refBulle.style.display = "inline";

    //cacher la boule dans 2 seconde
    window.setTimeout(cacherBulle,1000)
}


function cacherBulle(){
    refBulle.style.display = "none";
}

(function(global){

    function makeHTML(){

    }

    document.addEventListener("DOMContentLoaded", function (event) {
    
    });

})(window);