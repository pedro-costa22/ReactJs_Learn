const initialState = {
    min: 1,
    max: 10
};

export default function(state = initialState, action) { //Objeto(Reducer) que possui chave e valor, Chave é nome (numero) e o valor é a função responsavel por gerar o estado referente a essa chave(numeros)
    switch(action.type){
        case 'NUM_MIN_ALTERADO':
            return {
                ...state,
                min: action.payload
            }

        case 'NUM_MAX_ALTERADO':
            return {
                ...state,
                max: action.payload
            }

        default: 
            return state
    }

};