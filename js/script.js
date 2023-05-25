function hitungLuasPersegi(sisiluas) {
    var luas = sisiluas * sisiluas;
    return luas;
}

function Luas(){
    var sisi_luas = document.getElementById("sisiluas").value;
    var luasPersegi = hitungLuasPersegi(sisi_luas);
    document.getElementById("rumusluas").innerText = "L = " + "S" + " x " + "S";
    document.getElementById("hitungluas").innerText = "L = " + sisi_luas + " x " + sisi_luas;
    document.getElementById("hasilluas").innerText = "L = " + luasPersegi;
}

function hitungKelilingPersegi(sisikeliling){
    var keliling = 4 * sisikeliling;
    return keliling; 
}

function Keliling(){
    var sisi_keliling = document.getElementById("sisikeliling").value;
    var KelPersegi = hitungKelilingPersegi(sisi_keliling);
    document.getElementById("rumuskeliling").innerText = "K = " + "4" + " x " + "S";
    document.getElementById("hitungkeliling").innerText = "K = " + "4" + " x " + sisi_keliling;
    document.getElementById("hasilkeliling").innerText = "K = " + KelPersegi;
}


const inputluas = document.getElementById('sisiluas');
const inputkeliling = document.getElementById('sisikeliling');

const resetluas = document.getElementById('resetluas');
const resetkeliling = document.getElementById('resetkeliling');

const rumus_luas = document.getElementById('rumusluas');
const rumus_keliling = document.getElementById('rumuskeliling');

const hitung_luas = document.getElementById('hitungluas');
const hitung_keliling = document.getElementById('hitungkeliling');

const hasil_luas = document.getElementById('hasilluas');
const hasil_keliling = document.getElementById('hasilkeliling');

resetluas.addEventListener('click', function() {
    inputluas.value = ''; // Mengosongkan nilai input
    rumus_luas.textContent = ''; // Mengosongkan isi output
    // Atau, jika ingin menghapus elemen output dari DOM
    // output.parentNode.removeChild(output);
    hitung_luas.textContent = '';
    hasil_luas.textContent = '';
});


resetkeliling.addEventListener('click', function() {
    inputkeliling.value = ''; // Mengosongkan nilai input
    rumus_keliling.textContent = ''; // Mengosongkan isi output
    // Atau, jika ingin menghapus elemen output dari DOM
    // output.parentNode.removeChild(output);
    hitung_keliling.textContent = '';
    hasil_keliling.textContent = '';
});