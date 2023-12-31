function cekPalindrom(kata) {
    var kataTanpaSpasi = kata.toLowerCase().replace(/\s/g, '');
    
    var reversKata = kataTanpaSpasi.split('').reverse().join('');
    if (kataTanpaSpasi === reversKata) {
      console.log('eureeka!');
    } else {
      console.log('suka blyat');
    }
  }
  
  cekPalindrom('Angsa');
  cekPalindrom('KataK');
  cekPalindrom('kasur empuk');
  cekPalindrom('Aku Suka Kamu');
  cekPalindrom('Ibu Ratna antar ubi.');
  