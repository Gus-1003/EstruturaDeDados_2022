class Node {
	constructor(dado) {
		this.dado = dado;
		this.esquerda = null;
        this.direita = null;
	}
}

class arvoreBinariaBusca {

    //============================================ Construtor da Árvore ================================
	constructor() {
		raiz = null;
	}

    //============================================ Funções Acessorios - Essenciais ================================
    inserirNode(raiz, valor){
        if(raiz.dado < valor){

            if(raiz.esquerda === null){
                let folha = new Node(valor);
                raiz.esquerda = folha;
            } else{
                this.inserirNode(raiz.esquerda, valor);
            }

        }else{

            if(raiz.direita === null){
                let folha = new Node(valor);
                raiz.direita = folha;
            } else{
                this.inserirNode(raiz.direita, valor);
            }

        }
    }

    listarNode(){

	}

    //============================================ Funções Principais - Dependentes ================================
	inserir(dado) {

        if (raiz === null){ // Caso 1: Raiz sem valor
            let novo_no = new Node(dado);
            return this.raiz = novo_no;
        }else{
            this.inserirNode(this.raiz, dado);
        }
	}

    listar(){
        
	}
}