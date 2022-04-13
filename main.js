console.log('Hello World!');



const inputValue =document.getElementById('secretTxt').value;
const nickn = document.getElementById('nickn').value;


function ncryptbtn(){
  
  const nickn = document.getElementById('nickn').value;
  
  const inputValue =document.getElementById('secretTxt').value;
  console.log(inputValue);
  
  
  var encrypted = CryptoJS.AES.encrypt(inputValue, 'chilloff');
//U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=

var decrypted = CryptoJS.AES.decrypt(encrypted, 'chilloff');
//4d657373616765


document.getElementById("demo1").innerHTML = encrypted;
document.getElementById("demo2").innerHTML = decrypted;
document.getElementById("demo3").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);



//const beforurl = window. location. href+'/'+ decrypted;





 encoded = encodeURI(decrypted)


 

var mylink = `http://chilloff.cf/secret.html?word=${encoded}`;
 
 console.log(mylink);
 
 
 
 
 
 const headz = document.getElementById('headz').innerHTML =  mylink;
 alert('Copy the link on bottom')
 
 
 
 
}


 
