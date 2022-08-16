import  {createStore, combineReducers } from 'redux';

import numerosReducer from './reducers/numerosReducer';

//Os reducers são as funções que alteram o valor do state global, a função reducers será chamada no Dispatch que ira enviar o objeto(action) para cada função tratar e utilizar caso necessário.
const reducers = combineReducers({ //responsavel por combinar todos os reducers(funções) para gerar uma store.
    numeros: numerosReducer,
    
})

function configStore(){
    return createStore(reducers); //função que ao ser chamada cria os estados gerenciados pelo react
}

export default configStore;