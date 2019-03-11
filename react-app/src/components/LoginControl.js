/**
 * 条件渲染
 */
import React from 'react';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
    }

    login = () => {
        this.setState({
            isLogin: true
        })
    }

    logout = () => {
        this.setState({
            isLogin: false
        })
    }

    render(){
        let isLogin = this.state.isLogin;

        if(isLogin){
            return (
                <div>
                    <h2>Hello, Ekko_Chen</h2>
                    <button onClick={this.logout}>LogOut</button>
                </div>
            )
        }else {
            return (
                <div>
                    <h2>Hello, Guest</h2>
                    <button onClick={this.login}>LogIn</button>
                </div>
            )
        }
    }
}

export default LoginControl;