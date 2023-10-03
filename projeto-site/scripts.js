function mudouTamanho() {
    if (window.innerWidth >= 992) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

window.addEventListener('scroll', function(){
    let menu = document.querySelector('.menu')
    menu.classList.toggle('rolagem',window.scrollY > 500)
})