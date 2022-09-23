// const label = document.getElementById('abc')
// const input = document.getElementById('ab')

// input.addEventListener('click',(a)=> {
//     label.innerHTML= `<span>E</span>
//                         <span>m</span>
//                         <span>a</span>
//                         <span>i</span>
//                         <span>l</span>`
// })
const label = document.querySelectorAll('.form-control label')
   label.forEach(labels => {
    labels.innerHTML = labels.innerText
    .split('')
    .map((letter,idx)=>`<span style="transition-delay:${idx * 150}ms">${letter}</span>`)
    .join('')
   })