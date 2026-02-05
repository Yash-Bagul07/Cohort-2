addEventListener('mousemove', (dets) =>{
    console.log(dets.clientX, dets.clientY)

    document.body.style.setProperty('--x', dets.clientX +'px')
    document.body.style.setProperty('--y', dets.clientY + 'px')
})