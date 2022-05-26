function buscaSequencial(chave, dados) {

/* 
    // Caso Simples:

    for (var i = 0; i < dados.length; i ++){

    if (dados[i]==chave)
        return dados[i];
    }

    return -1;
*/

    // Caso Elegante: (Com sentinela)

    var tam = dados.length;
    dados[tam] = chave;
    
    let i;
    
    for (i = 0; chave != dados[i]; i ++){}
    
    if (i != tam){
        return dados[i];
    }
    
    return -1;
    
}

/* 
1. Pior caso:
    * f(t) = n
    * Caso seja o ultimo ou não esteja na lista
        + Em situações de estruturas não ordenadas isso ocorre com mais frequência;

2. Melhor caso:
    * O elemento sendo o primeiro
    * Em caso de estruturas ordenadas, caso seja visto o elemento posterior ao elemento a busca pare;

3. Caso Médio:
    * f(t) = n/2.

4. Qual a operação que sempre se repete? É possível criar uma versão do algoritmo sem esse trecho:
    * Baseados no fenômeno da recuperação recorrente de registros.
        + Método mover-para-frente: sempre que uma pesquisa obtiver êxito, o registro recuperado é colocado no início da tabela.
        + Método da transposição: um registro recuperado com sucesso é trocado com o registro imediatamente anterior.
*/