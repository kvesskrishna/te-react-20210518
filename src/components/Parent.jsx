import React from 'react';
import Child from './Child'
class Parent extends React.Component {
    // a = 0;
    constructor(props) {
        super(props);
        this.state = { a: 0 }
    }
    setA() {
        this.setState({ a: this.state.a + 1 });//async
        console.log(this.state.a)
    }
    render() {
        return (
            <div>
                <h3>Parent</h3>
                {this.state.a}
                <br />
                <button onClick={() => this.setA()}>set a</button>
                <Child a={this.state.a}></Child>
            </div>
        )
    }
}
export default Parent;