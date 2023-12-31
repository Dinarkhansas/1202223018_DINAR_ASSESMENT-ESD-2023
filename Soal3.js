function temanYangMungkinMengambilKue() {
    var urutanKedatangan = ['Ningguang', 'Hutao', 'Xiao', 'Childe'];
  
    var kueMasihUtuhSaatXiaoMasuk = true;
  
    for (var i = 0; i < urutanKedatangan.length; i++) {
      var teman = urutanKedatangan[i];
  
      if (teman === 'Ningguang' && kueMasihUtuhSaatXiaoMasuk) {
        console.log(teman + ' yang paling mungkin mengambil kue!');
        break;
      } else if (teman === 'Hutao') {
        console.log(teman + ' yang paling mungkin mengambil kue!');
        break;
      } else if (teman === 'Xiao' && kueMasihUtuhSaatXiaoMasuk) {
        console.log(teman + ' yang paling mungkin mengambil kue!');
        break;
      } else if (teman === 'Childe') {
        console.log(teman + ' yang paling mungkin mengambil kue!');
        break;
      }
    }
  }
  
  temanYangMungkinMengambilKue();
  