function analisisAnakNakal(namaAnak) {
    const hasilAnalisis = {};
    
    namaAnak.forEach(nama => {
        hasilAnalisis[nama] = (hasilAnalisis[nama] || 0) + 1;
    });

    const sortedAnalisis = Object.entries(hasilAnalisis)
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0]);

    let output = "";
    if (sortedAnalisis.length > 1) {
        output = `${sortedAnalisis[0]} dan ${sortedAnalisis[1]} Nackal`;
    } else if (sortedAnalisis.length === 1) {
        output = `${sortedAnalisis[0]} Nackal`;
    } else {
        output = "Semuanya anak baik";
    }

    return output;
}

const input1 = ["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar"];
console.log(analisisAnakNakal(input1));

const input2 = ["Bagas", "Dimas", "Fajar", "Bagas", "Indra", "Gilang", "Gilang", "Bagas", "Fajar", "Fajar"];
console.log(analisisAnakNakal(input2));

const input3 = ["Aisyah", "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "Gilang", "Hana", "Indra", "Jihan"];
console.log(analisisAnakNakal(input3));
