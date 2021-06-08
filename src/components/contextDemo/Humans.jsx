import React, { Component } from 'react';
import LifeContext from './LifeContext';

class Humans extends Component {
    render() {
        return (
            <LifeContext.Consumer>
                {
                    context => (

            <div>
                <h1>Humans</h1>
                <img height={context.thumbnailHeight} src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" />
            </div>
                    )
                }
            </LifeContext.Consumer>
        );
    }
}

export default Humans;