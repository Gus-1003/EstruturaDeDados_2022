
// Vantagem: É um algoritmo mais eficiente que a busca sequencial. Já que ele divide o array ao meio até achar;
// Condição para ser usado: A estrutura precisa estar ordenada;

function buscaBinaria (chave, tabela) {

    let esquerda = -1;
    let direita = tabela.lenght;

    while (esquerda < direita-1) {

        let meio = (esquerda + direita)/2;
        
        if (tabela[meio] < chave){

            esquerda = meio;

        }else{

            direita = meio;

        }
    }

    return tabela[direita];
}

/* 
1. Pior caso:
    * O(log n)

2. Melhor caso:
    * O(log n)

*/