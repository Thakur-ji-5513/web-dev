let butt=document.querySelector("button");
butt.addEventListener('click', async ()=>{
    try{
        
    let fax= await fetch("https://catfact.ninja/fact");
    let fact= await fax.json();
    document.querySelector("span").innerText= fact.fact;
    }
    catch(err){
        console.log("error - ", err);
    }
})