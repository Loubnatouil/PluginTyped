
const formulaire=document.querySelectorAll('input');
const email = document.querySelector('#Email');


//  document.querySelector('.btn').addEventListener('click',()=>{


//       if(formulaire.className=="req"  &&  email.indexOf=="@" )
//       {
//            document.querySelector('small.s1').innerHTML="please fill all requide";
//           small.style.color="red";
//           document.querySelector('small.s1').style.color="green";
//       }
     
     
    

// //  })
// document.querySelector(".s2").innerHTML="helos";
// document.querySelector(".s2").styleColor="red";

console.log( typeof null);
console.log(typeof 2==="number");
console.log(typeof true==="boolean")
console.log(typeof "anim"==="string");
console.log(typeof a==="undefined")
console.log(typeof {1:"dhjd"}==="object");

   
setTimeout(() => {
    
  
console.log("xcccccc");
   

}, 5000);
document.querySelector(`li#H1`).addEventListener('click', ()=>{
  
    document.querySelector(`div.text1`).classList.toggle("text");  
    
   
})
document.querySelector('li#H2').addEventListener('click', ()=>{
  
    document.querySelector("div.text2").classList.toggle("text");  
  
   
})
document.querySelector('li#H3').addEventListener('click', ()=>{
  
   document.querySelector("div.text3").classList.toggle("text");}) 