import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        error: false,
        errorInfo: null,
        hasError: false
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({ error: error, errorInfo: errorInfo })
    }
    render() {
        if (this.state.error) {
            alert('there is an error')
            // return (
            //     <h1>Error occured</h1>
            // )
            return (
                <div>
                    <h1>Sorry, the counter value is greater than 5</h1>
                    <details>
                        {/* {this.state.error && this.state.error.toString()} */}
                        <br />
                        {this.state.errorInfo}
                    </details>
                </div>
            )
        }

        return this.props.children;

    }
}
