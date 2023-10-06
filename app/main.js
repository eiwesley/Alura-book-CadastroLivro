let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosdaAPI();

async function getBuscarLivrosdaAPI(){
    const res = await fetch(endpointAPI);
    livros = await res.json();
    livros = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);

}

