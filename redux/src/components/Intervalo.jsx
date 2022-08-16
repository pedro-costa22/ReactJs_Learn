import './Intervalo.css';
import { connect } from 'react-redux';
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros';

import Card from './Card';

const Intervalo = (props) => {

    const {min, max} = props;

    return (
        <Card title="Intervalo de números" red={true}>
            <div className='intervalo'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min}  onChange={(e) => props.alterarMinimo(+e.target.value)}/>
                </span>

                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={(e) => props.alterarMaximo(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
};

const mapStateToProps = (state) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
};

//Dispatch
const mapDispatchToProps = (dispatch) => { //dispatch é um parametro que vem do proprio redux.
    return {
        alterarMinimo(novoNumero){
            //Action Creator -> Action
           const action = alterarNumeroMinimo(novoNumero);
           dispatch(action);
        },

        alterarMaximo(novoNumero){
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action);
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);