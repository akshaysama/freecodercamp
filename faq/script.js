
const btn = document.querySelectorAll('.faq-toggle')
console.log(btn)

btn.forEach((abc)=>{
abc.addEventListener('click',()=>{
console.log(abc),
abc.parentNode.classList.toggle('active')
,console.log(abc)})})
