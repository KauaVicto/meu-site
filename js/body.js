let sEsq = document.getElementById('sEsq');
let sDir = document.getElementById('sDir');
let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')

let imgs = document.getElementsByClassName('imagens')

let numimg = 1

sDir.addEventListener('click', passarDireita)
sEsq.addEventListener('click', passarEsqueda)
b2.addEventListener('click', passarDireita)
b1.addEventListener('click', passarEsqueda)

for(let i = 0; i < imgs.length; i++){
    imgs[i].addEventListener('click', abrirImg, true)
}


function passarDireita(){
    if(numimg == 1){
        numimg++

        imgs[0].style.opacity = '0'
        imgs[0].style.zIndex = '-1'
        imgs[1].style.opacity = '1'
        imgs[1].style.zIndex = '2'
        b1.style.backgroundColor = '#ffffff80'
        b2.style.backgroundColor = '#ffffff'

        imgs[0].style.left = '-200px'
        setTimeout(() => {
            imgs[0].style.left = '0'
        },500)
    }else{
        passarEsqueda()
    }
}

function passarEsqueda(){
    if(numimg == 2){
        numimg--

        imgs[0].style.opacity = '1'
        imgs[0].style.zIndex = '2'
        imgs[1].style.opacity = '0'
        imgs[1].style.zIndex = '-1'
        b1.style.backgroundColor = '#ffffff'
        b2.style.backgroundColor = '#ffffff80'

        imgs[1].style.left = '200px'
        setTimeout(() => {
            imgs[1].style.left = '0'
        },500)
    }else{
        passarDireita()
    }
}

function abrirImg(){
    console.log('deu certo')
}

// setInterval(() => {
//     passarDireita()
// }, 10000)

// setInterval(() => {
//     passarEsqueda()
// }, 20000);