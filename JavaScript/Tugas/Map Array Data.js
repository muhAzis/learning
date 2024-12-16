var bykData;
var arr1 = [];
var jumlah = 0;
var hasil = [];
var ulang = true;

while(ulang){
	bykData = prompt("Berapa data yang ingin anda masukkan?");
	for(var i=0; i<bykData; i++){
		var data = parseInt(prompt("Masukkan data ke-"+(i+1)));
		arr1.push(data);
		data = 0;
	}

	function productArray(a){
		for(var i=0; i<arr1.length; i++){
			for(var j=0; j<arr1.length; j++){
				if(arr1[i]!=arr1[j]){
					if(jumlah==0){
						jumlah += arr1[j];
					}
					else{
						jumlah *= arr1[j];
					}
				}
				else{
				}
			}
			hasil.push(jumlah);
			jumlah = 0;
		}

		return 0;
	}

	productArray(bykData);
	console.log("productArray(["+arr1+"]) --> ["+hasil+"]");
	hasil = [];
	arr1 = [];
	ulang = confirm("Apakah anda ingin mengulang?")
}
