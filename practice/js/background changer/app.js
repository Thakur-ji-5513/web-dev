let exp = "";
const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>{
    button.addEventListener("click", () => {
        const val=button.dataset.value;
        if(val=="C"){
            exp="";
            document.getElementById("display").innerText = "0";
            return;
        }
        if(val=="="){
            exp=eval(exp);
            document.getElementById("display").innerText=exp;
            exp="";
            return;
        }
        exp+=val;
        document.getElementById("display").innerText = exp;
    })

})