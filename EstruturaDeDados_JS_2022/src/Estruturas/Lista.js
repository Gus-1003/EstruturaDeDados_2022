

class Node{ //nó - Instancias / elementos da estrutura

    //Construtor do nós que serão usados no decorrer da Lista
    constructor(dado){ // Aloca os dados

        this.dado = dado; // Endereço do dado alocado;

        this.proximo = null; // Endereço do dado para o qual este aponta;
    }

}


class Lista {

    //Construtor padrão da classe Pilha;
    constructor(){

        this.head = new Node(); // Instanciação de um objeto do tipo Node denominado "Head"

    }

    
                                // Métodos Auxiliares: (Desenvolvidos Primeiro - Mais simples)
    //===============================================================================================
	clear() {
		this.head = new Node(null);
	}

    isEmpty() {
		return this.head.proximo === null;
	}

    size() {
		let cont = 0;
		let tmp = this.head.proximo;

		while (tmp !== null) {
			tmp = tmp.proximo;
			cont++;
		}
		return cont;
	}

    
	toString() {
		let aux = this.head.proximo;
		let result = "";

		while (aux !== null) {
			result += aux.dado + (aux.proximo ? "->" : "");
			aux = aux.proximo;
		}

		return result;
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
    //=================================================================================

                                // Métodos mais complexos:
    //=================================================================================

    
	search(dado) {
		if (this.isEmpty()) {
			return false;
		} else {
			let tmp = this.head.proximo;
			while (tmp !== null) {
				if (tmp.dado === dado) {
					return true;
				}
				tmp = tmp.proximo;
			}
			return false;
		}
	}

    removeBeginning() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		} else {
			let aux = this.head.proximo;
			this.head.proximo = aux.proximo;
		}
	}

	removeEnd() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		}

		let aux_a = this.head;
		let aux_b = this.head.proximo;

		while (aux_b.proximo !== null) {
			aux_a = aux_b;
			aux_b = aux_b.proximo;
		}
		aux_a.proximo = null;
		return aux_b.dado;
	}

	last() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		}

		let aux_a = this.head;
		let aux_b = this.head.proximo;

		while (aux_b.proximo !== null) {
			aux_a = aux_b;
			aux_b = aux_b.proximo;
		}
		return aux_b.dado;
	}

	addAt(posicao, dado) {
		if (posicao >= this.size()) {
			//adicionando no final
			this.append(dado);
		} else {
			if (posicao <= 0) {
				//adicionando no inicio
				this.add(dado);
			} else {
				let novo_no = new Node(dado);
				let i = 0;

				let aux_a = this.head;
				let aux_b = this.head.proximo;

				while (i != posicao) {
					//iteração
					aux_a = aux_b;
					aux_b = aux_b.proximo;
					i++;
				}
				aux_a.proximo = novo_no;
				novo_no.proximo = aux_b;
			}
		}
	}

	addInOrder(dado) {
		let novo_no = new Node(dado);

		if (this.isEmpty()) {
			this.head.proximo = novo_no;
		} else {
			let aux_a = this.head;
			let aux_b = this.head.proximo;

			while (aux_b != null) {
				if (aux_b.dado > dado) {
					aux_a.proximo = novo_no;
					novo_no.proximo = aux_b;
					return;
				}
				//iteração
				aux_a = aux_b;
				aux_b = aux_b.proximo;
			}

			//caso o if nunca seja true
			aux_a.proximo = novo_no;
			novo_no.proximo = null;
			return;
		}
	}

    //==================================================================================
}

export default Lista;