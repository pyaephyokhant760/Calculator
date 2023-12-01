//let num1 = document.getElementById("first");
//let num2 = document.getElementById("second");
//let opreator = document.getElementById("option");
let btn = document.getElementById("bb");
let result = document.getElementById("result");
let numOneError = document.getElementById("numOneError");
let numTwoError = document.getElementById("numTwoError");
let numOpterError = document.getElementById("optionError");
let finalresult;

let numOneStated , numTwoStated , opterStated = false;

numOneError.style.display = "none";
numTwoError.style.display = "none";
numOpterError.style.display = "none";

btn.addEventListener("click",function() {
    let num1 = document.getElementById("first");
    let num2 = document.getElementById("second");
    let opreator = document.getElementById("option");

    error(num1,num2,opreator);
    if (!numOneStated && !numTwoStated && !opterStated ) {

    num1 = parseInt(num1.value);
     num2 = parseInt(num2.value);
     
        switch (opreator.value) {
            case "plus":
                finalresult = num1 + num2;
                break;
            case "mius":
                finalresult = num1 - num2;
                break;
            case "multiply":
                finalresult = num1 * num2;
                break;
            case "division":
                finalresult = num1 / num2;
                break;
            case "empty":
                console.log("error");
        }
          result.innerHTML = finalresult;
    }
});



function error(num1, num2,opreator) {
    if (num1.value == "" || num1.value == null || num1.value == undefined) {
        numOneError.style.display = "block";
        numOneStated = true;
    }else{
        numOneError.style.display = "none";
        numOneStated = false;
    }
    if (num2.value == "" || num2.value == null || num2.value == undefined) {
        numTwoError.style.display = "block";
        numTwoStated = true;
    }else{
        numTwoError.style.display = "none";
        numTwoStated = false;
    }
    if (opreator.value == "empty") {
        numOpterError.style.display = "block";
        opterStated = true;
    }else{
        numOpterError.style.display = "none";
        opterStated = false;
    }
}