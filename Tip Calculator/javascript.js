const billAmount = document.getElementById("billAmount");
const tipPercentage = document.getElementById("tipPercentage");
const buttonCalculate = document.getElementById("calculate")
function tipCalculation() {
    const res = billAmount.value * (tipPercentage.value/100);
    output.textContent =  "Resultado: $"+ res;
}

buttonCalculate.addEventListener("click",tipCalculation);