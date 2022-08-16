import React, {useState} from 'react';
import './Calculator.css';

import Display from '../components/Display/Display';
import Button from '../components/Buttons/Button';

class Calculator extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        insert: '',
        previous: '',
        operator: ''
      }
    }
    
    //function to clear display values;
    clearDisplay(){
      this.setState({
        insert: '',
        previous: '',
        operator: '',
      })
    };

    //function to add values in display;
    insertNumber = (num) =>{
      this.insertAdd = `${this.state.insert}${num}`;
      this.setState({insert: this.insertAdd}); 
    }

    //function responsible for calculating and accumulating the results when clicking on an operator;
    calculator = (operator) => {

      //set current values in display
      this.setState({
        previous: this.state.insert,
        insert: '',
      });

      //converting states to numbers
      this.previousNumber = Number(this.state.previous);
      this.currentNumber = Number(this.state.insert);

      if(this.state.operator === '') {
        if(this.state.insert != '') {
          this.setState({
            operator: operator
          });
        }

      } else {
        this.result = null;

        switch(this.state.operator){
          case "+":
            this.result = this.previousNumber + this.currentNumber;
            break;
  
          case "-": 
            this.result = this.previousNumber - this.currentNumber;
            break;
  
          case "*": 
            this.result = this.previousNumber * this.currentNumber;
            break;
  
          case "/": 
            this.result = this.previousNumber / this.currentNumber;
            break; 
        }

        this.setState({
          previous: this.result,
          operator: operator,
          insert: ''
        });

        
      }

    }

    //function that performs the final calculation
    equal = () =>{

       //converting states to numbers
       this.previousNumber = Number(this.state.previous);
       this.currentNumber = Number(this.state.insert);
       this.result = null;

      switch(this.state.operator){
        case "+":
          this.result = this.previousNumber + this.currentNumber;
          break;

        case "-": 
          this.result = this.previousNumber - this.currentNumber;
          break;

        case "*": 
          this.result = this.previousNumber * this.currentNumber;
          break;

        case "/": 
          this.result = this.previousNumber / this.currentNumber;
          break;

      }

     if(this.state.insert != '' && this.state.previous != ''){
      this.setState({
        insert: this.result,
        previous: '',
        operator: ''
      });
     }
    }

  
    //Return html in browser;
    render(){
      return (
        <div className='contCalculator'>
          <Display 
            previous={this.state.previous} 
            insert={this.state.insert}
            operator={this.state.operator}
          />

          <div className='row'>
            <Button value="AC" btnClass="clear" setAction={() => this.clearDisplay()}/>
            <Button value="/" btnClass="buttonNumbers operator" setAction={this.calculator}/>
            
          </div>

          <div className='row'>
            <Button value={7} btnClass="buttonNumbers" setAction={this.insertNumber}/>
            <Button value={8} btnClass="buttonNumbers" setAction={this.insertNumber}/>
            <Button value={9} btnClass="buttonNumbers" setAction={this.insertNumber}/>
            <Button value="*" btnClass="buttonNumbers operator" setAction={this.calculator}/>

          </div>

          <div className='row'>
            <Button value={4} btnClass="buttonNumbers" setAction={this.insertNumber}/>
            <Button value={5} btnClass="buttonNumbers" setAction={this.insertNumber}/>
            <Button value={6} btnClass="buttonNumbers" setAction={this.insertNumber}/>
            <Button value="-" btnClass="buttonNumbers operator" setAction={this.calculator}/>
          </div>

          <div className='row'>
            <Button value={1} btnClass="buttonNumbers" setAction={this.insertNumber}/>
            <Button value={2} btnClass="buttonNumbers" setAction={this.insertNumber}/>
            <Button value={3} btnClass="buttonNumbers" setAction={this.insertNumber}/>
            <Button value="+" btnClass="buttonNumbers operator"setAction={this.calculator} />
          </div>

          <div className='row'>
            <Button value={0} btnClass="buttonNumbers zero" setAction={this.insertNumber}/>
            <Button value="=" btnClass="buttonNumbers operator equal" setAction={this.equal}/>
            

          </div>

        </div>

      )
    }
}

export default Calculator;

