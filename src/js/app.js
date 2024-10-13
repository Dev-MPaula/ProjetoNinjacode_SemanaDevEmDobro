const listaSelecaoNinjacodes = document.querySelectorAll('.ninjacode');

listaSelecaoNinjacodes.forEach(ninjacode =>{
    ninjacode.addEventListener('click', () =>{
        const cartaoNinjacodeAberto = document.querySelector('.aberto')
        cartaoNinjacodeAberto.classList.remove('aberto')

        const idNinjacodeSelecionado = ninjacode.attributes.id.value;
        const idDoCartaoNinjacodeParaAbrir = 'cartao-' + idNinjacodeSelecionado;
        const cartaoNinjacodeParaAbrir = document.getElementById(idDoCartaoNinjacodeParaAbrir);
        cartaoNinjacodeParaAbrir.classList.add('aberto');

        const ninjacodeAtivoNaListagem = document.querySelector('.ativo');
        ninjacodeAtivoNaListagem.classList.remove('ativo');

        const ninjacodeSelecionadoNaListagem =document.getElementById(idNinjacodeSelecionado);
        ninjacodeSelecionadoNaListagem.classList.add('ativo');
    })
})