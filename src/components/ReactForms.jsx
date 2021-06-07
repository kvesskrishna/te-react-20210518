import React, { Component } from 'react'

export default class ReactForms extends Component {
    state = {
        name: 'x',
        email: 'x@y.z'
    }
    // setName = (e) => {
    //     console.log(e.target.value)
    //     this.setState({ name: e.target.value })
    // }
    // setEmail = (e) => {
    //     console.log(e.target.value)
    //     this.setState({ email: e.target.value })
    // }
    setFormData = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        this.setState({ [name]: value })
    }
    render() {
        return (
            <div>
                <br />
                <form action="">

                    <input type="text" value={this.state.name} id='name' name='name' onChange={this.setFormData} />
                    <input type="text" value={this.state.email} id='email' name='email' onChange={this.setFormData} />
                </form>
                <p>
                    Name: {this.state.name}
                    <br />
                    Email: {this.state.email}
                </p>
            </div>
        )
    }
}


export class ReactFormsWithRef extends Component {
    state = {
        uname: '', password: ''
    }

    unameRef = React.createRef();
    pwdRef = React.createRef();
    divRef = React.createRef();
    handleLogin = (e) => {
        e.preventDefault();
        let mydiv = this.divRef.current;
        mydiv.style.background = 'blue';
        mydiv.style.color = 'white';
        mydiv.style.fontSize = '32px';
        mydiv.innerHTML = 'loggedIn'
        console.log('inside handleLogin', this.divRef.current.id)
        this.setState({ uname: this.unameRef.current.value, password: this.pwdRef.current.value })
        if (this.unameRef.current.value == '' || this.pwdRef.current.value == '') {
            alert('enter all credentials')
        } else {
            alert('Hello ' + this.unameRef.current.value)
        }
    }
    render() {
        // console.log('inside render', this.divRef.current.id)

        // this.divRef.current.id = 'blue'
        return (
            <div>
                <form>
                    <input type="text" ref={this.unameRef} />
                    <br />
                    <input type="password" ref={this.pwdRef} />
                    <br />
                    <input type="submit" onClick={this.handleLogin} />
                </form>
                <div id='mydiv' ref={this.divRef}>
                    You entered username = {this.state.uname}
                    <br />
                    You entered password = {this.state.password}

                </div>
            </div>
        )
        // console.log(this.unameRef.current.value)
    }
}
