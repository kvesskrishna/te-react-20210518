import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
    // mounting phase
    a = 0;
    runInterval;
    constructor(props) {
        super(props);
        console.log('construtor called..')
        this.state = { data: 'component data', count: 0 };
    }
    start = () => {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        console.log('render called')
        if (this.state.count > 5) {
            throw new Error('Count cannot be cannot be greater than 5');
        }
        return (
            <>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.start}>Increment Count</button>

                <h1>Life cycle methods <br />Data: {this.props.data} <br />{this.state.data}</h1>;
            </>
        )
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
        // this.runInterval = setInterval(() => console.log('hi'), 1000);

        console.log('componentDidMount called')
        this.setState({ data: 'component data 2' })
    }

    // updating phase

    // static getDerivedStateFromProps(props, state)

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate called')
        console.log(nextProps, nextState)
        return true

    } // before rendering DOM when new state or props are received
    // render() {}
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate called')
        console.log(prevProps, prevState)
        return 'from snapshot'
    } // before making changes to DOM
    componentDidUpdate() {
        console.log('componentDidUpdate called')
    } // immediately after changes are updated


    // unmounting phase

    componentWillUnmount() {
        // clearInterval(this.runInterval)
        console.log('componentWillUnmount called')
        // alert('componentWillUnmount called')
    }


    // error handling

    static getDerivedStateFromError() { }
    componentDidCatch() { }

    //ErroR Boundaries
    // fallback ui

}
