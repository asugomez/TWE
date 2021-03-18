/**
 * variables
 */

var refChampEntree = null;

var refButMenu = null;
var refTitre1 = null;
var refTitre2 = null;
var refParagraphe = null;
var refImage = null;

var refMenuID =null;

var refEdition = null;
/**
 * functions
 */

function init(){
    refChampEntree = document.getElementById("champ-entree");
    refButMenu = document.getElementById("button-menu");
    //console.log(refButMenu.innerHTML);
    console.log(refChampEntree);
    refMenuID = document.getElementById("menuID");


    refTitre1 = document.getElementById("titre1");
    //console.log(refTitre1.innerHTML);
    
    refTitre2 = document.getElementById("titre2");
    refParagraphe = document.getElementById("paragraph");
    refImage = document.getElementById("image");


    refEdition = document.getElementById("edition");
    //console.log(refEdition.innerHTML);

}

function valider(){
    content = refChampEntree.innerHTML;
    /**
     * if menu deroulant == titre1 --> 
     * if titre2 -->
     * paragrph -->
     * imge-->

}

//fonction qui change le nom du bouton
function changerNom(nom){
    refButMenu.innerText = nom;
}

function changerNomT1(){
    changerNom(refTitre1.innerHTML);
}

function changerNomT2(){
    changerNom(refTitre2.innerHTML);
}

function changerNomPar(){
    changerNom(refParagraphe.innerHTML);
}

function changerIm(){
    changerNom(refImage.innerHTML);
}

function emptyEdition(){
    refEdition.innerHTML.value ="";
}

//semi-code from tryit_v6
function appuiEntree(contexte){
    // Number 13 is the "Enter" key on the keyboard
    if (contexte.keyCode === 13)  {
        valider();
        emptyEdition();
	}

}

//semi-code from tryit_v6
function appuiEscape(contexte){
    if (contexte.code == "Escape") {
		emptyEdition();
	}

}