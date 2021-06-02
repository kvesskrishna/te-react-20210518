import React, { Component } from 'react'
import Recipe from './Recipe'
export default class ChildrenDemo extends Component {
    state = {
        items: [
            {
                recipe: 'this is some recipe1',
                ingredients: ['ing 1', 'ing 2', 'ing 3']
            },
            {
                recipe: 'this is some recipe2',
                ingredients: ['ing 4', 'ing 5', 'ing 6']
            },
            {
                recipe: 'this is some recipe3',
                ingredients: ['ing 7', 'ing 8', 'ing 9']
            }],
        title: 'My Recipes'

    }
    removeIngredient(i, r) {
        // reconstruct the state by copying
        let ingArray = [...this.state.items[r].ingredients];
        let localItems = [...this.state.items];
        // console.log('before slice', items)
        // console.log(ingArray)

        // console.log(ingArray);
        // let a = [1, 2, 3];
        // let b = a; // copying reference of a not contents of a
        // let b = [...a]; // copying contents of a to b
        // b.push(4)
        // console.log(a, b);
        // ingArray
        ingArray.splice(i, 1) // ingarray is mutated
        localItems[r].ingredients = [...ingArray];
        // console.log('after slice', items)
        this.setState({ items: localItems })
        // console.log('ingredient ' + i + ' of recipe ' + r + ' removed')
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
