/*
- Fonte de Pesquisa: https://www.geeksforgeeks.org/selection-sort/
- Objetivo da Estrutura:
    1 - selecionar (daí o nome Selection Sort) o menor elemento da sequência; 
    2 - Trocar o elemento atual pelo menor que ele.
        + A ideia é executar várias vezes esses dois passos para ordenar um array;
*/

function selectionSort(array) {
    
    // --------------- Laço principal que percorre a estrutura:   -------------------------------------------------
    for(i =0; i < array.lengh; i++){
        
        let indicaMenor = i; // Váriavel que irá guardar o indice que possui o menor valor - Si iniciará a partir do indice 0
        
        // --------------- Processo de Busca por um menor valor que o atual:   -------------------------------------------------
        for(j = i; j < array.lengh; j++) { // Percorre o array procurando um indice que guarda um valor menor que o do indice I
            
            if(array[indicaMenor] > array[j]){   // Caso ache:        
                indicaMenor = j; // O valor de J (o indice que guardava o menor valor) será salvo
            }   
            
        }

        // --------------- Processo de Troca:   -------------------------------------------------
        if(i != indicaMenor){ // Caso o indice que guarde o menor valor não seja o "I" da vez:
            dados[i], dados[indicaMenor] = dadps[indicaMenor], dados[i] // Realize a troca de valores entre o I e o indice que guarda o menor valor
        }

    }
    
    return array; // Retorne o array com os valores ordenados
}

export default selectionSort;

/* 
- Embora sejam da mesma classe de complexidade, o Selection Sort, na prática, é mais lento do que o Insertion Sort;

- A complexidade de tempo de Selection Sort é O(N^2), pois há dois loops aninhados;

- O Selection Sort não é considerado um algoritmo eficiente para grandes entradas. 
    * Há alternativas O(n ∗ log^n), como Quick Sort e Merge Sort,

2. Dê um exemplo de sequencia entrada onde ocorram o maior número de trocas (pior caso):
    * [...,7,6,5,4,3,2,1]

3. Dê um exemplo de sequencia entrada onde ocorram o menor número de trocas (melhor caso).
    * [1,2,3,4,5,6,7,8,...]

4. Qual o limite assintótico superior do pior caso?
    * O(N^2)

5. Qual o limite assintótico superior do melhor caso?
    * O(N^2)
*/
