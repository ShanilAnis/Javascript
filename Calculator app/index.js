let num1 = 99
let num2 = 2

document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

function addition(){
    let add = 0
    add = num1 + num2;
    document.getElementById("sum").innerText ="Sum: " + add
}
function subtract(){
    let sub = 0
    sub = num1 - num2;
    document.getElementById("sum").innerText ="Sum: " + sub
}
function divide(){
    let div = 0
    div = num1 / num2;
    document.getElementById("sum").innerText ="Sum: " + div
}
function multiply(){
    let mul = 0
    mul = num1 * num2;
    document.getElementById("sum").innerText ="Sum: " + mul
}