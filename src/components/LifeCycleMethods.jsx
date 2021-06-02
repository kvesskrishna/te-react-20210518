import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
    // mounting phase

    constructor(props) {
        super(props);
        console.log('construtor called..')
        this.state = { data: 'component data' }
    }
    render() {
        console.log('render called')
        return <h1>Life cycle methods <br />Data: {this.props.data} <br />{this.state.data}</h1>;
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getderivedstatefromprops called..', props, state)
        if (props.data == state.data) {
            console.log('props and state data are same')
        }
        else {
            console.log('props and state data are not same')

        }
    }
    componentDidMount() {
        console.log('componentDidMount called')
        this.setState({ data: 'component data 2' })
    }

}
