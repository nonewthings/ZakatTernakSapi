function hitungZakat() {
  var sapiStr = document.getElementById("sapiStr").value;
  if (sapiStr === "") {
    document.getElementById("Zakat7").innerHTML = "";
    document.getElementById("Hasil7").innerHTML = "";
    return;
  }

  var sapi = indonesianNumberToFloat(sapiStr);
  if (sapi < 30) {
    document.getElementById("Zakat7").innerHTML = "0";
    document.getElementById("Hasil7").innerHTML = "Sapi belum mencapai nishab. Tidak dikenakan kewajiban zakat.";
  } else if (sapi >= 30 && sapi < 40) {
    document.getElementById("Zakat7").innerHTML = "1";
    document.getElementById("Hasil7").innerHTML = "Zakat 1 ekor sapi jenis Tabi’.";
  } else if (sapi >= 40 && sapi < 60) {
    document.getElementById("Zakat7").innerHTML = "1";
    document.getElementById("Hasil7").innerHTML = "Zakat 1 ekor sapi jenis Musinnah.";
  } else if (sapi >= 60 && sapi < 70) {
    document.getElementById("Zakat7").innerHTML = "2";
    document.getElementById("Hasil7").innerHTML = "Zakat 2 ekor sapi jenis Tabi’.";
  } else if (sapi >= 70 && sapi < 80) {
    document.getElementById("Zakat7").innerHTML = "2";
    document.getElementById("Hasil7").innerHTML = "Zakat 1 ekor sapi Tabi’ dan 1 ekor sapi jenis Musinnah.";
  } else if (sapi >= 80 && sapi < 90) {
    document.getElementById("Zakat7").innerHTML = "2";
    document.getElementById("Hasil7").innerHTML = "Zakat 2 ekor sapi jenis Musinnah.";
  } else if (sapi >= 90 && sapi < 100) {
    document.getElementById("Zakat7").innerHTML = "3";
    document.getElementById("Hasil7").innerHTML = "Zakat 3 ekor sapi jenis Tabi’.";
  } else if (sapi >= 100 && sapi < 110) {
    document.getElementById("Zakat7").innerHTML = "3";
    document.getElementById("Hasil7").innerHTML = "Zakat 1 ekor sapi jenis Musinnah dan 2 ekor sapi jenis Tabi’.";
  } else if (sapi >= 110 && sapi < 120) {
    document.getElementById("Zakat7").innerHTML = "3";
    document.getElementById("Hasil7").innerHTML = "Zakat 1 ekor sapi jenis Tabi’ dan 2 ekor sapi jenis Musinnah.";
  } else if (sapi >= 120 && sapi < 130) {
    document.getElementById("Zakat7").innerHTML = "4 atau 3";
    document.getElementById("Hasil7").innerHTML = "Zakat 4 ekor sapi jenis Tabi’ atau 3 ekor sapi jenis Musinnah.";
  }
}

function indonesianNumberToFloat(str) {
  str = str.replace(".", "");
  str = str.replace(",", ".");
  var numfloat = 0.0;
  if (!isNaN(parseFloat(str))) {
    numfloat = parseFloat(str);
  }
  return numfloat;
}

document.getElementById("sapiStr").addEventListener("input", function() {
  hitungZakat();
});