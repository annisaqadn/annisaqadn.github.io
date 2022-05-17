function tampilData() {
    var nama = document.getElementById("nama").value;
    var umur = document.getElementById("umur").value;
    var alamat = document.getElementById("alamat").value;
    var jeniskelamin = document.querySelector("input[name=jeniskelamin]:checked").value;
    var nilai = document.getElementById("nilai").value;
    var produk = document.getElementsByName("produk");
    var daftarProduk = ''

    for (var produk2 of produk){
        if (produk2.checked){
            daftarProduk += ', '+ produk2.value
        }
    }

    daftarProduk = daftarProduk.substring(1)

    var pembelian = document.getElementsByName("pembelian");
    var daftarPembelian = ''

    for (var pembelian2 of pembelian){
        if (pembelian2.checked){
            daftarPembelian += ', '+ pembelian2.value
        }
    }

    daftarPembelian = daftarPembelian.substring(1)

    var masukan = document.getElementById("masukan").value;

    alert(
        "Terima kasih telah mengisi survey kepuasan pelanggan Apolaroid20. Berikut data yang anda isi:" +
        "\n\nNama   : " +
        nama +
        "\nUmur : " +
        umur +
        "\nAlamat : " +
        alamat +
        "\nJenis Kelamin : " +
        jeniskelamin +
        "\nNilai : " +
        nilai +
        "\nMendapatkan info produk Apolaroid20 dari : " +
        daftarProduk +
        "\nMembeli produk : " +
        daftarPembelian +
        "\nReview produk atau Kritik dan Saran untuk Apolaroid20 : " +
        masukan
    );
}