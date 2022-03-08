var lagi = true;

while (lagi == true) {
  let Nilai = prompt('Nilai Ujian:');

  if (Nilai >= 80) {
    alert('Nilai anda A');
    lagi = confirm('Apakah anda ingin mengulang');
  } else if (Nilai >= 70) {
    alert('Nilai anda B');
    lagi = confirm('Apakah anda ingin mengulang');
  } else if (Nilai >= 50) {
    alert('Nilai anda C');
    lagi = confirm('Apakah anda ingin mengulang');
  } else if (Nilai >= 40) {
    alert('Nilai anda D');
    lagi = confirm('Apakah anda ingin mengulang');
  } else if (Nilai > 0) {
    alert('Nilai anda E');
    lagi = confirm('Apakah anda ingin mengulang');
  }

  if (Nilai == '') {
    alert('anda belum memasukan Angka');
  }
  if (Nilai === null) {
    lagi = false;
  }
}

alert('Terima Kasih...');
