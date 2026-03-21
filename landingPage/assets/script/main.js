const blocks = document.querySelectorAll('.td-block-sobre-conloq');

blocks.forEach(block => {
    block.addEventListener('mousemove',(e) => {
        const rect = block.getBoundingClientRect();
        const positionX = e.clientX - rect.left;
        const positionY = e.clientY - rect.top;

        const const_x = ((positionX / rect.width) - 0.5) * 2;
        const const_y = ((positionY / rect.height) - 0.5) * 2;

        const angulo_rotacao = 20;

        block.style.transform = `rotateX(${const_y * -angulo_rotacao}deg) rotateY(${const_x * angulo_rotacao}deg) scale(1.05)`;    
    })

    block.addEventListener('mouseleave', () => {
        block.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    });
})

const carrousel = document.querySelector('.Div-Carrousel-Img-Sobre-cerveja');
carrousel.innerHTML += carrousel.innerHTML;

const buttons = document.querySelectorAll('.bolinhas-container button');
const imgContainer = document.querySelector('.Div-Img-Sobre-mash');

function setActive(targetId) {
    buttons.forEach(b => b.classList.toggle('bolinha-ativa', b.dataset.target === targetId));
    // quando target é img2 aplicamos swap (inverte posições e camadas)
    if (targetId === 'img2') {
        imgContainer.classList.add('swap');
    } else {
        imgContainer.classList.remove('swap');
    }
}

buttons.forEach(btn => btn.addEventListener('click', () => setActive(btn.dataset.target)));
