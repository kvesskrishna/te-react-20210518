import React, { Component } from 'react';
import LifeContext from './LifeContext';

class Dog extends Component {
    render() {
        return (
            <LifeContext.Consumer>
                {context=>(   <div>

                    <h1>Dog</h1>
                    <h3>{context.category}</h3>
                <img src="https://i.pinimg.com/originals/dd/65/d9/dd65d9eb78d10567f03130dd92b94536.png" height={context.thumbnailHeight} alt="" />
                    </div>

                )

                }
             
            </LifeContext.Consumer>
        );
    }
}

export default Dog;