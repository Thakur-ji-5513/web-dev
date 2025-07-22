let but = document.createElement('button');
let inp=document.createElement('input');
let head=document.createElement('h1');
let para=document.createElement("p");


inp.setAttribute('placeholder',"username");
but.setAttribute('id',"btn");
para.innerHTML="ApnaCollege <b>Delta</b> Practice."


but.innerText=("click Me!!");
document.body.prepend(but);
document.body.prepend(inp);
document.body.prepend(head);
document.body.insertAdjacentElement("beforeend",para);

document.getElementById('btn').style.backgroundColor="blue";
document.querySelector('#btn').style.color="white";
document.querySelector('h1').innerText="DOM Pracrise!";
document.querySelector('h1').style.textDecoration="underline";
document.querySelector('h1').style.color="purple";
