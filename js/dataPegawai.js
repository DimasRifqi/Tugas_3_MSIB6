function dataPerson() {
    let form = document.getElementById("form");
    let nama = form.nama.value;
    let pekerjaan = form.pekerjaan.value;
    let hobby = form.hobby.value;
  
    let input = "Perkenalkan nama saya " + nama + "<br> Pekerjaan: " + pekerjaan + "<br> Hobby: " + hobby;
    let hasil = (nama && pekerjaan && hobi != '') ? input : "Tolong isi semua data";
  
    document.getElementById("hasil").innerHTML = hasil;
  }
  