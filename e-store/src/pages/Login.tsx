import React from 'react';
import './Login.scss';

const Login = () => {
	return (
		<div className="login-container">
			<div className="login-container__wrapper">
				<h1 className="login-container__wrapper--title">SIGN IN</h1>
				<form action="" className="login-container__wrapper--form">
					<input type="text" placeholder="username" />
					<input type={'password'} placeholder="password" />
					<button>LOGIN</button>
					<a href="">FORGOT PASSWORD?</a>
					<a href="">CREATE A NEW ACCOUNT</a>
				</form>
			</div>
		</div>
	);
};

export default Login;
