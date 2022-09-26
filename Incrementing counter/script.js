const counterEl = document.querySelectorAll('.counter')


counterEl.forEach((c)=>{
    c.innerText= 0
    const updateCount = ()=>{
        const dataHere = +c.dataset.target 

const neededValue = dataHere/100
console.log(neededValue)
console.log(dataHere)
const a =+c.innerText
console.log(a)
if (a< dataHere){
    c.innerText = `${Math.ceil(a+neededValue)}`
    setTimeout(updateCount,2)
console.log(a)

}else{
    c.innerText = dataHere
}
 }
 updateCount() 
})
