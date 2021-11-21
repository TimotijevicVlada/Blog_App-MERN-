import React from 'react';

const Register = () => {
    return (
        <div className="register">
            <form className="register_form">
                <div className="register_title">
                    <h2>REGISTER</h2>
                </div>
                <div className="register_inputs">
                    <div className="register_username">
                        <input type="text" placeholder="Enter your username"/>
                    </div>
                    <div className="register_email">
                        <input type="text" placeholder="Enter your email"/>
                    </div>
                    <div className="register_pass">
                        <input type="password" placeholder="Enter your password"/>
                    </div>
                    <div className="register_btn">
                        <button>Register</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register;
