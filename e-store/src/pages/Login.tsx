import React from 'react';
import { login } from '../redux/user/user-actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './Login.scss';
import { userSelector } from '../redux/user/userSlice';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const { loading, error } = useSelector(userSelector);

	const loginHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		dispatch(login({ username, password }));
	};

	return (
		<div className="login-container">
			<div className="login-container__wrapper">
				<h1 className="login-container__wrapper--title">SIGN IN</h1>
				<form
					action=""
					className="login-container__wrapper--form"
					onSubmit={loginHandler}
				>
					<input
						className={`${error ? 'input-error' : ''}`}
						type="text"
						placeholder="username"
						onChange={(e: React.FormEvent<HTMLInputElement>) =>
							setUsername(e.currentTarget.value)
						}
					/>
					<input
						className={`${error ? 'input-error' : ''}`}
						type={'password'}
						placeholder="password"
						onChange={(e: React.FormEvent<HTMLInputElement>) =>
							setPassword(e.currentTarget.value)
						}
					/>
					{error && (
						<div className="error-text">Wrong username or password</div>
					)}
					<button type="submit" disabled={loading}>
						LOGIN
					</button>
					<a href="">FORGOT PASSWORD?</a>
					<a href="">CREATE A NEW ACCOUNT</a>
				</form>
			</div>
		</div>
	);
};

export default Login;
