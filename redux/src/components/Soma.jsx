import Card from './Card';
import { connect, Connect } from 'react-redux';

const Soma = (props) => {

    const {min, max} = props;

    return (
        <Card title="Soma dos números" green={true}>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{max + min}</strong>
                </span>

            </div>
        </Card>
    )
}

const mapStateToProps = (state) =>{
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Soma);