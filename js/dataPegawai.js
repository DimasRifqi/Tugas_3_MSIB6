function dataPerson() {
    let form = document.getElementById("form");
    let nama = form.nama.value;
    let pekerjaan = form.pekerjaan.value;
    let hobby = form.hobby.value;
  
    let input = "Perkenalkan nama saya " + nama + "<br> Pekerjaan: " + pekerjaan + "<br> Hobby: " + hobby;
    let no_input = "Maaf Tolong Isi Semua Data";
    let hasil = (nama && pekerjaan && hobby != '') ? input : no_input;
  
    document.getElementById("hasil").innerHTML = hasil;
}
