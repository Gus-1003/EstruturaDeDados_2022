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

/* 
2. Dê um exemplo de sequencia entrada onde ocorram o
    * maior número de trocas (pior caso).
    * EX.: 90, 45, 34, 23, 12, 11, 9, 2

3. Dê um exemplo de sequencia entrada onde ocorram o
    * menor número de trocas (melhor caso).
    * EX.: 2, 9, 11, 12, 23, 34, 45, 90

4. Qual o limite assintótico superior do pior caso?
    * O(n²)

5. Qual o limite assintótico superior do melhor caso?
    * O(n²), mas se colocarmos uma flag dentro do if vamos saber quando não entrou aí poderia ser reduzido para 0(n) 
*/