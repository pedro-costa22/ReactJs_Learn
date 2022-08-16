import React from "react";
import './Display.css';

class Display extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="display">

                <p className="previous">
                    {this.props.previous} {this.props.operator}
                </p>

                <p className="insert"> {this.props.insert} </p>
            </div>
        )
    }

}

export default Display;