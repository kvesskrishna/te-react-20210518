import React, { Component } from 'react';
import Dog from './Dog';
import LifeContext from './LifeContext';

class Animals extends Component {
    // category = ''
    // constructor({category}){
    //     super({category})
    //     console.log(category)
    //     this.category = category
    // }
    render() {
        console.log(this.props)
        return (
            <LifeContext.Consumer>
{context =>(

            <div>
                <h1>Animals</h1>
                <h4>{context.category}</h4>
                {this.props.children}
                <img height={context.thumbnailHeight} src="https://sreditingzone.com/wp-content/uploads/2018/01/sam-editg-dd-1024x576.jpg" alt="" />
                <Dog />
            </div>
)}
            </LifeContext.Consumer>
        );
    } 
}

export default Animals;