const allEle = document.querySelectorAll('.box')
window.addEventListener('scroll',function(){
    const triggerBottom = window.innerHeight /6*4
    allEle.forEach( a => {
        const positionEl = a.getBoundingClientRect().top
        if(positionEl<triggerBottom){
            a.classList.add('show')
        }else{
            a.classList.remove('show')
        }
    }
    
    )
})