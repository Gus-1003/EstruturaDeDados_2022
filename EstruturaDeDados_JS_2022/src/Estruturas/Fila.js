/**
 * Conjunto ordenado de dados no qual os elementos são inseridos na extremidade denominada "fim da fila" e inseridos na extremidade oposta que si chama "inicio da fila"
 * Tipo abstrato de dados baseado no princípio de First-In, First-Out – FIFO, “O primeiro a entrar é o primeiro a sair”. 
 * As principais operações para implementar uma pilha são: 
        * enqueue (Enfileirar): Insere um dado no fim da fila.
        * dequeue (Desenfileirar): Remove um dado do inicio da fila.
        * front: Retorna o elemento no inicio da fila.
        * isEMPTY: Verifica se a fila está vazia.
        
 * author = https://github.com/taniro
 */

class Fila {

    //Construtor padrão da classe Fila;
    constructor(size=10){   // Tamanho da fila. Caso não informado a fila terá tamanho 10;
        this.dados = [];    // Um array para armazenar os dados do processo;
        
        this.inicio = 0;    // Em uma fila que não possui elementos seu inicio se tem da posição 0;
        this.fim = 0;       // Em uma fila que não possui elementos o fim da lista é a posição 0;

        this.maxSize = size;// Um tamanho máximo que é passado por parâmetro;
    }


                                // Métodos Auxiliares: (Desenvolvidos Primeiro - Mais simples)
    //=========================================================================================
    length(){   // Retorna em qual posição está o ultimo elemento da fila;
        return this.fim - this.inicio
    }

    isFull(){   // Caso o ultimo elemento esteja no indice limite do maxSize esse método retorna "True"
        return this.length() === this.maxSize
    }

    isEmpty(){  // Caso o ultimo elemento esteja no indice "0" esse método retorna "True"
        return this.length() === 0
    }

    clear(){    // Função responsável por apagar todos os elementos da estrutura;
        this.inicio = 0
        this.fim = 0
    }

    toString(){ // Retorna uma string contendo todos os elementos da fila.		    
        let resultado = "["

        for (let i = 0; i < this.fim; i++) {
            resultado += `${this.dados[i]}, `;
        }

        resultado += "]"

        return resultado;
    }
    //=================================================================================

                                // Métodos principais: (Dependentes dos auxiliares)
    //=================================================================================

    enqueue(dado){ // Adiciona um elemento no fim da fila - Passa um dado como parâmetro
        
        if(!this.isFull()){// Caso não esteja cheia

            this.dados[this.fim] = dado // adicione um dado no ultimo indice atual
            this.fim ++                 // o fim da fila agora é fim + 1

        }else{  // caso esteja cheia
            throw new Error("queue overflow")   // lance a mensagem de erro de "queue overflow"
        }

    }

    dequeue(){  // Remove um elemento do inicio da fila
        
        if(!this.isEmpty()){    // Caso não esteja vazia
            this.inicio++       // Ocorrerá uma "Remoção logica" do elemento que está no inicio ao passar que o inicio agora é inicio + 1
        }else{                  // Caso esteja vazia
            throw new Error("queue underflow")  // lance a mensagem de erro de "queue underflow"
        }

    }

    front(){ // Função que retorna o elemento que se encontra no inicio da fila
        
        if(!this.isEmpty()){ // Caso não esteja vazia
            return this.dados[this.inicio] // Retorne o elemento na posição "inicio"
        }
    }
    //==================================================================================
}

export default Fila;