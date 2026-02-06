<<<<<<< HEAD
var btn = document.querySelector('button')
var main = document.querySelector('main')

let arr = ['Hello There1!', 'My Name is Yash', 'I am a Engineer', 'Suckkerrrrr','U Cant See Me']


btn.addEventListener('click',function(){
    var div = document.createElement('div')
    div.style.height = '100px'
    div.style.width = '100px'
    div.style.backgroundColor = 'orange'
    div.style.borderRadius = '50%'
    

    var x = Math.random()*100
    var y = Math.random()*100
    var rot = Math.random()*360

    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)
    
    div.style.position = 'absolute'
    div.style.top = y+'%'
    div.style.left = x+'%'
    div.style.rotate = rot+'deg'
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`

    main.appendChild(div)
})
=======
var btn = document.querySelector('button')
var main = document.querySelector('main')

let arr = ['Hello There1!', 'My Name is Yash', 'I am a Engineer', 'Suckkerrrrr','U Cant See Me']


btn.addEventListener('click',function(){
    var div = document.createElement('div')
    div.style.height = '100px'
    div.style.width = '100px'
    div.style.backgroundColor = 'orange'
    div.style.borderRadius = '50%'
    

    var x = Math.random()*100
    var y = Math.random()*100
    var rot = Math.random()*360

    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)
    
    div.style.position = 'absolute'
    div.style.top = y+'%'
    div.style.left = x+'%'
    div.style.rotate = rot+'deg'
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`

    main.appendChild(div)
})
>>>>>>> cc7569c7b5c336bd52f81629992fbaf102eac69c
