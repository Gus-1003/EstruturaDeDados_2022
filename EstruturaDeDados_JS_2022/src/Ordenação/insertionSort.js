/*
- Fonte de Pesquisa: https://www.geeksforgeeks.org/insertion-sort/
- Objetivo da Estrutura:
    1 - A lógica do algoritmo inserction funciona como si você estivesse adicionando novos valores e comparando os os anteriores;
    2 - Ao andar no array você compara si o valor atual é menor que o anterior, enquanto for, troque;
*/

function insertionSort(dadosNaoOrdenados){
    
    // --------------- Laço principal que percorre a estrutura:   -------------------------------------------------
    for (let i = 1; i < dadosNaoOrdenados.length; i++) {

        let escolhido =  dadosNaoOrdenados[i]; // Váriavel que irá guardar o indice que possui o menor valor - Si iniciará a partir do indice 1

        j = i-1; // O "J" será o indice que: "Caso tiver um valor maior que o atual "I", será substituido. - O J começa do 0
        
        // ---------------  Enquanto o valor atual for menor que seu anterior:  -------------------------------------------------
        while(j >= 0 && dadosNaoOrdenados[j] > escolhido){ // O J, como um indice, não pode ser negativo (Condição de parada) AND O valor em J é maior que o valor em I
            
            //    12   	   11   	   13   	   5   	   6   
            dadosNaoOrdenados[j+1] = dadosNaoOrdenados[j];          // Não estou entendendo - Aqui deveria ocorrer trocas 
            j = j-1; // sair do laço
        }

        dadosNaoOrdenados[j+1] = escolhido;
    }

    return dadosNaoOrdenados;
}

export default insertionSort;

/* 
- O Insertion Sort nada mais é do que a execução do algoritmo de inserção ordenada repetidas vezes.
- O Insertion Sort é in-place, estável e O(n^2).
- Na teoria, Insertion Sort, Selection Sort e Bubble Sort estão na mesma classe de complexidade, qual seja O(n2). 
Na prática, o Insertion Sort apresenta o melhor desempenho entre esses 3 algoritmos.

2. Dê um exemplo de sequencia entrada onde ocorram o
    * O pior caso do Insertion Sort é um array ordenado em ordem reversa, 
    pois toda tentativa de inserção ordenada deve percorrer o array todo à esquerda 
    trocando os elementos até encaixar o atual na primeira posição.

    * EX.: 8, 7, 6, 5, 4, 3, 2, 1

3. Dê um exemplo de sequencia entrada onde ocorram o
    * O melhor caso é quando o array já está ordenado.

    * EX.: 1, 2, 3, 4, 5, 6, 7, 8

4. Qual o limite assintótico superior do pior caso?
    * O(n²)

5. Qual o limite assintótico superior do melhor caso?
    * O(n)

*/
