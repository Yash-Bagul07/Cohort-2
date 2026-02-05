var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var inner = document.querySelector('.inner')
var grow = 0

btn.addEventListener('click', function(){
          btn.style.pointerEvents = 'none'

    var a = setInterval(()=>{
        grow++
        h2.innerHTML = grow+'%'
            inner.style.width = grow+'%'    
    },50);

    setTimeout(()=>{
      clearInterval(a)
      btn.innerHTML = 'Downloaded'
      btn.style.opacity = 0.5
    },5000);
})