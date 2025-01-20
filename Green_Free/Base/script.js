const menuHamburguer = document.querySelector('.menu-hamburguer');
const miniMenu = document.querySelector('.mini-hamburguer');

// Alterna o menu ao clicar no botão hambúrguer
menuHamburguer.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede que o clique se propague para o documento
    miniMenu.classList.toggle('ativo');
});

// Fecha o menu ao clicar em um link dentro dele
miniMenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') { // Verifica se o alvo do clique é um link
        miniMenu.classList.remove('ativo'); // Fecha o menu
    }
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', () => {
    miniMenu.classList.remove('ativo');
});

// Impede o fechamento ao clicar no mini-menu
miniMenu.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede que o clique feche o menu
});
