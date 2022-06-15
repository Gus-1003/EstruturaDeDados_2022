/*
- Fonte de Pesquisa: https://www.geeksforgeeks.org/bubble-sort/?ref=gcse
- Objetivo da Estrutura:
    1 - Percorre todo o array e troca repetidamente os elementos **"adjacentes"** se eles estiverem na ordem errada.
*/

function bubbleSort(dadosNaoOrdenados){

    let DadosOrdenados;
    
    // --------------- Laço do X - Quem compara:   -------------------------------------------------
    for(i=0; i < dadosNaoOrdenados.length; i++){
        
        // --------------- Laço do y - Quem está sendo comparado:   -------------------------------------------------
        for(j=0; j <= dadosNaoOrdenados.length - 1 - i; j++){
         
            // --------------- caso o próximo indice guarde um valor maior que o atual:  -> Troque  --------------------------------------------
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
