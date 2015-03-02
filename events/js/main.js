function init(){

	//var voce = new Array('banana', 'kruska', 'tresnja');

	var voce2 = ['jabuka', 'sljiva', 'lubenica', 'tresnja'];

	voce2.pop(); //izbacuje poslednji elemenat
	voce2.push('banana', 'malina'); //dodaje elemente na kraj

	voce2.shift(); //izbacuje prvi elemenat
	voce2.unshift('kivi', 'mango'); // ubacuje elemente na pocetak niza

	voce3 = ['jabuka', 'sljiva', 'lubenica', 'tresnja'];
	voce3.splice( 0, 0, 'ubaceno');

	console.log( voce3 )

}