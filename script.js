let btn1=document.querySelector("#continue1");
let form=document.querySelector(".form");
let regex = new RegExp("^[a-zA-Z ]+$");

form.addEventListener("submit",(e)=>{
 e.preventDefault();
 let obj={
    name:document.querySelector("#name").value,
    email:document.querySelector("#Email").value
 }
 if(obj.name==="" || obj.email==="" || !(regex.test(obj.name)))
 {
   return;
 }

 localStorage.setItem("form1",JSON.stringify(obj));
 window.location.href="/index2.html";
})
let textbox=document.querySelector("#name");
textbox.addEventListener("keyup",(e)=>{
   
   if((regex.test(textbox.value)))
   { 
    textbox.classList.replace("focus:border-[#FF0000]","focus:border-[#845EEE]");
    document.querySelector("#info").classList.replace("block","hidden")
   }
   else{
      textbox.classList.replace("focus:border-[#845EEE]","focus:border-[#FF0000]");
      document.querySelector("#info").classList.replace("hidden","block")
   }
 
})
