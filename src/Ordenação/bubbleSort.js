function bubbleSort(dadosNaoOrdenados){

    let DadosOrdenados;

    for(i=0; i < dadosNaoOrdenados.length; i++){
        for(j=0; j <= dadosNaoOrdenados.length - 1 - i; j++){
            if(dadosNaoOrdenados[j] > dadosNaoOrdenados[j++]){

                aux = dadosNaoOrdenados[j]
                dadosNaoOrdenados[j] = dadosNaoOrdenados[j++]
                dadosNaoOrdenados[j++] = aux
            }
        }
    }

    return dadosNaoOrdenados;
}

export default bubbleSort;