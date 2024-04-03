let items=document.querySelectorAll("li");
let arr=[];
items.forEach(element => {
    element.addEventListener("click",handleclick)
});
function handleclick(){
    if(this.classList.contains("bg-[#845EEE]"))
    {
      this.classList.remove("bg-[#845EEE]");
      this.classList.remove("text-white");
      arr.splice(arr.indexOf(`${this.textContent}`),1);
    }
    else{
        this.classList.add("bg-[#845EEE]");
        this.classList.add("text-white");
        arr.push(`${this.textContent}`);
    }    
}

let btn2=document.querySelector("#continue2");
btn2.addEventListener("click",()=>{
    if(arr.length==0)
    {  
        document.querySelector(".box").classList.replace("hidden","block");
        return;
    }
    
    localStorage.setItem("form2",JSON.stringify(arr));
    window.location.href="page3.html"
})

document.querySelector("#back").addEventListener("click",()=>{location.reload()});
