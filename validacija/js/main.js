/*function validacija(){
	var greska = false; 

	var kelner = document.getElementById('kelner').value;
	if(!kelner) {
		upaliGresku('kelner');
		greska = true;
	} else {
		ugasiGresku('kelner');
	}

	var tea = document.getElementById('tea').value;
	if(isNaN(tea)) {
		upaliGresku('tea');
		greska = true;
	} else {
		ugasiGresku('tea');
	}

	var coffee = document.getElementById('coffee').value;
	if(isNaN(coffee)) {
		upaliGresku('coffee');
		greska = true;
	} else {
		ugasiGresku('coffee');
	}

	if (greska == true) {

	}
}

function upaliGresku(elemenat){
	document.getElementById("e_" + elemenat).style.display = "inline";
}

function ugasiGresku(elemenat){
	document.getElementById("e_" + elemenat).style.display = "none";
}*/

function checkIfNumber(el){
	var vrednost = document.getElementById(el).value;
	if(isNaN(vrednost)) {
		document.getElementById("e_" + el).style.display = "inline";
	} else {
		document.getElementById("e_" + el).style.display = "none";
	}
}

function checkIfExist(el){
	var vrednost = document.getElementById(el).value;
	if(!vrednost) {
		document.getElementById("e_" + el).style.display = "inline";
	} else {
		document.getElementById("e_" + el).style.display = "none";
	}
}


function checkIfEmail(el){
	var vrednost = document.getElementById(el).value;
	if(vrednost.indexOf("@") == -1  || vrednost.indexOf(".") == -1) {
		document.getElementById("e_" + el).style.display = "inline";
	} else {
		document.getElementById("e_" + el).style.display = "none";
	}
}


function checkIfPasswordMatch(el){
	var vrednost1 = document.getElementById(el).value;
	var vrednost2 = document.getElementById(el + "_r").value;
	if(vrednost1 != vrednost2) {
		document.getElementById("e_" + el + "_r").style.display = "inline";
	} else {
		document.getElementById("e_" + el + "_r").style.display = "none";
	}
}


function validacija(){
	checkIfExist('kelner');
	checkIfNumber('tea');
	checkIfNumber('coffee');
	checkIfEmail('email');
	checkIfPasswordMatch('password');
}




