import React from 'react';
import './Register.scss';

const Register = () => {
	return (
		<div className="register-container">
			<div className="register-container__wrapper">
				<h1 className="register-container__wrapper--title">
					CREATE AN ACCOUNT
				</h1>
				<form action="" className="register-container__wrapper--form">
					<input type="text" placeholder="name" />
					<input type="text" placeholder="last name" />
					<input type="text" placeholder="username" />
					<input type="text" placeholder="email" />
					<input type="text" placeholder="password" />
					<input type="text" placeholder="confim password" />
					<span>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</span>
					<button>CREATE</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
