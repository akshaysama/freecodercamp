const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
jokie()
   jokeBtn.addEventListener('click',jokie
   )
   function jokie(){
    const config = {headers:{
        'Accept':'application/json'
    }}
    fetch ('https://icanhazdadjoke.com',config).then((res) =>res.json()).then((data)=>{
         jokeEl.innerHTML = data.joke
    })
   }