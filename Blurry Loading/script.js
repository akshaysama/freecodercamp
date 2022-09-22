const loadText = document.querySelector(".loading-text")
const backGround = document.querySelector(".bg")

 let load = 0
  let inter = setInterval(int,30)
 function int () {
    load ++
    if (load >99){
        clearInterval(inter)
    }
    loadText.textContent = load + "%"
    loadText.style.opacity = scale(load, 0, 100,1,0)
    backGround.style.filter = `blur(${scale(load,0,100,30,0)}px)`

    console.log(load)
 }
 const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }