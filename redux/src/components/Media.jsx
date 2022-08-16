import Card from './Card';
import { connect } from 'react-redux'; //Padrão de projeto, com o connect será possivel conectar o 
                                       //componente media com o state global que está sendo gerenciado por redux

const Media = (props) => {
    const {min, max} = props;

    return (
        <Card title="Media dos números" blue={true}>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(min + max) / 2}</strong>
                </span>

            </div>
        </Card>
    )
}

const mapStateToProps = (state) => { //Função que faz o mapeamento do que está no estado do projeto para ser usado no componente.
    //console.log(state); //o state vem do storeConfig (reducers)

    return {
        min: state.numeros.min,
        max: state.numeros.max
    } //O objeto gerado será enviado para a props do proprio componente, para acessar irei usar o props.numeros.
}

export default connect(mapStateToProps)(Media);