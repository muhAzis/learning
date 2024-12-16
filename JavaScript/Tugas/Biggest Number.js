var input;
var hasil;
var ulang = true;
var angka = [];

while(ulang){
	input = prompt("Masukkan 3 digit angka positif:");
	function maxRedigit(a){
		if(a.length==3){
			for(var i=0; i<a.length; i++){
				if(a[i]!="-"){
					angka.push(a[i]);
				}
				else{
					alert("Angka yang anda masukkan salah!");

					return hasil = null;
				}
			}
			angka.sort();
			angka.reverse();
			hasil = parseInt(angka.join(""));

			return angka = [];
		}
		else{
			alert("Angka yang anda masukkan salah!");

			return hasil = null;
		}
	}
	maxRedigit(input);
	console.log("maxRedigit("+input+") --> "+hasil);
	ulang = confirm("Apakah ingin mengulang?");
}
