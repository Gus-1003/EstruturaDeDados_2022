class Node{ //nó - Instancias / elementos da estrutura
    constructor(dado){ // Recebe os dados
        this.dado = dado; // atributo para alocar
        this.anterior = null; // Guarda o dado anterior ao atual
        this.proximo = null; // Guarda o dado seguinte ao atual
    }
}

class ListaDuplamenteLigada {
    constructor(no){

        // AVISO: SE VOCE ESTÁ DIZENDO QUE UMA VARIÁVEL É NULA, EM TODOS OS LUGARES QUE ELA APARECERER VOCÊ TERÁ QUE TESTAR SE ELA NÃO ESTÁ VAZIA

        this.head = new Node(); // A cabeça possui todas as funções do nó mas não ocupa espaço na estrutura (Só aponta)
        this.tail = new Node();
    }

    isEmpty(){
        return this.head === null;  
    }

    add(dado){

        // 1º passo: Instância um novo elemento dentro de um objeto nó
        let novo_no = new Node(dado);

        if(this.isEmpty()){
            this.head = novo_no;
            this.tail = novo_no;
        }else{
            // 2º passo: O elemento adicionado no começo aponta para a cabeça
            novo_no.proximo = this.head;

            // 3º passo: O elemento anterior a cabeça foi o elemento adicionado 
            this.head.anterior = novo_no;

            // 4º passo: O elemento anterior ao nó adicionado no inidio deve ser nulo
            novo_no.anterior = null;

            // 5º passo: Por fim o novo nó será a cabeça
            this.head = novo_no;
        }
    }

    append(dado){ // Implimenta um elemento no fim da fila 

        // 1º passo: Instância um novo elemento dentro de um objeto nó
        let novo_no = new Node(dado);

        if(this.isEmpty()){
            this.head = novo_no;
            this.tail = novo_no;
        }else{
            // 2º passo: O elemento adicionado no começo aponta para a cabeça
            novo_no.anterior = this.tail;

            // 3º passo: O elemento anterior a cabeça foi o elemento adicionado 
            this.tail.proximo = novo_no;

            // 4º passo: O elemento anterior ao nó adicionado no inidio deve ser nulo
            novo_no.proximo = null;

            // 5º passo: Por fim o novo nó será a cabeça
            this.tail = novo_no;
        }
    }

    reomoveFirst(){ 
        if(this.isEmpty()){
            throw new error ("Estrutura vazia")
        }else{
            this.head = this.head.proximo;
            this.head.anterior = null;
        }
    }

    reomoveLast(){ 
        if(this.isEmpty()){
            throw new error ("Estrutura vazia")
        }else{
            this.tail = this.tail.anterior;
            this.tail.proximo = null;
        }
    }


    length(){

        // Partindo da Cabeça - Introdução lógica positiva
        let cont = 0;

        let Aux = this.head;

        while(Aux!=null){
            cont++
        }

        return cont;


        /* Partindo da calda

        let cont = 0;

        let Aux = this.tail;

        while(Aux!=null){
            cont++;
            Aux = Aux.anterior;
        }

        return cont;

        */
    }


    addAt(dado, pos){


    }

    removeAt(){


    }
}

export default ListaDuplamenteLigada;