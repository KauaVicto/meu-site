let sEsq = document.getElementById('sEsq');
let sDir = document.getElementById('sDir');

let imgs = document.getElementsByClassName('imagens')

let numimg = 1

sDir.addEventListener('click', passarDireita)
sEsq.addEventListener('click', passarEsqueda)

function passarDireita(){
    if(numimg == 1){
        numimg++

        imgs[0].style.display = 'none'
        imgs[1].style.display = 'block'
    }
}

function passarEsqueda(){
    if(numimg == 2){
        numimg--

        imgs[0].style.display = 'block'
        imgs[1].style.display = 'none'
    }
}

setInterval(() => {
    passarDireita()
    
}, 3000);