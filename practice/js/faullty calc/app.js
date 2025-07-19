/* //create a faulty calc which does wrong calc 10% of time;

function calc(num1, num2, exp) {
  if (Math.floor(Math.random() * 100) + 1 > 10) {
    if (exp == "+") {
      return num1 + num2;
    }
    if (exp == "-") {
      return num1 - num2;
    }
    if (exp == "/") {
      return num1 / num2;
    }
    if (exp == "^") {
      return num1 ** num2;
    }
  } else {
    if (exp == "+") {
      return num1 - num2;
    }
    if (exp == "-") {
      return num1 + num2;
    }
    if (exp == "/") {
      return num1 ** num2;
    }
    if (exp == "^") {
      return num1 / num2;
    }
  }
}
console.log(calc(1,2,"+"));
 */

function randomgen(x,y,z){
    let ran=Math.floor(Math.random()*3);
    if(ran==0)return x;
    if(ran==1)return y;
    if(ran==2)return z;
}
console.log(randomgen("crazy ","Amazing ","Fire ") + randomgen("engine ","foods ","garments ") + randomgen("bros.", "limited", "hub"));