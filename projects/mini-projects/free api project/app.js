const btn= document.querySelector("button");
const choices=document.querySelector("select");
let content=document.querySelector(".box");

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    let choice=choices.value;


    let url="";
    let ans="";
    if(choice=="RC"){
        url="https://catfact.ninja/fact";
    }if(choice=="UF"){
        url="https://uselessfacts.jsph.pl/random.json?language=en";
    }if(choice=="RJ"){
        url="https://official-joke-api.appspot.com/random_joke";
    }
    try{
        const response = await fetch(url);
        const data = await response.json();
         if (choice === "RC") {
            ans = data.fact;
        } else if (choice === "HP") {
            ans = data.text;
        } else if (choice === "RJ") {
            ans = `${data.setup} ... ${data.punchline}`; 
        }
    }
    catch(error){
        ans = "Sorry, we couldn't fetch the data. Please try again.";
        console.error(error);
    }
    content.innerText=ans;
})