import React from 'react';

class Child extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Child</h3>
                {this.props.a}
            </div>
        )
    }
}
export default Child;
