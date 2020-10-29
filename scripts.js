/**
 * Verkefni 7 – Caesar dulmál
 */


const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;
//const LETTERS = ['A','Á','B','D','Ð','E','É','F','G','H','I','Í','J','K','L','M','N','O','Ó','P','R','S','T','U','Ú','V','X','Y','Ý','Þ','Æ','Ö'];
var hlidrun = 0;
/**
 * Byrja forrit.
 */
function start(){
	do{
		byrjun();	
	}while (confirm('aftur?'));
}

function byrjun() {
	let begin = prompt("Hvort viltu kóða eða afkóða streng? Skrifaðu ,,kóða'' eða ,,afkóða''");
	if(begin.toLowerCase() == 'kóða'){
		kóða();
	}
	else if(begin.toLowerCase() == 'afkóða'){
		afkóða();
	}
	else {
		alert('Veit ekki hvaða aðgerð ' + kóða + ' er. Reyndu aftur.');
	}

}

function kóða(){
	let hliðrun = prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1,31]');

	if (hliðrun >= 1 && hliðrun <= 31){
		hlidrun = hliðrun;
		loka();
	}
	else if (!Number.isInteger(hliðrun)){
		prompt(hliðrun + ' er ekki heiltala á bilinu [1,31]. Reyndu aftur.');
	}
	else (prompt(hliðrun +  'er ekki heiltala á bilinu [1,31]. Reyndu aftur.'));
}

function afkóða(){
	let hliðrun = prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1,31]');

	if (hliðrun >= 1 && hliðrun <= 31){
		hlidrun = hliðrun;
		lokaII();
	}
	else if (!Number.isInteger(hliðrun)){
		prompt(hliðrun + ' er ekki heiltala á bilinu [1,31]. Reyndu aftur.');
	}
	else (prompt(hliðrun +  'er ekki heiltala á bilinu [1,31]. Reyndu aftur.'));
}

function loka(){
	let str = prompt('Gefðu upp strenginn sem á að kóða með hliðrun ' + hlidrun);

	str = str.toLocaleUpperCase();

	if (str != ''){
		for(let i = 0; i<str.length;i++){

			if(LETTERS.includes(str[i])==false) {
				alert('Þú gafst upp stafi sem ekki er hægt að hliðra Reyndu aftur.');
			}

		}
		alert(encode(str,hlidrun));	
	}
	else{
		alert('Þú gafst ekki upp streng. Reyndu aftur.');
	
	}
}

 






function lokaII(){
	let str = prompt('Gefðu upp strenginn sem á að kóða með hliðrun ' + hlidrun);

	str = str.toLocaleUpperCase();

	if (str != ''){
		for(let i = 0; i<str.length;i++){

			if(LETTERS.includes(str[i])==false) {
				alert('Þú gafst upp stafi sem ekki er hægt að hliðra Reyndu aftur.');
			
			}

		}
		alert(decode(str,hlidrun));	
	}
	else{
		alert('Þú gafst ekki upp streng. Reyndu aftur.');
	
	}

}


// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits
start();

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, n) {
	let string = '';
	for(let i = 0; i<str.length; i++){
		let stafur = str.charAt(i);
		let positionLETTERS = LETTERS.indexOf(stafur);

		let number =positionLETTERS+parseInt(n);
		number = number %32;
		
		string +=LETTERS[number];
		//string +=LETTERS.charAt(number);
		
	}

  return string;
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n) {
	let string = '';
	let z = '';
	for(let i = 0; i<str.length; i++){
		let stafur = str.charAt(i);
		let positionLETTERS = LETTERS.indexOf(stafur);
		
		if((positionLETTERS-n)>=0) {z = LETTERS.charAt((positionLETTERS-n));}
		else {z = LETTERS.charAt(32+(positionLETTERS-n));}

		string += z;
	}
  return string;
}

console.log(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
console.log(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
console.log(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
console.log(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
console.log(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
console.log(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf'); 
	
