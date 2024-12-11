document.addEventListener('DOMContentLoaded', (event) => {
    const btnAssistir = document.getElementById('btnAssistir');
    const btnInfo = document.getElementById('btnInfo');

    btnAssistir.addEventListener('click', () => {
        // trailer do filme
        window.open('https://youtu.be/ggxT2xUgew8', '_blank');
    });

    btnInfo.addEventListener('click', () => {
        // mais informações
        window.open('https://www.disney.com.br/filmes/moana-2', '_blank');
    });
});




