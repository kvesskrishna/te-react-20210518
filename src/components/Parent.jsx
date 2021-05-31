import React from 'react';
import Child from './Child'
class Parent extends React.Component {
    // a = 0;
    constructor(props) {
        super(props);
        this.state = { a: 0 }
    }
    increment() {
        this.setState({ a: this.state.a + 1 });
        // setInterval(() =>)
        console.log(this.state.a)
    }
    decrement() {
        this.setState({ a: this.state.a - 1 });
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Parent</h3>
                {this.state.a}
                <br />
                <button onClick={() => this.increment()}>increment</button>
                <Child decrementHandler={() => this.decrement()} a={this.state.a}></Child>
                {this.props.children}
            </div>
        )
    }
}
export default Parent;