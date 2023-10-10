let result = document.querySelector("#result");

let currentInput = "";

const appendToResult = (value) =>{
    currentInput += value;
    result.innerText = currentInput;
}

const clearResult = () =>{
    currentInput = "";
    result.innerHTML = "0";
}

const calculateResult = () =>{
    try{
        currentInput = eval(currentInput);
        result.innerText = currentInput;
    }catch(error){
        result.innerText = "Error"
    }
}