import React, { Component } from 'react'
import ErrorMessage from './ErrorMessage';
export default class ErrorBoundary extends Component {
    state = {
        error: false,
        errorMessage: null,
        // hasError: false
    }
    static getDerivedStateFromError(error) {
        return { error: true, errorMessagge: error.toString() };
    }
    componentDidCatch(error, errorMsg) {
        this.setState({ error: error, errorMessage: errorMsg })
        // catch error
        console.log('error: ' + error)

        console.log(errorMsg)
    }
    mytest() {
        console.log('regular function this: ', this)
    }
    test = () => {

        console.log('arrow function this> ', this)
    }
    render() {
        this.test();
        this.mytest()
        const { error, errorMessage } = this.state;
        // return !this.state.errorMessage ? this.props.children : <ErrorMessage {...{ error, errorMessage }} />
        if (this.state.errorMessage) {
            // alert('there is an error')
            // return (
            //     <h1>Error occured</h1>
            // )
            return (
                <ErrorMessage {...{ error, errorMessage }}></ErrorMessage>
                // <div>
                //     <h1>Sorry, the counter value is greater than 3</h1>
                //     <details>
                //         {/* {this.state.error && this.state.error.toString()} */}
                //         <br />
                //         {this.state.errorMessage}
                //     </details>
                // </div>
            )
        }
        return this.props.children;
    }


}


export class Counter extends Component {
    state = { counter: 0 }
    handleClick() {
        this.setState(({ counter }) => ({ counter: counter + 1 }))
    }
    render() {
        if (this.state.counter > 3) {
            throw new Error('count not valid..')
        }
        return (
            <div>
                {this.state.counter}
                <br />
                <button onClick={() => this.handleClick()}>Click</button>
            </div>
        )
    }
}
