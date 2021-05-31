import React, { Component } from 'react'
import Ingredients from './Ingredients'
export default class Recipe extends Component {
    render() {
        console.log(this.props.rid)
        return (
            <div>
                <h2>{this.props.item.recipe}</h2>
                <Ingredients rindex={this.props.rid} removeHandler={(i, r) => this.props.ingredientHandler(i, r)} ing={this.props.item.ingredients} />
            </div>
        )
    }
}
