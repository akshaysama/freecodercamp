const mainImages = document.querySelectorAll('.mainimage') 
// console.log(mainImages)
mainImages.forEach(mainimage => {
     mainimage.addEventListener("click",()=> {
         removeActiveClasses()
         mainimage.classList.add("active")
     })
})
function removeActiveClasses(){
    mainImages.forEach(mainimage => {
        mainimage.classList.remove('active')
    })
} 