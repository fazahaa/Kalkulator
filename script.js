function hitungLingkaran() {
    var jarijari = parseFloat(document.getElementById("jarijari").value);

    var luaslingkaran = 3.14 * jari * jari;
    var kelilinglingkaran = 2 * 3.14 * jari;

    var hasil = document.getElementById("hasil");
    hasil.innerHTML = "Luas Lingkaran: " + luaslingkaran + "<br>Keliling: " + kelilinglingkaran;

}