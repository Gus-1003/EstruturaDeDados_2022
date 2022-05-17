function bubbleSort(dadosNaoOrdenados){

    let DadosOrdenados;

    for(i=0; i < dadosNaoOrdenados.length; i++){

        // O I acaba tendo que rodar todo o array
        
        for(j=0; j <= dadosNaoOrdenados.length - 1 - i; j++){
            
            // O J para no penultimo já que ele já consegue olhar para o ultimo;

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