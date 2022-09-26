const tagsEl = document.getElementById('tags')
const textEl = document.getElementById('textarea')
console.log(textEl)

textEl.focus()
textEl.addEventListener('keyup',(a)=>{
    createTags(a.target.value)
    if(a.key==='Enter'){
        setTimeout(()=>{
            a.target.value=""
        },10)
        randomSelect()
    }
})
function createTags(input){
console.log(input)
const tags = input.split(',').filter(tag=>tag.trim() !=='').map(tag=>tag.trim())
tagsEl.innerText = ''
console.log(tags)
tags.forEach((tag)=>{
  const tagEl =  document.createElement('span')
   tagEl.classList.add('tag')
   tagEl.innerText = tag
   tagsEl.appendChild(tagEl)

})
}
function randomSelect(){
    const time=30
    const interval = setInterval(()=>{
        const randomTag = pickRandomTag()
        heighlightTag(randomTag)
        setTimeout(()=>{unHeighlightTag(randomTag)},50)
    },109);
    setTimeout(()=>{
    clearInterval(interval)
    setTimeout(()=>{
        const randomTag = pickRandomTag()
        heighlightTag(randomTag)
    })
    },time*50)
}
function pickRandomTag(){
    const tags =document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}
function heighlightTag(tag){
tag.classList.add('highlight')
}
function unHeighlightTag(tags){
    tags.classList.remove('highlight')
}

  