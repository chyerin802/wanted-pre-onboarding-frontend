import React from 'react';

const SignUpForm = () => {
    return (
        <form>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id="email" data-testid="email-input"></input>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id="password" data-testid="password-input"></input>
            <button data-testid="signup-button">submit</button>
        </form>
    );
};

export default SignUpForm;