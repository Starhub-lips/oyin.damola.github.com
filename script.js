



function display1(){
  
  let name = document.getElementById("username").value.trim();
  
 let mail= document.getElementById("email").value.trim();
  
  let signup = document.getElementById("password").value.trim();
  
  
  let error =document.getElementById("error");
  
  let message = document.getElementById("message");
  
  error.innerText="";
  message.innerHTML="";
  
  if (name==="") {
     error.innerText="Please enter all information. ";
     return;
  }
  if (mail==="") {
    error.innerText="Please enter all information";
    return;
    
  }
 if (signup==="") {
   error.innerText="Please enter all information";
   return;
 }
 
 message.innerHTML=" Dear"+ " " + name +" "+ " your registration is completed.";
 
  
 }

function display2(){
  
  let meme = document.getElementById("period").value.trim();
  
let ican= document.getElementById("waking").value.trim();

let luke = document.getElementById("wrong").value.trim();

let information = document.getElementById("information")

luke.innerHTML = "";
 information = "";
  
  
 if (meme==="") {
   luke.innerHTML = " fill the mail";
   return;
   
 }
 
 if (ican==="") {
   luke.innerHTML= "fill the password";
   return;    
 }
 
 information.innerHTML="welcome back please wait......... ";
  
  
  
  
  
}





  

