

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


function init(){
    //console.log("init: fin chargement page"); //trace d'execution
    refSaisie = document.getElementById("saisie");
    refVisuel = document.getElementById("cadreVisuel");
    refAutomatiquement = document.getElementById("automatiquement");
    refImgLoad = document.getElementById("imgLoad");
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

function annulerSaisieAuto(){

}

(function(global){

    function makeHTML(){

    }

    document.addEventListener("DOMContentLoaded", function (event) {
    
    });

})(window);