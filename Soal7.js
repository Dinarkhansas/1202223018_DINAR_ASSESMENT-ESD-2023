function decryptText(encryptedText, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let decryptedText = '';
  
    for (let i = 0; i < encryptedText.length; i++) {
      const char = encryptedText[i].toLowerCase();
  
      if (char === ' ' || !alphabet.includes(char)) {
        decryptedText += encryptedText[i];
      } else {
        const index = (alphabet.indexOf(char) - shift + 26) % 26;
        decryptedText += encryptedText[i] === char.toUpperCase()
          ? alphabet[index].toUpperCase()
          : alphabet[index];
      }
    }
  
    return decryptedText;
  }
  
  const encryptedChat = `
  xfqfr bfmdz
  gjxtp lzj rfz ifkyfw jxi snm
  gwt, gjxtp qz rfz rfpfs in bfwlty lfp?
  fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz
  dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu
  `;
  
  const decryptedChat = decryptText(encryptedChat, 5);
  
  console.log(decryptedChat);
  