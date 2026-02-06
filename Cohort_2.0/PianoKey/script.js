<<<<<<< HEAD
var body = document.body
var h1 = document.querySelector('h1')
var aud1 = new Audio('./a.mp3')
var aud2 = new Audio('./b.mp3')
var aud3 = new Audio('./c.mp3')
var aud4 = new Audio('./d.mp3')

body.addEventListener('keydown', function(dets){
    h1.innerHTML = dets.code
    if(dets.code== 'KeyA'){
        aud1.play()
    }
    if(dets.code== 'KeyS'){
        aud2.play()
    }
    if(dets.code== 'KeyD'){
        aud3.play()
    }
    if(dets.code== 'KeyW'){
        aud4.play()
    }
=======
var body = document.body
var h1 = document.querySelector('h1')
var aud1 = new Audio('./a.mp3')
var aud2 = new Audio('./b.mp3')
var aud3 = new Audio('./c.mp3')
var aud4 = new Audio('./d.mp3')

body.addEventListener('keydown', function(dets){
    h1.innerHTML = dets.code
    if(dets.code== 'KeyA'){
        aud1.play()
    }
    if(dets.code== 'KeyS'){
        aud2.play()
    }
    if(dets.code== 'KeyD'){
        aud3.play()
    }
    if(dets.code== 'KeyW'){
        aud4.play()
    }
>>>>>>> cc7569c7b5c336bd52f81629992fbaf102eac69c
})