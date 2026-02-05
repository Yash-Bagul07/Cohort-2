var p = document.querySelector('p')
var text = p.innerHTML

const character= 'ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz'

let iteration= 0
    
   function randomText(){
    var str = text.split('').map((char ,idx)=>{
        if(idx<iteration){
            return char
        }
        return character.split('')[Math.floor(Math.random()*52)]
    }).join('')
    p.innerHTML= str

    iteration += 0.2
   }

setInterval(randomText,30)
