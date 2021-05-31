import React, { Component } from 'react'
import Recipe from './Recipe'
export default class ChildrenDemo extends Component {
    state = {
        items: [{
            recipe: 'this is some recipe1',
            ingredients: ['ing 1', 'ing 2', 'ing 3']
        }, {
            recipe: 'this is some recipe2',
            ingredients: ['ing 4', 'ing 5', 'ing 6']
        }, {
            recipe: 'this is some recipe3',
            ingredients: ['ing 7', 'ing 8', 'ing 9']
        }]

    }
    removeIngredient(i, r) {
        console.log('ingredient ' + i + ' of recipe ' + r + ' removed')
    }
    render() {
        return (
            <div>
                <h1>Children Demo</h1>
                {this.state.items.map((item, index) => {
                    return (
                        <Recipe ingredientHandler={(i, r) => this.removeIngredient(i, r)} key={index} rid={index} item={item} />
                    )
                })}
            </div>
        )
    }
}
