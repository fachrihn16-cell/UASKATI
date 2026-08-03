// ==============================
// DATA HARGA PRODUK
// ==============================

const hargaProduk = {

    "RTX 4060": 6500000,

    "AMD Ryzen 7": 4200000,

    "RAM Corsair 16GB": 1250000,

    "SSD NVME 1TB": 1600000,

    "Motherboard ASUS": 3800000,

    "Gaming Mouse": 2450000,

    "Mechanical Keyboard": 850000,

    "Monitor 165Hz": 2900000,

    "Power Supply 750W": 1450000

};

// ==============================
// FORMAT RUPIAH
// ==============================

function formatRupiah(angka){

    return "Rp " + angka.toLocaleString("id-ID");

}

// ==============================
// HITUNG TOTAL
// ==============================

function hitungTotal(){

    let produk = document.getElementById("pilihProduk").value;

    let jumlah = parseInt(document.getElementById("jumlah").value);

    if(isNaN(jumlah) || jumlah < 1){

        jumlah = 1;

        document.getElementById("jumlah").value = 1;

    }

    if(jumlah > 5){

        jumlah = 5;

        document.getElementById("jumlah").value = 5;

        alert("Maksimal pembelian adalah 5 produk.");

    }

    let harga = hargaProduk[produk];

    let subtotal = harga * jumlah;

    let ppn = subtotal * 0.11;

    let total = subtotal + ppn;

    document.getElementById("harga").value = formatRupiah(harga);

    document.getElementById("subtotal").innerHTML = formatRupiah(subtotal);

    document.getElementById("ppn").innerHTML = formatRupiah(ppn);

    document.getElementById("total").innerHTML = formatRupiah(total);

}

// ==============================
// VALIDASI EMAIL
// ==============================

function validEmail(email){

    let pola = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pola.test(email);

}

// ==============================
// TRANSAKSI
// ==============================

function transaksi(){

    let nama = document.getElementById("nama").value.trim();

    let email = document.getElementById("email").value.trim();

    let hp = document.getElementById("hp").value.trim();

    let produk = document.getElementById("pilihProduk").value;

    let jumlah = parseInt(document.getElementById("jumlah").value);

    let bayar = document.querySelector('input[name="bayar"]:checked');

    if(nama==""){

        alert("Nama lengkap harus diisi.");

        return false;

    }

    if(email==""){

        alert("Email harus diisi.");

        return false;

    }

    if(!validEmail(email)){

        alert("Format email tidak valid.");

        return false;

    }

    if(hp==""){

        alert("Nomor HP harus diisi.");

        return false;

    }

    if(isNaN(jumlah) || jumlah<1){

        alert("Jumlah pembelian minimal 1.");

        return false;

    }

    if(jumlah>5){

        alert("Jumlah pembelian maksimal 5.");

        return false;

    }

    if(bayar==null){

        alert("Silakan pilih metode pembayaran.");

        return false;

    }

    let harga = hargaProduk[produk];

    let subtotal = harga * jumlah;

    let ppn = subtotal * 0.11;

    let total = subtotal + ppn;

    let pesan =

    "========== TRANSAKSI BERHASIL ==========\n\n"+

    "Nama            : " + nama +

    "\nEmail           : " + email +

    "\nNomor HP        : " + hp +

    "\nProduk          : " + produk +

    "\nHarga Satuan    : " + formatRupiah(harga) +

    "\nJumlah          : " + jumlah +

    "\nSubtotal        : " + formatRupiah(subtotal) +

    "\nPPN (11%)       : " + formatRupiah(ppn) +

    "\nTotal Bayar     : " + formatRupiah(total) +

    "\nPembayaran      : " + bayar.value +

    "\n\nTerima kasih telah berbelanja di" +

    "\nGearPcPolycrome ID.";

    alert(pesan);

    return false;

}

// ==============================
// SAAT HALAMAN DIBUKA
// ==============================

window.onload = function(){

    hitungTotal();

};