

for (var i = 0; i < 10000; i++) {
	var trenutno = document.getElementById('mojdiv').style.left;
	trenutno = parseInt(trenutno) / 10;
	trenutno = trenutno + 1;
	document.getElementById('mojdiv').style.left = trenutno + "px";	
}