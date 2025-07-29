let level = 0;
let status = false;
let userseq=[];
let gameseq=[];
let buts=["one","two","three","four"];
let h2=document.querySelector("h2");


document.querySelectorAll(".box").forEach((element)=>{
    element.addEventListener('click',function(){
        let clickedbtn = this.classList[1];
        userseq.push(clickedbtn);

        btnflash(this);
        checkans(userseq.length-1);
    })
})

document.addEventListener("keydown",function(){
    if(!status){
        status = true;
        console.log("started");
        levelup();
    }
});

function btnflash(but){
    but.classList.add("flash");
    setTimeout(function(){
        but.classList.remove("flash");
    }, 250); 
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText=`Level ${level}`;

    let randind=Math.floor(Math.random()*4);
    let randclass=buts[randind];
    gameseq.push(randclass);
    let btn=document.querySelector(`.${randclass}`);
    btnflash(btn);
}


function checkans(currentind){
    if(gameseq[currentind] !== userseq[currentind]){
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>.<br>Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        resetgame();
        return;
    }

    if(userseq.length == gameseq.length){
        setTimeout(levelup,1000);
    }
}

function resetgame(){
    status=false;
    level=0;
    gameseq = [];
    userseq = [];
}