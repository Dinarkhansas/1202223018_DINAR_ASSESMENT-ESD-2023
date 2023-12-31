function countUsernames(firstName, lastName, maxLength) {
    let count = 0;
    for (let i = 1; i <= firstName.length && i <= maxLength; i++) {
      for (let j = 1; j <= lastName.length && (i + j) <= maxLength; j++) {
        count++;
      }
    }
  
    return count;
  }
  
  const firstName = "Naip";
  const lastName = "Lovyu";
  
  const maxLength = 6;
  
  const totalCombinations = countUsernames(firstName, lastName, maxLength);
  
  console.log(`Jumlah kombinasi username yang mungkin: ${totalCombinations}`);
  