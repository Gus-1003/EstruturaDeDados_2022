function quickSort(array, inferior, superior) {
    if(inferior < superior){
        let pivo = array[superior];
        let i, j;
        i = inferior -1;
        for (j = inferior; j <= superior-1; j++) {
            if(array[j] <= pivo){
                i++;
                let aux = array[j]
                array[j] = array[i]
                array[i] = aux;
            }   
        }
        let aux = array[superior]
        array[superior] = array[i+1]
        array[i+1] = aux;
        pivo_pos = i+1;

        quicksort(array, inferior, pivo_pos-1)
        quicksort(array, pivo_pos+1, superior)

    }

    return array; 
}

export default quickSort;
/* 
- Quick Sort é um algoritmo eficiente de ordenação.

- O algoritmo baseia a ordenação em sucessivas execuções de particionamento, 
uma rotina que escolhe um pivot e o posiciona no array de uma maneira em que: 
    * Os elementos menores ou iguais ao pivot estão à sua esquerda e 
    * Os maiores estão à sua direita.

- Apesar de estar na mesma classe de complexidade do Merge Sort e do Heap Sort, 
há experimentos que demonstram que o Quick Sort 
em seu melhor caso e caso médio é por volta de 3x 
mais eficiente que o Merge Sort, porque ele contém constantes menores.

2. Dê um exemplo de sequencia entrada onde ocorram o maior número de trocas (pior caso):
    * Quando uma lista já está ordenada tanto crescente como decrescente. 
    * [ 1, 2, 3, 4, 5, 6, 7, 8 ]
    * [ 8, 7, 6, 5, 4, 3, 2, 1 ]

3. Dê um exemplo de sequencia entrada onde ocorram o menor número de trocas (melhor caso).

4. Qual o limite assintótico superior do pior caso?
    * O(n²)

5. Qual o limite assintótico superior do melhor caso?
    * O(n ∗ log^n)
*/
