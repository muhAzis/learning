// Membuat object
// 1. Object Literal
var mhs1 = {
	nama : "Muhammad Abdul Azis",
	nik : "3310120505000003",
	email : "muhabdulazis555@gmail.com",
	jurusan : "Teknologi Instrumentasi"
}

var mhs2 = {
	nama : "Ikrima Rai Saiddah",
	nik : "3310121312990003",
	email : "ikrimarai@gmail.com",
	jurusan : "Teknologi Instrumentasi"
}

// 2. Function Declaration
function buatObjectMahasiswa(nama, nik, email, jurusan){
	var mhs = {};
	mhs.nama = nama;
	mhs.nik = nik;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs;
}

var mhs3 = buatObjectMahasiswa("Mas Brewook", "3310120404220003", "brewookmas@gmail.com", "Teknologi Pangan");

// 3. Constructor
function Mahasiswa(nama, nik, email, jurusan) {
	this.nama = nama;
	this.nik = nik;
	this.email = email;
	this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa("Zubaindri", "3310123022450003", "zubaindri@gmail.com", "Teknologi Pangan");



// THIS = berisi "window" atau object global
console.log(this);
console.log(window);
console.log(window === this);

// THIS dalam function declaration
function halo() {
	console.log(this);
	console.log("halo");
}
halo(); //bisa juga ditulis window.halo() atau this.halo(), fungsinya untuk mengembalikan object global

// THIS dalam object literal
var obj = {};
obj.halo = function() {
	console.log(this);  //yang dikembalikan adalah objek beserta isinya serta methodenya (objek yang bersangkutan)
	console.log("halo")
}
obj.halo();

// THIS dalam constructor
function Halo() {
	console.log(this);
	console.log("halo");
}
new Halo(); //mengembalikan objek yang baru <----------
// misalkan
// var obj1 = new Halo();	maka "this" adalah obj1
// var obj2 = new Halo();	maka "this" adalah obj2