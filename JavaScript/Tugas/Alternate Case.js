var input;
var huruf = [];
var hasil;
var ulang = true;

while(ulang){
	input = prompt("Masukkan kalimat dengan huruf kecil atau besar atau campuran:");
	function alternateCase(a){
	for(var i=0; i<a.length; i++){
		if(a[i]==a[i].toUpperCase()){
			huruf.push(a[i].toLowerCase());
		}
		if(a[i]==a[i].toLowerCase()){
			huruf.push(a[i].toUpperCase());
		}
	}
	hasil = huruf.join("");

	return huruf = [];
	}

	alternateCase(input);
	console.log("alternateCase("+input+") => "+hasil);
	ulang = confirm("Apakah anda ingin mengulang?");
}