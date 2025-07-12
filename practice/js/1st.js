let num=[];
let numb=prompt("Enter the number of elements you want to put");
for(let i=0; i<numb; i++){
    let inp=prompt("Enter the "+(i+1)+" number");
    num[i]=inp;
}
let del=prompt("Enter the number which occurance you want to delete.");

for(let i=0; i<numb; i++){
    if(num[i]==del){
        num.splice(i,1);
    }
}
for(let number of num ){
    console.log(number);
}