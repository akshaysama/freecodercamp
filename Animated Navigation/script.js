let buttonElement = document.querySelector('button')
const navEl=document.querySelector('#me')
const div = document.querySelectorAll('div')
const ul=document.querySelector('ul')
const li=document.querySelectorAll('li')
console.log(li)
li.innerHTML = "text-decoration:none;"

buttonElement.addEventListener('click',()=>{
    console.log('clocked'),
     navEl.classList.toggle('active')
     ul.classList.toggle('active')
     li.forEach(a => a.classList.toggle('active'))
  
     buttonElement.classList.toggle('active')

})