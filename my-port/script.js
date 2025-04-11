let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListenes('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')

})



window.addEventListener('scroll', () => {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => {
        const rect = secao.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            secao.classList.add('visible');
        } else {
            secao.classList.remove('visible');
        }
    });
});

// Torne a primeira seção visível ao carregar a página
window.addEventListener('load', () => {
    const secoes = document.querySelectorAll('section');
    if (secoes.length > 0) {
        secoes[0].classList.add('visible');
    }
});


