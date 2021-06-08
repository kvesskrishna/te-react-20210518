import React, { Component } from 'react';
import Animals from './Animals';
import Humans from './Humans'
import Reptiles from './Reptiles';
import LifeContext from './LifeContext'


class LivingBeings extends Component {
    state = {
        category: 'Living Creatures',
        thumbnailHeight: 150 
    }
    heightRef = React.createRef();
    setHeight=()=>{
        this.setState({thumbnailHeight: this.heightRef.current.value})
    }
    
    render() {
        const {category, thumbnailHeight} = this.state;
        return (
            <LifeContext.Provider value={this.state}>
            <div>
                <label htmlFor="">Height</label>
                <br />
                <input type="text" onChange={this.setHeight} ref={this.heightRef}/>
                <Humans />
                <Animals >
                    <h2>test</h2>
                </Animals>
                <Reptiles/>
            </div>
            </LifeContext.Provider>
        );
    }
}

export default LivingBeings;