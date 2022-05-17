import bubbleSort from "../../src/Ordenação/bubbleSort";


test("Ordenação basica",
     () => {
        let dadosNaoOrdenados = [5,7,8,9,4,10]
        let sequenciaOrdenada= [4,5,7,8,9,10]
        
        expect(bubbleSort(dadosNaoOrdenados)).toStrictEqual(sequenciaOrdenada);
    }
)
