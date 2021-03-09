

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

var refButtonActu = null;
var reFlecheID = null;

var lastTO = false;
var lastTP = false;

var historique = [""]; //var cache  --> it's an array --> operations: push, pop, length
var curseur = 0;
var mode = "manuel";
var iCache = 0; //indice tout ce que commence par "i", tout que commencer par "num" est un numero
/*
arr.length
.push
*/

function init(){
    //console.log("init: fin chargement page"); //trace d'execution
    refSaisie = document.getElementById("saisie");
    refVisuel = document.getElementById("cadreVisuel");
    refAutomatiquement = document.getElementById("automatiquement");
    refImgLoad = document.getElementById("imgLoad");
    refBulle = document.getElementById("infoBulle");

    refButtonActu = document.getElementById("buttonActu");
    refFlecheID = document.getElementById("flecheID");
    //lire l'état de la case (imposer un etat initia fixe) --> pour declancher la case (partie UX question 4eme version)
}

function actualiser(){
    console.log("actualiser");
    //recuperer le contenu du textaerea
    var contenu = refSaisie.value;
    //console.log("contenu: "+ contenu);
    //ecrire ce contenu dans le #cadreVisuel
    refVisuel.innerHTML = contenu;
}

function actualiserPeriodiquement(){
    actualiser();
    toggleImage();
    if(refAutomatiquement.checked){
        //mode <-- automatique
        mode = "auto";
        refButtonActu.value = "Sauvegarder";
        console.log("estoy aquiiiiiiiii");
        console.log(refFlecheID);
        refFlecheID.style.display = "inline";
        if(lastTP != false) clearInterval(lastTP);
        lastTP = window.setInterval(actualiser,3000);
        
    } else{
        //mode <-- manuel
        mode = "manuel";
        refButtonActu.value = "Actualiser";
        refFlecheID.style.display = "none";
        if(lastTP!= false) clearInterval(lastTP);
        lastTP = false;
    }
        
}


function saisir(){
    //V4: on veut desactiver ce traitment 
    if(refAutomatiquement.checked == true){
        //console.log("check true");
        actualiser();
        //actualiserPeriodiquement();
    }

}

function toggleImage(){
    //inverser l'état de visibilité de l'image
    if(refAutomatiquement.checked){
        refImgLoad.style.display = "inline";
    }
    else {
        refImgLoad.style.display= "none";
    }
}

var observateur; 
function annulerSaisieAuto(contexte) {
    // console.log("Appui sur " + contexte.which);
    observateur = contexte; 
    //key keyCode which code représentent la touche appuyée 
    // ESC <=> 27 
    if (contexte.which == 27) {
        refAutomatiquement.checked = false;
        actualiserPeriodiquement();
        toggleImage();
        // Quand on annule, on utilise les élements du visuel pour les réafficher dans le cadre 
        refTxtSaisie.value = refCadreVisuel.innerHTML;

        // https://caniuse.com permet de trouver quelle propriété est la plus standard
        /*console.log("which" + contexte.which);
        console.log("keyCode" + contexte.keyCode); 
        console.log("code" + contexte.code);*/

        /*if (contexte.code == "Escape") {
            refAutomatiquement.checked = false;
            
            actuPeriodique();
            toggleImage();
        }*/
    }
}

//si on appuie sur escape, la case disparaite 


function survoler(contexte){
    //console.log(contexte.target.id);
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
    //console.log(contexte.clientY);

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

function reculer(){

}

function avancer(){

}

function ajouter(contenu){
    historique.push(contenu);
}

function showHisto(){
    console.log("pos: "+curseur + "(" + historique.length + " elts)");
    var i;
    for(i=0;i<historique.length;i++){
        console.log("H["+i+"] : "+ historique[i]);
    }
}
(function(global){

    function makeHTML(){

    }

    document.addEventListener("DOMContentLoaded", function (event) {
    
    });

})(window);