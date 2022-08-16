import React from "react";
import './Button.css';

class Button extends React.Component {

    constructor(props){
        super(props);
    }

   

    render(){
        return (
            <button 
                className={this.props.btnClass}
                onClick={() => this.props.setAction(this.props.value)}>
                 {this.props.value}
            </button>
        )

    }

}



export default Button;