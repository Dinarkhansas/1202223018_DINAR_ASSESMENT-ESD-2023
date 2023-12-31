function cekDuplikat(dataAngka) {
    var setAngka = new Set();
  
    for (var i = 0; i < dataAngka.length; i++) {
      if (setAngka.has(dataAngka[i])) {
        return true;
      }
      setAngka.add(dataAngka[i]);
    }
  
    return false;
  }
  
  var dataAngka = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10, 12, 14, 16, 18, 20, 17, 19];
  var hasil = cekDuplikat(dataAngka);
  
  console.log(hasil)
  
  