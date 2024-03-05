window.addEventListener("load",()=>{
    let obj=JSON.parse(localStorage.getItem("form1"));
    let arr=JSON.parse(localStorage.getItem("form2"));
    document.querySelector("#name").innerHTML=obj.name;
    document.querySelector("#email").innerHTML=obj.email;
    let html=arr.map(elem=>{
        return `<li>${elem}</li>`
    })
    document.querySelector("ul").innerHTML=html.join("");
})
document.querySelector("#continue3").addEventListener("click",()=>{
    document.querySelector(".success").classList.replace("hidden","block");
    localStorage.clear();
})