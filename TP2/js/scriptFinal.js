/**
 * Variables
 */

var refTextWrite = null;
var refEdition = null;
var rfCbAuto = null;

var lastTP = false;

var histo = [""];
var last = 0;

/**
 * Functions
 */

function init(){
    refTextWrite = document.getElementById("textWrite");
    console.log(refTextWrite.value);
    refEdition = document.getElementById("edition");
    console.log(refEdition.innerHTML);
    refCbAuto = document.getElementById("cbAuto");

}


function write(){
    var content = refTextWrite.value;
    console.log(content);
    refEdition.innerHTML = content;

}

function actualiser(){
    write();
    ajouter();

}

function automatiquement(){
    if(refCbAuto.checked){
        actualiser();
    }
}

function periodiquement(){
    actualiser();
    if (refCbAuto.checked) {
		 window.setInterval(actualiser, 2000);
	} 

}

function ajouter(){
    var content = refTextWrite.value;
    if(histo[last] !=content){
        histo.push(content);
        last +=1;
    }
}

function back(){
    if(last>0){
        last -=1;
        refTextWrite.value = histo[last];
    }
}

function forward(){
    if(last<histo.length){
        last+=1;
        refTextWrite.value = histo[last];
    }

}
