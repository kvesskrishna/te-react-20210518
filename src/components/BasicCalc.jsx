import React from 'react';

class BasicCalc extends React.Component {
    a = 12;
    b = 13;
    result = 0; // property of the class
    constructor(props) { // property of the class
        super(props);
    }
    calculate(operation) {
        if (operation === 'add') {
            this.result = this.a + this.b;
            return this.a + this.b;
        } else if (operation === 'sub') {
            this.result = this.a - this.b;

            return this.a - this.b;

        } else if (operation === 'mul') {
            this.result = this.a * this.b;

            return this.a * this.b;
        }

    }
    render() // property of the class
    {
        // let a = 15; // local properties of the method
        // let b = 16;
        let printname = () => {
            console.log('my name')
        }
        let setA = (x) => {
            this.a = x;
            console.log(this.a);
        }
        return (
            <div >
                <div>
                    {printname()}
                    <b>First Number: {this.a} </b>
                    <br />
                    <b>Second Number: {this.b}</b>
                    <br />
                    <b>Result: {this.result}</b>
                </div>
                <div>Sum: {this.calculate('add')}</div>
                <div>Difference: {this.calculate('sub')} </div>
                <br />
                <b>Result: {this.result}</b>
                <div>Product: {this.calculate('mul')} </div>
                <div>Quotient: </div>
                <br />
                <b>Result: {this.result}</b>
                <button onClick={() => setA(10)}>Change First Number</button>
            </div>
        )
    }

}

export default BasicCalc;