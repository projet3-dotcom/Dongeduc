const cookieContainer=document.querySelector(".cookie-container");
const cookieButton=document.querySelector(".cookie-btn");
cookieButton.addEventListener("click",() => {
    cookieContainer.classList.remove("active"); 
    localStorage.setItem("dongeduc","true");
 });
setTimeout(() => {
    if(!localStorage.getItem("dongeduc","true")) {
     cookieContainer.classList.add("active");}
   }, 2000);
 