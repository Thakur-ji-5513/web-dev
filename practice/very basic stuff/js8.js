const but=document.querySelector("button");
const input=document.querySelector("input");
const list=document.querySelector("ul");

but.addEventListener("click",function(){
    console.log("helllo")
    const item=document.createElement("li");
    item.innerText=input.value;
    console.log(item);
    list.append(item);
    input.value="";
})