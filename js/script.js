gmail = document.getElementById('gmail')
wpp = document.getElementById('wpp')

text = document.getElementById('copiar')

gmail.addEventListener('click', function(){
    text.value = "kauavictor259@gmail.com"
    text.select()
    document.execCommand('copy')

})

wpp.addEventListener('click', function(){
    text.value = "77999831299"
    text.select()
    document.execCommand('copy')

})