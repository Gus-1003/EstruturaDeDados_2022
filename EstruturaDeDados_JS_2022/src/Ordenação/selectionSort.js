function selectionSort(array) {
    for(i =0; i < array.lengh; i++){
        let indicaMenor = i;

        for(j = i; j < array.lengh; j++) {
            if(array[indicaMenor] > array[j]){
                indicaMenor = j;
            }   
        }

        if(i != indicaMenor){
            dados[i], dados[indicaMenor] = dadps[indicaMenor], dados[i]
        }

    }
    
    return array; 
}

export default selectionSort;

/* 
- Quick Sort tem uma rotina básica muito simples e direta: 
    * selecionar (daí o nome Selection Sort) o menor elemento da sequência e colocar esse elemento na primeira posição do array.
        + A ideia é executar várias vezes esses dois passos para ordenar um array;

- Embora sejam da mesma classe de complexidade, o Selection Sort, na prática, é mais lento do que o Insertion Sort;

- A complexidade de tempo de Selection Sort é O(N^2), pois há dois loops aninhados;

- O Selection Sort não é considerado um algoritmo eficiente para grandes entradas. 
    * Há alternativas O(n ∗ log^n), como Quick Sort e Merge Sort,

2. Dê um exemplo de sequencia entrada onde ocorram o maior número de trocas (pior caso):
    * 

3. Dê um exemplo de sequencia entrada onde ocorram o menor número de trocas (melhor caso).
    * 

4. Qual o limite assintótico superior do pior caso?
    * 

5. Qual o limite assintótico superior do melhor caso?
    * 
*/