import React, { Component } from 'react'

export default class Ingredients extends Component {
    render() {
        return (
            <div>
                <h3>
                    {this.props.ing.map((i, index) => {
                        return (
                            <div key={index}>
                                <li >{i}
                                    <button onClick={() => this.props.removeHandler(index, this.props.rindex)}>Remove</button>
                                </li>
                            </div>
                        )
                    })}
                </h3>

            </div>
        )
    }
}
