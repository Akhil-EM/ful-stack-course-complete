const crypto=require('crypto')
const cipher = crypto.createCipher('aes192', 'a password');  
var encrypted = cipher.update('Hello JavaTpoint', 'utf8', 'hex');  
encrypted += cipher.final('hex');  
console.log(encrypted);  

// const decipher = crypto.createDecipher('aes192', 'a password');  
// var encrypted = '4ce3b761d58398aed30d5af';  
// var decrypted = decipher.update(encrypted, 'hex', 'utf8');  
// decrypted += decipher.final('utf8');  
// console.log(decrypted);  