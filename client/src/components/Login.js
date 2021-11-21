import React from 'react';

const Login = () => {
    return (
        <div className="login">
            <form className="login_form">
                <div className="login_title">
                    <h2>LOGIN</h2>
                </div>
                <div className="login_inputs">
                    <div className="login_email">
                        <input type="text" placeholder="Enter your email"/>
                    </div>
                    <div className="login_pass">
                        <input type="password" placeholder="Enter your password"/>
                    </div>
                    <div className="login_btn">
                        <button>Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
