function valid(event){
    event.preventDefault();
 

document.getElementById('nameerror').innerText='';
document.getElementById('emailerror').innerText='';
document.getElementById('passworderror').innerText='';
    
var name=document.getElementById('name').value;
var email=document.getElementById('email').value;
var pass=document.getElementById('pass').value;

if(name.length<3){
    document.getElementById("nameerror").innerText='Invalid name!(atleast 3 char)';
    return;
}
  var eregex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!eregex.test(email)){
    document.getElementById("emailerror").innerText='Invalid email address!';
    return;
  }
if(pass.length<8){
    document.getElementById("passworderror").innerText='Invalid password!(atleast 8 char)';
    return;
  }
  alert("you are succesfully loged in");
 } 
 function show(){
  var input=document.querySelector("#pass");
  input.setAttribute("type","text");
  document.querySelector("#hide").style.display="none";
  document.querySelector("#show").style.display="block";
 }
 function hide(){
  var input=document.querySelector("#pass");
  input.setAttribute("type","password");
  document.querySelector("#show").style.display="none";
  document.querySelector("#hide").style.display="block";
 }
 