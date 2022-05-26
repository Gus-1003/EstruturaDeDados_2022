
// Vantagem: É um algoritmo mais eficiente que a busca sequencial. Já que ele divide o array ao meio até achar;
// Condição para ser usado: A estrutura precisa estar ordenada;

// Outra forma de fazer: Implementando a função Busca(dados, chave) que chama a função buscaRecursiva(tabela, esquerda, direita, chave);

function buscaRecursiva (tabela, esquerda, direita, chave) {

    if(esquerda > (direita - 1)){
        return -1;
    }

    let meio = Math.floor((esquerda - direita) / 2)

    if(chave === tabela[meio]){
        return tabela[meio];
    }else if(chave < tabela[meio]){
        return buscaRecursiva(tabela, esquerda, meio-1, chave);
    }else{
        return buscaRecursiva(tabela, meio-1, direita, chave);
    }
}