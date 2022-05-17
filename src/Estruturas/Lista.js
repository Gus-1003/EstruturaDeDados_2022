class Node{ //nó - Instancias / elementos da estrutura
    constructor(dado){ // Aloca os dados
        this.dado = dado; // Alocação da entrada
        this.proximo = null; // Alocação do ultimo elemento
    }
}


class Lista {
    constructor(no){
        this.head = new Node(); // A cabeça possui todas as funções do nó mas não ocupa espaço na estrutura (Só aponta)
    }

    add(dado){ // Implimenta um elemento no inicio da fila 

        // 1º passo: Instância um novo elemento dentro de um objeto nó
        let novo_no = new Node(dado);

        // 2º passo: O elemento adicionado aponta para o elemento que a cabeça aponta (head.proximo)
        novo_no.proximo = this.head.proximo;

        // 3º passo: A cabeça aponta para o novo elemento
        this.head.proximo = novo_no;
    }

    append(dado){ // Implimenta um elemento no fim da fila 

        // 1º passo: Instância um novo elemento dentro de um objeto nó
        let novo_no = new Node(dado);

        // 2º passo: Instância uma variavel auxiliar e ela aponta para a cebaça
        let aux = this.head;

        // 3º passo: Procura o ultimo elemento - O elemento que aponta para nulo (aux.proximo)
        while(aux.proximo !== null){ // Enquanto o proximo elemento não for nulo continue
            aux = aux.proximo; // O objeto vira o seu proximo
            // aux.proximo == null
        }   

        // 4º passo: Esse ultimo elemento apontará para o novo elemento
        aux.proximo = novo_no; // novo_no vai tomar o lugar do null e ele apontará para o null
    }

    reomove(){ 
        return this.head.proximo === null;
    }

    isEmpty(){ 
    }

    isFull(){ 
    }

    length(){
    }
}

export default Lista;