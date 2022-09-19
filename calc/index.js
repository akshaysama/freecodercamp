let num1El = document.getElementById("num1-el").value
let num2El = document.getElementById("num2-el").value
let sumEl = document.getElementById("sum-el")
let num3 = parseInt(num1El)
let num4 = parseInt(num2El)

function add(){
    let num1El = document.getElementById("num1-el").value
    let num2El = document.getElementById("num2-el").value
    let sumEl = document.getElementById("sum-el")
    let num3 = parseInt(num1El)
    let num4 = parseInt(num2El)
    let sum = num3 + num4
    sumEl.textContent = sum
    console.log(sum)

}
function sub(){
    let num1El = document.getElementById("num1-el").value
    let num2El = document.getElementById("num2-el").value
    let sumEl = document.getElementById("sum-el")
    let num3 = parseInt(num1El)
    let num4 = parseInt(num2El)
    let sum = num3 -num4
    sumEl.textContent = sum
    console.log(sum)

}
function div(){
    let num1El = document.getElementsById("num1-el").value
    let num2El = document.getElementById("num2-el").value
    let sumEl = document.getElementById("sum-el")
    let num3 = parseInt(num1El)
    let num4 = parseInt(num2El)
    let sum = num3  / num4
    sumEl.textContent = sum
    console.log(sum)
}
function mul(){
    let num1El = document.getElementsById("num1-el").value
    let num2El = document.getElementById("num2-el").value
    let sumEl = document.getElementById("sum-el")
    let num3 = parseInt(num1El)
    let num4 = parseInt(num2El)
    let sum = num3 * num4
    sumEl.textContent = sum
    console.log(sum)
}


