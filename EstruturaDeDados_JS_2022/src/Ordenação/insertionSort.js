function insertionSort(dadosNaoOrdenados){

    for (let i = 1; i < dadosNaoOrdenados.length; i++) {

        let escolhido =  dadosNaoOrdenados[i];

        j = i-1;

        while(j >= 0 && dadosNaoOrdenados[j] > escolhido){
            dadosNaoOrdenados[j+1] = dadosNaoOrdenados[j];
            j = j-1;
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