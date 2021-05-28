import React from 'react';

class Child extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { a: props.a } // child is not updated when parent is updated
    }
    // decrement() {
    //     // this.props.a = this.props.a - 1; // cant update a in parent or class.
    // }
    render() {
        return (
            <div>
                <h3>Child</h3>
                {this.props.a}
                <br />
                <button onClick={() => this.props.decrementHandler()}>decrement</button>
            </div>
        )
    }
}
export default Child;
