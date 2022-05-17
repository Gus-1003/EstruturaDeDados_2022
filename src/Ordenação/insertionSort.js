function insertionSort(dadosNaoOrdenados){

    for(i=0; i < dadosNaoOrdenados.length; i++){

        escolhido = vetor[i];

        J = i + 1;

        while(j>=0 && vetor[j] > escolhido){
            
            vetor[j+1] = vetor[j]
            J = i - 1;
        }

        vetor[j+1] = escolhido;
    }

    return dadosNaoOrdenados;
}

export default insertionSort;