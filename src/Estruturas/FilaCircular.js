class FilaCircular {
    constructor(size){
        this.inicio = 1; // Precisa começar do 1 para sempre ter um espaço de 1 entro o que será o inicial do fim absoluto
        this.fim = 0;
        this.dados = []; 
        this.capacidade = size;
    }

    enqueue(dado){ // Alterado
        if(!this.isFull()){
            this.dados[this.fim] = dado

            if(this.fim === this.capacidade){ // Se de 7 ele antigir o 7 ele precisar zerar para dar a volta
                this.fim = 0
            }else{ // Caso ainda não tenha atingido a capacidade => Continue adiantando o fim (Remoção lógica)
                this.fim = this.fim++
            }

        } else{
            throw new Error("queue overflow") // Estouro do limite maximo da fila
        }
    }

    dequeue(){
        if(!this.isEmpty()){
            if(this.inicio === this.capacidade){ // Se de 7 ele antigir o 7 ele precisar zerar para dar a volta
                this.inicio = 0
            }else{ // Caso ainda não tenha atingido a capacidade => Continue adiantando o inicio (Remoção lógica)
                this.inicio = this.inicio++
            }
        }else{
            throw new Error("queue underflow") // Estouro do limite minimo da fila
        }
    }

    front(){ //Alterado
        if(!this.isEmpty()){ // Se não estiver Vazia
            return this.dados[this.inicio] // Retorne o valor do dado no array em que está o indici inicio;
        }
    }

    isEmpty(){ //Alterado
        return this.length() === this.fim // Está vazio quando o tamanho for relativo ao final (Lembrando da caracteristica de -1)
    }

    isFull(){ //Alterado
        return this.inicio() === this.fim+1 // Estará cheio quando o indice inicio for o proximo depois da posição do indice fim da fila
    }

    length(){ //Alterado
        if(this.isEmpty()) return 0; // Caso a pilha esteja vazia retorne a capacidade 0
        if(this.inicio<this.fim) return (this.fim-this.inicio) // Caso o inicio seja menor que o fim, retorne a subtração dos indices
        else return(this.capacidade - ((this.inicio + this.fim) + 1)) // Caso o indice inicio seja maior que o indice fim, retorne a somatoria do maior com o menor, some mais um e subtraia da capacidade;
    }
}

export default FilaCircular;