function mergeSort(array){ // Tem como função quebrar - No final retornando os elementos juntos pelo merge
    if(vetor.length === 1){
        return vetor;
    }

    const mid = math.floor(array.length / 2);

    const esquerda = vetor.slide(0, mid);
    const direita = vetor.slide(min, array.length);

    return merge(mergeSort(esquerda), mergeSort(direita));
}



function merge(esquerda, direita){
    let iteraEsquerda = 0;
    let iteraDireita = 0;
    let merge = [];

    while(iteraEsquerda < esquerda.length && iteraDireita < direita.length){
        if(esquerda[iteraEsquerda] < direita[iteraDireita]){
            merge.push(esquerda[iteraEsquerda])
        }else{
            merge.push(direita[iteraDireita])
        }
    }

    while(iteraEsquerda < esquerda.length){
        merge.push(esquerda[iteraEsquerda[iteraEsquerda]])
    }

    while(iteraDireita < direita.length){
        merge.push(direita[iteraDireita[iteraDireita]])
    }

    return merge;
}

export default mergeSort;