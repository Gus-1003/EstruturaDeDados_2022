/**
 * Conjunto ordenado de dados no qual os elementos podem ser inseridos ou removidos a partir de uma extremidade chamada de topo.
 * Uma pilha é uma estrutura de dados em que o acesso é restrito ao elemento recentemente adicionado.
 * É possível dizer que uma pilha é um tipo abstrato de dados baseado no princípio de Last-In, First-Out – LIFO, “o último a entrar é o primeiro a sair”. 
 * As principais operações para implementar uma pilha são: 
        * PUSH: Insere um dado no topo da pilha.
        * POP: Remove um dado do topo da pilha.
        * TOP: Retorna o topo da pilha.
        * ISEMPTY: Verifica se uma pilha está vazia.
        
 * author = https://github.com/taniro
 */

class Pilha {

    //Construtor padrão da classe Pilha;
    constructor(size = 10) {    // Tamanho da Pilha. Caso não informado a Pilha terá tamanho 10;
        this.dados = []         // Um array para armazenar os dados do processo;

        this.topo = 0           // Uma pilha que começa vazia o seu topo é 0;
        
        this.maxSize = size     // Um tamanho máximo que será passado por parâmetro;
    }

                                // Métodos Auxiliares: (Desenvolvidos Primeiro - Mais simples)
    //=========================================================================================
    length() {  // Retorna em qual posição está o ultimo elemento da pilha
        return this.topo;
    }
    
    isFull() {  // Caso o ultimo elemento esteja no indice limite do maxSize esse método retorna "True"
        return this.length() === this.maxSize
    }

    isEmpty() { // Caso o ultimo elemento esteja no indice "0" esse método retorna "True"
        return this.length() === 0
    }

    clear(){    // Função responsável por apagar todos os elementos da estrutura;
        this.topo = 0
    }

    toString(){// Retorna uma string contendo todos os elementos da Pilha.
        let result = "["

        for(let i=0; i<this.topo; i++){
            result += this.dados[i] + " "
        }

        result+="]"

        return result;
    }
    //=================================================================================

                                // Métodos principais:
    //=================================================================================
    push(dado) { // Adiciona um elemento na pilha - Passa um dado como parâmetro

        if (!this.isFull()) {   // Caso não esteja cheia

            this.dados[this.topo] = dado    // adicione um dado no indice topo
            this.topo++                     // o lugar do topo agora é topo + 1

        } else { // caso esteja cheia
            throw new Error("stack overflow") // lance a mensagem de erro de "stack overflow"
        }

    }

    pop() { // Remove um elemento da pilha
        if (!this.isEmpty()) {  // Caso não esteja vazia

            this.topo--         // Ocorrerá uma "Remoção logica" do elemento que está no topo

        } else {                // Caso esteja vazia
            throw new Error("stack underflow")  // lance a mensagem de erro de "stack underflow"
        }
    }

    top() { // Função que retorna o elemento no topo da pilha.

        if (!this.isEmpty()) { // Caso não esteja vazia
            return this.dados[this.topo-1]  // Retorne o elemento na posição topo - 1
        }

    }
    //==================================================================================

}

export default Pilha;