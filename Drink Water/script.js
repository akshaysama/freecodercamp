const smallCups = document.querySelectorAll('.cup-small')
const Liters = document.getElementById('liters')
const Percentage = document.getElementById('percentage')
const Remained = document.getElementById('remained')
const small = document.getElementById('small')
const span = document.getElementById('liters')
smallCups.forEach((Scup,ind)=>{
    Scup.addEventListener('click',()=>
    heighLight(ind)
    )
})
fillGlass()
function heighLight(ind){
    if(smallCups[ind].classList.contains('full') && !smallCups[ind].nextElementSibling.classList.contains('full'))
    {ind--}
    smallCups.forEach((Scup,indx2)=>{
        if(indx2<=ind){
            Scup.classList.add('full')
        }
        else{
            Scup.classList.remove('full')
        }
    })
    fillGlass()
}
function fillGlass(){
       const fullGlass = document.querySelectorAll('.cup.cup-small.full').length
       const totalGlass= smallCups.length
   if (fullGlass == 0){
    Percentage.style.height = 0
    Percentage.style.visibility = "hidden"
    span.innerText = "0L"
   }else{
    Percentage.style.visibility = "visible"
    Percentage.style.height = `${fullGlass/totalGlass * 330}px`
    Percentage.innerText = `${fullGlass/totalGlass *100} %`
    span.innerText = `${fullGlass*2/totalGlass} L`
   }
   if(fullGlass==totalGlass){
    small.style.visibility="hidden"
    small.style.height=0
    span.innerText=""}
   

}