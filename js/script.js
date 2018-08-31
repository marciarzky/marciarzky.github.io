$(function(){
	$('#hitung').on('click', function(){
		//ambil value dari input id milai1
		//simpan ke dalam varabel nilai1
		var nilai1= $('#nilai1').val();
		console.log(nilai1);
		//ambil value dari input id nilai2
		//simpan ke dalam variabel nilai2
		var nilai2= $('#nilai2').val();
		console.log(nilai2);
		//buat variabel hasil
		//isi dengan hasil penjumlahan
		//nilai1 dan nilai2
		var hasil= parseInt(nilai1) + parseInt(nilai2);
		console.log(hasil);
		// isikan isi dari variabel hasil
		// ke dalam input id hasil
		$('#hasil').val(hasil);
	})
})