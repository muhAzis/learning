var angka1 = 3, angka2 = 5;
var jml1 = 0, jml2 = 0;
var input;
var hsl = [];
var hasil = [];
var hasilAkhir;
var jumlah = 0;
var ulang = true;

while(ulang){
	input = prompt("Masukkan angka batas multiple:");
	function solution(a){
		while((jml1+angka1)<a){
			jml1 += angka1;
			hsl.push(jml1);
		}
		while((jml2+angka2)<a){
			jml2 += angka2;
			hsl.push(jml2);
		}
		hsl.sort(function(a,b){return a-b;});
		hasil = [...new Set(hsl)];
		hasilAkhir = hasil.join(" + ");

		for(var i=0; i<hasil.length; i++){
			jumlah += parseInt(hasil[i]);
		}

		return jml1 = 0, jml2 = 0, hsl = [], a = 0;
	}

	solution(input);
	console.log("solution("+input+") // => "+jumlah+" = "+hasilAkhir);
	jumlah = 0;
	hasil = [];
	hasilAkhir = 0;
	ulang = confirm("Apakah ingin mengulang?");
}
